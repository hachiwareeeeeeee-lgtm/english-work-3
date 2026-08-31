export default function ContactView() {
  return (
    <section className="relative z-10 mx-auto max-w-3xl overflow-hidden px-8 py-24 text-center">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_25%_25%,rgba(0,0,0,0.05),transparent_40%),radial-gradient(circle_at_75%_70%,rgba(0,0,0,0.06),transparent_45%)]" />
      <span className="pointer-events-none absolute left-[6%] top-[10%] select-none text-5xl opacity-[0.12] sm:text-6xl">🐌</span>
      <span className="pointer-events-none absolute right-[8%] top-[20%] select-none text-4xl opacity-[0.12] sm:text-5xl">🍄</span>
      <span className="pointer-events-none absolute bottom-[10%] right-[12%] select-none text-4xl opacity-[0.12] sm:text-5xl">🐝</span>

      <h1 className="font-serif text-5xl tracking-tight text-[#000000] sm:text-6xl">
        Reach Us
      </h1>
      <div className="mx-auto mt-5 h-px w-16 bg-black/15" />
      <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-[#6F6F6F]">
        Questions, ideas, or a tiny creature I should know about? Would
        love to hear from you.
      </p>
      <button
        type="button"
        onClick={() => {
          window.location.href = "mailto:tassile000@gmail.com";
        }}
        className="mt-10 inline-block rounded-full bg-[#000000] px-8 py-3 text-sm text-white transition-transform duration-300 ease-out hover:scale-[1.03]"
      >
        tassile000@gmail.com
      </button>
    </section>
  );
}
