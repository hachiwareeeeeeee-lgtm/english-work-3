import { useMemo } from "react";
import type { Question } from "../../data/biomes";

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  selected: number | null;
  onSelect: (index: number) => void;
  onNext: () => void;
  isLastOfBiome: boolean;
  isLastOverall: boolean;
}

export default function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  selected,
  onSelect,
  onNext,
  isLastOfBiome,
  isLastOverall,
}: QuestionCardProps) {
  const answered = selected !== null;
  const isCorrect = answered && selected === question.correctIndex;

  // Shuffle the display order of the options once per question, so the
  // correct answer isn't always sitting in the same spot. We shuffle
  // *indices* (not the strings) so `selected`/`correctIndex` keep meaning
  // the original option, unchanged everywhere else in the app.
  const displayOrder = useMemo(() => {
    const order = question.options.map((_, i) => i);
    for (let i = order.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }
    return order;
  }, [question]);

  let nextLabel = "Next question \u2192";
  if (isLastOfBiome && !isLastOverall) nextLabel = "Dive into the next biome \u2192";
  if (isLastOverall) nextLabel = "See results \ud83c\udfc6";

  return (
    <div className="animate-fade-rise mt-8 w-full max-w-xl rounded-3xl border border-white/15 bg-white/10 p-6 text-left backdrop-blur-md sm:p-8">
      <p className="font-mono text-xs tracking-widest text-white/50">
        QUESTION {questionNumber} OF {totalQuestions}
      </p>
      <h3 className="font-serif mt-2 text-2xl leading-snug text-white sm:text-3xl">
        {question.text}
      </h3>
      <div className="mt-6 flex flex-col gap-3">
        {displayOrder.map((originalIndex, displayIndex) => {
          const option = question.options[originalIndex];
          let stateClasses = "border-white/20 bg-white/5 text-white hover:bg-white/15";
          if (answered && originalIndex === question.correctIndex) {
            stateClasses = "border-white bg-white text-black";
          } else if (answered && originalIndex === selected) {
            stateClasses = "border-red-300/70 bg-red-500/20 text-white";
          } else if (answered) {
            stateClasses = "border-white/10 bg-white/5 text-white/40";
          }
          return (
            <button
              key={option}
              type="button"
              disabled={answered}
              onClick={() => onSelect(originalIndex)}
              className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-left text-sm transition-all duration-300 sm:text-base ${stateClasses}`}
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-current font-mono text-xs">
                {String.fromCharCode(65 + displayIndex)}
              </span>
              {option}
            </button>
          );
        })}
      </div>
      {answered && (
        <div
          className={`animate-fade-rise mt-5 rounded-2xl px-4 py-3 text-sm leading-relaxed ${
            isCorrect ? "bg-white/90 text-black" : "bg-white/10 text-white"
          }`}
        >
          {isCorrect ? question.feedbackCorrect : question.feedbackIncorrect}
        </div>
      )}
      {answered && (
        <button
          type="button"
          onClick={onNext}
          className="mt-5 w-full rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform duration-300 ease-out hover:scale-[1.02] sm:text-base"
        >
          {nextLabel}
        </button>
      )}
    </div>
  );
}
