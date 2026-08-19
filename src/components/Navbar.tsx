type View = "landing" | "quiz";

interface NavbarProps {
  view: View;
  onBeginJourney: () => void;
  onGoHome: () => void;
}

const NAV_LINKS: { label: string; active?: boolean }[] = [
  { label: "Home", active: true },
  { label: "Studio" },
  { label: "About" },
  { label: "Journal" },
  { label: "Reach Us" },
];

export default function Navbar({ view, onBeginJourney, onGoHome }: NavbarProps) {
  const onDark = view === "quiz";

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
        {NAV_LINKS.map((link) => (
          <li key={link.label}>
            <a
              href="#"
              className={`text-sm transition-colors duration-200 ${
                onDark
                  ? link.active
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                  : link.active
                    ? "text-[#000000]"
                    : "text-[#6F6F6F] hover:text-[#000000]"
              }`}
            >
              {link.label}
            </a>
          </li>
        ))}
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
          className="rounded-full border border-white/40 px-6 py-2.5 text-sm text-white transition-colors duration-300 hover:bg-white/10"
        >
          Exit
        </button>
      )}
    </nav>
  );
}
