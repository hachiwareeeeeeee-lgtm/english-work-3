import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VideoBackground from "./components/VideoBackground";
import QuizView from "./components/quiz/QuizView";

type View = "landing" | "quiz";

export default function App() {
  const [view, setView] = useState<View>("landing");

  const beginJourney = () => setView("quiz");
  const goHome = () => setView("landing");

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-white">
      {view === "landing" && <VideoBackground />}

      <Navbar view={view} onBeginJourney={beginJourney} onGoHome={goHome} />

      <div key={view} className="animate-fade-rise">
        {view === "landing" ? (
          <Hero onBeginJourney={beginJourney} />
        ) : (
          <QuizView onGoHome={goHome} />
        )}
      </div>
    </div>
  );
}
