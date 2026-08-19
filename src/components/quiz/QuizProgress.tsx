interface QuizProgressProps {
  total: number;
  currentIndex: number;
  completed: number[];
}

export default function QuizProgress({ total, currentIndex, completed }: QuizProgressProps) {
  return (
    <div className="flex items-center justify-center gap-2 px-6 py-4">
      {Array.from({ length: total }).map((_, i) => {
        const done = completed.includes(i);
        const current = i === currentIndex;
        return (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              current ? "w-8 bg-white" : done ? "w-4 bg-white/70" : "w-4 bg-white/25"
            }`}
          />
        );
      })}
    </div>
  );
}
