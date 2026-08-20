import { useState } from "react";
import type { FormEvent } from "react";
import { push, ref, set, serverTimestamp } from "firebase/database";
import { db } from "../../firebase";

interface ResultCardProps {
  score: number;
  total: number;
  onRestart: () => void;
  onGoHome: () => void;
  onViewLeaderboard: () => void;
}

function getBadge(score: number) {
  if (score >= 9) return { emoji: "🏆", name: "Wild Explorer" };
  if (score >= 7) return { emoji: "🧭", name: "Expedition Guide" };
  if (score >= 4) return { emoji: "🌿", name: "Tiny Creatures Explorer" };
  return { emoji: "🔍", name: "Field Trainee" };
}

export default function ResultCard({
  score,
  total,
  onRestart,
  onGoHome,
  onViewLeaderboard,
}: ResultCardProps) {
  const badge = getBadge(score);
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed || status === "saving" || status === "saved") return;

    setStatus("saving");
    try {
      const newEntryRef = push(ref(db, "scores"));
      await set(newEntryRef, {
        name: trimmed.slice(0, 40),
        score,
        total,
        badge: badge.name,
        createdAt: serverTimestamp(),
      });
      setStatus("saved");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="animate-fade-rise mt-8 w-full max-w-xl rounded-3xl border border-white/15 bg-white/10 p-8 text-center backdrop-blur-md">
      <div className="text-5xl">{badge.emoji}</div>
      <h2 className="font-serif mt-3 text-3xl text-white sm:text-4xl">Expedition complete</h2>
      <p className="mt-2 font-mono text-sm text-white/60">
        {score} / {total} correct
      </p>
      <div className="mt-4 inline-block rounded-full bg-white px-5 py-2 text-sm font-medium text-black">
        {badge.emoji} {badge.name}
      </div>
      <p className="mt-5 text-sm leading-relaxed text-white/80">
        Now it&rsquo;s your turn &mdash; tell your class the tiny-creature facts that surprised you
        most. Time to become the teacher for a day.
      </p>

      {status !== "saved" ? (
        <form
          onSubmit={handleSubmit}
          className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
        >
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            maxLength={40}
            className="w-full max-w-xs rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm text-white placeholder-white/50 outline-none focus:border-white/60 sm:w-auto"
          />
          <button
            type="submit"
            disabled={status === "saving"}
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform duration-300 ease-out hover:scale-[1.03] disabled:opacity-60"
          >
            {status === "saving" ? "Saving..." : "Save my score"}
          </button>
        </form>
      ) : (
        <p className="mt-6 text-sm text-white/80">✓ Score saved to the leaderboard!</p>
      )}
      {status === "error" && (
        <p className="mt-3 text-sm text-red-300">
          Couldn&rsquo;t save your score right now, try again.
        </p>
      )}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <button
          type="button"
          onClick={onViewLeaderboard}
          className="rounded-full border border-white/40 px-6 py-3 text-sm font-medium text-white transition-transform duration-300 ease-out hover:scale-[1.03]"
        >
          View leaderboard
        </button>
        <button
          type="button"
          onClick={onRestart}
          className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform duration-300 ease-out hover:scale-[1.03]"
        >
          Play again
        </button>
        <button
          type="button"
          onClick={onGoHome}
          className="rounded-full border border-white/40 px-6 py-3 text-sm font-medium text-white transition-transform duration-300 ease-out hover:scale-[1.03]"
        >
          Back to home
        </button>
      </div>
    </div>
  );
}
