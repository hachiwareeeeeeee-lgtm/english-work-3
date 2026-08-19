interface HeroProps {
  onBeginJourney: () => void;
}

export default function Hero({ onBeginJourney }: HeroProps) {
  return (
    <section
      className="relative z-10 flex flex-col items-center justify-center px-6 pb-40 text-center"
      style={{ paddingTop: "calc(8rem - 75px)" }}
    >
      <h1
        className="animate-fade-rise max-w-7xl font-serif text-5xl font-normal text-[#000000] sm:text-7xl md:text-8xl"
        style={{ lineHeight: 0.95, letterSpacing: "-2.46px" }}
      >
        Behind the <em className="italic text-[#6F6F6F]">big</em>
      </h1>

      <p className="animate-fade-rise-delay mt-8 max-w-2xl text-base leading-relaxed text-[#6F6F6F] sm:text-lg">
        An interactive expedition into the world&rsquo;s smallest wonders —
        from leafcutter ants hauling fifty times their own weight, to coral
        reefs built by creatures smaller than a grain of rice. Five biomes.
        Ten thousand tiny lives. One very big story.
      </p>

      <button
        type="button"
        onClick={onBeginJourney}
        className="animate-fade-rise-delay-2 mt-12 rounded-full bg-[#000000] px-14 py-5 text-base text-[#FFFFFF] transition-transform duration-300 ease-out hover:scale-[1.03]"
      >
        Begin Journey
      </button>
    </section>
  );
}
