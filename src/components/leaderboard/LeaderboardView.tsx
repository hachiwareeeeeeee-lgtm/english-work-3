import { useEffect, useState } from "react";
import { get, limitToLast, orderByChild, query, ref } from "firebase/database";
import { db } from "../../firebase";

interface ScoreEntry {
  id: string;
  name: string;
  score: number;
  total: number;
  badge: string;
}

const MEDALS = ["🥇", "🥈", "🥉"];

export default function LeaderboardView() {
  const [entries, setEntries] = useState<ScoreEntry[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    async function load() {
      try {
        const scoresQuery = query(ref(db, "scores"), orderByChild("score"), limitToLast(20));
        const snapshot = await get(scoresQuery);
        const results: ScoreEntry[] = [];
        snapshot.forEach((child) => {
          const data = child.val();
          results.push({
            id: child.key ?? "",
            name: String(data.name ?? "Anonymous"),
            score: Number(data.score ?? 0),
            total: Number(data.total ?? 0),
            badge: String(data.badge ?? ""),
          });
        });
        results.reverse();
        setEntries(results);
        setStatus("ready");
      } catch (err) {
        console.error(err);
        setStatus("error");
      }
    }
    load();
  }, []);

  return (
    <section className="relative z-10 mx-auto max-w-2xl overflow-hidden px-8 py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_15%,rgba(0,0,0,0.05),transparent_40%),radial-gradient(circle_at_85%_80%,rgba(0,0,0,0.06),transparent_45%)]" />
      <span className="pointer-events-none absolute left-[4%] top-[4%] select-none text-5xl opacity-[0.12] sm:text-6xl">🏆</span>
      <span className="pointer-events-none absolute right-[6%] top-[10%] select-none text-4xl opacity-[0.12] sm:text-5xl">🐜</span>
      <span className="pointer-events-none absolute bottom-[6%] left-[8%] select-none text-4xl opacity-[0.12] sm:text-5xl">🌱</span>

      <h1 className="font-serif text-center text-5xl tracking-tight text-[#000000] sm:text-6xl">
        Leaderboard
      </h1>
      <div className="mx-auto mt-5 h-px w-16 bg-black/15" />
      <p className="mt-4 text-center text-lg text-[#6F6F6F]">
        The top explorers of Tiny Creatures.
      </p>

      {status === "loading" && (
        <p className="mt-10 text-center text-sm text-[#6F6F6F]">Loading scores...</p>
      )}
      {status === "error" && (
        <p className="mt-10 text-center text-sm text-[#6F6F6F]">
          Couldn&rsquo;t load the leaderboard right now.
        </p>
      )}
      {status === "ready" && entries.length === 0 && (
        <p className="mt-10 text-center text-sm text-[#6F6F6F]">
          No scores yet — be the first to play!
        </p>
      )}

      {status === "ready" && entries.length > 0 && (
        <ol className="mt-10 flex flex-col gap-2">
          {entries.map((entry, i) => (
            <li
              key={entry.id}
              className={`flex items-center justify-between rounded-2xl border px-5 py-3 ${
                i < 3 ? "border-black/20 bg-black/[0.03]" : "border-black/10"
              }`}
            >
              <span className="flex items-center gap-3">
                <span className="w-7 text-sm text-[#6F6F6F]">
                  {i < 3 ? MEDALS[i] : i + 1}
                </span>
                <span className="text-sm text-[#000000]">{entry.name}</span>
              </span>
              <span className="font-mono text-sm text-[#6F6F6F]">
                {entry.score}/{entry.total}
              </span>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}
