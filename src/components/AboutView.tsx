export default function AboutView() {
  return (
    <section className="relative z-10 mx-auto max-w-4xl overflow-hidden px-8 py-24 text-center">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(0,0,0,0.05),transparent_40%),radial-gradient(circle_at_80%_75%,rgba(0,0,0,0.06),transparent_45%)]" />
      <span className="pointer-events-none absolute left-[4%] top-[6%] select-none text-5xl opacity-[0.12] sm:text-6xl">🐜</span>
      <span className="pointer-events-none absolute right-[6%] top-[14%] select-none text-4xl opacity-[0.12] sm:text-5xl">🌿</span>
      <span className="pointer-events-none absolute bottom-[8%] left-[10%] select-none text-4xl opacity-[0.12] sm:text-5xl">🪸</span>
      <span className="pointer-events-none absolute bottom-[4%] right-[8%] select-none text-5xl opacity-[0.12] sm:text-6xl">🦋</span>

      <h1 className="font-serif text-5xl tracking-tight text-[#000000] sm:text-6xl">
        About Me
      </h1>
      <div className="mx-auto mt-5 h-px w-16 bg-black/15" />
      <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[#6F6F6F]">
        Tiny Creatures began as a simple question I kept asking myself: what
        does the world look like from an inch off the ground? I build
        interactive journeys that shrink you down to the scale of ants,
        beetles, and coral polyps, so the smallest lives on Earth get the
        biggest stage.
      </p>
      <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#6F6F6F]">
        Five biomes, ten thousand tiny lives, and one very big story — all
        researched, illustrated, and coded by me, someone who still stops to
        watch ants carry crumbs across the sidewalk.
      </p>
    </section>
  );
}
