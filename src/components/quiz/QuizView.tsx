import { useState } from "react";
import { biomes } from "../../data/biomes";
import QuizProgress from "./QuizProgress";
import QuestionCard from "./QuestionCard";
import ResultCard from "./ResultCard";

interface QuizViewProps {
  onGoHome: () => void;
  onViewLeaderboard: () => void;
}

const totalQuestions = biomes.reduce((acc, b) => acc + b.questions.length, 0);

export default function QuizView({ onGoHome, onViewLeaderboard }: QuizViewProps) {
  const [biomeIndex, setBiomeIndex] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);

  const biome = biomes[biomeIndex];
  const question = biome.questions[questionIndex];

  const handleSelect = (i: number) => {
    if (selected !== null) return;
    setSelected(i);
    if (i === question.correctIndex) setScore((s) => s + 1);
  };

  const handleNext = () => {
    const isLastQuestionOfBiome = questionIndex === biome.questions.length - 1;
    if (!isLastQuestionOfBiome) {
      setQuestionIndex((q) => q + 1);
      setSelected(null);
      return;
    }
    setCompleted((c) => (c.includes(biomeIndex) ? c : [...c, biomeIndex]));
    const isLastBiome = biomeIndex === biomes.length - 1;
    if (!isLastBiome) {
      setBiomeIndex((b) => b + 1);
      setQuestionIndex(0);
      setSelected(null);
    } else {
      setFinished(true);
    }
  };

  const handleRestart = () => {
    setBiomeIndex(0);
    setQuestionIndex(0);
    setSelected(null);
    setScore(0);
    setCompleted([]);
    setFinished(false);
  };

  const globalQuestionNumber =
    biomes.slice(0, biomeIndex).reduce((a, b) => a + b.questions.length, 0) + questionIndex + 1;
  const isLastOfBiome = questionIndex === biome.questions.length - 1;
  const isLastOverall = biomeIndex === biomes.length - 1 && isLastOfBiome;

  return (
    <div className="relative min-h-[calc(100vh-88px)] w-full">
      <div
        key={biome.id}
        className="animate-fade-rise absolute inset-0 -z-10 bg-cover bg-center grayscale contrast-125"
        style={{ backgroundImage: `url(${biome.photo})` }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/20 via-black/55 to-black" />
      <QuizProgress total={biomes.length} currentIndex={biomeIndex} completed={completed} />
      <div className="flex flex-col items-center px-6 pb-24 pt-2 text-center">
        {!finished ? (
          <div key={biome.id} className="animate-fade-rise flex w-full flex-col items-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/60">
              Station {biomeIndex + 1}/{biomes.length} &middot; {biome.name}
            </p>
            <h2 className="font-serif mt-2 text-4xl text-white sm:text-5xl">
              {biome.emoji} {biome.name}
            </h2>
            <p className="mt-3 max-w-xl text-sm text-white/80 sm:text-base">{biome.intro}</p>
            <QuestionCard
              key={`${biomeIndex}-${questionIndex}`}
              question={question}
              questionNumber={globalQuestionNumber}
              totalQuestions={totalQuestions}
              selected={selected}
              onSelect={handleSelect}
              onNext={handleNext}
              isLastOfBiome={isLastOfBiome}
              isLastOverall={isLastOverall}
            />
            <p className="mt-4 font-mono text-[10px] text-white/35">{biome.photoCredit}</p>
          </div>
        ) : (
          <ResultCard
            score={score}
            total={totalQuestions}
            onRestart={handleRestart}
            onGoHome={onGoHome}
            onViewLeaderboard={onViewLeaderboard}
          />
        )}
      </div>
    </div>
  );
}
