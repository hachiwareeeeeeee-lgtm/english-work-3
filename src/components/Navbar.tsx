type View = "landing" | "quiz" | "about" | "contact";

interface NavbarProps {
  view: View;
  onBeginJourney: () => void;
  onGoHome: () => void;
  onNavigate: (view: View) => void;
}

const NAV_LINKS: { label: string; view: View }[] = [
  { label: "Home", view: "landing" },
  { label: "About", view: "about" },
  { label: "Reach Us", view: "contact" },
];

export default function Navbar({ view, onBeginJourney, onGoHome, onNavigate }: NavbarProps) {
  const onDark = view === "quiz";

  const handleNavClick = (target: View) => {
    if (target === "landing") {
      onGoHome();
    } else {
      onNavigate(target);
    }
  };

  return (
    <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
      <button
        type="button"
        onClick={onGoHome}
        className={`font-serif text-3xl tracking-tight transition-colors duration-300 ${
          onDark ? "text-white" : "text-[#000000]"
        }`}
      >
        Tiny Creatures<sup className="text-base">&reg;</sup>
      </button>
      <ul className="hidden items-center gap-8 md:flex">
        {NAV_LINKS.map((link) => {
          const isActive = link.view === view;
          return (
            <li key={link.label}>
              <button
                type="button"
                onClick={() => handleNavClick(link.view)}
                className={`text-sm transition-colors duration-200 ${
                  onDark
                    ? isActive
                      ? "text-white"
                      : "text-white/60 hover:text-white"
                    : isActive
                      ? "text-[#000000]"
                      : "text-[#6F6F6F] hover:text-[#000000]"
                }`}
              >
                {link.label}
              </button>
            </li>
          );
        })}
      </ul>
      {view === "landing" ? (
        <button
          type="button"
          onClick={onBeginJourney}
          className="rounded-full bg-[#000000] px-6 py-2.5 text-sm text-[#FFFFFF] transition-transform duration-300 ease-out hover:scale-[1.03]"
        >
          Begin Journey
        </button>
      ) : (
        <button
          type="button"
          onClick={onGoHome}
          className={`rounded-full border px-6 py-2.5 text-sm transition-colors duration-300 ${
            onDark
              ? "border-white/40 text-white hover:bg-white/10"
              : "border-black/20 text-black hover:bg-black/5"
          }`}
        >
          {onDark ? "Exit" : "Back to Home"}
        </button>
      )}
    </nav>
  );
}
