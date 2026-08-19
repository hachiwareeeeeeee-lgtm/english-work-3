import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VideoBackground from "./components/VideoBackground";
import QuizView from "./components/quiz/QuizView";
import AboutView from "./components/AboutView";
import ContactView from "./components/ContactView";

type View = "landing" | "quiz" | "about" | "contact";

export default function App() {
  const [view, setView] = useState<View>("landing");

  const navigate = (next: View) => {
    setView(next);
    window.history.pushState({ view: next }, "");
  };

  const beginJourney = () => navigate("quiz");
  const goHome = () => navigate("landing");

  useEffect(() => {
    window.history.replaceState({ view: "landing" }, "");

    const handlePopState = (event: PopStateEvent) => {
      const newView = (event.state?.view as View) || "landing";
      setView(newView);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-white">
      {view === "landing" && <VideoBackground />}

      <Navbar
        view={view}
        onBeginJourney={beginJourney}
        onGoHome={goHome}
        onNavigate={navigate}
      />

      <div key={view} className="animate-fade-rise">
        {view === "landing" && <Hero onBeginJourney={beginJourney} />}
        {view === "quiz" && <QuizView onGoHome={goHome} />}
        {view === "about" && <AboutView />}
        {view === "contact" && <ContactView />}
      </div>
    </div>
  );
}
