interface ResultCardProps {
  score: number;
  total: number;
  onRestart: () => void;
  onGoHome: () => void;
}

function getBadge(score: number) {
  if (score >= 9) return { emoji: "\ud83c\udfc6", name: "Wild Explorer" };
  if (score >= 7) return { emoji: "\ud83e\udded", name: "Expedition Guide" };
  if (score >= 4) return { emoji: "\ud83c\udf3f", name: "Tiny Creatures Explorer" };
  return { emoji: "\ud83d\udd0d", name: "Field Trainee" };
}

export default function ResultCard({ score, total, onRestart, onGoHome }: ResultCardProps) {
  const badge = getBadge(score);

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
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
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
