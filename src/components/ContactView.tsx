export default function ContactView() {
  return (
    <section className="relative z-10 mx-auto max-w-3xl px-8 py-24 text-center">
      <h1 className="font-serif text-5xl tracking-tight text-[#000000] sm:text-6xl">
        Reach Us
      </h1>
      <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-[#6F6F6F]">
        Questions, ideas, or a tiny creature we should know about? We would
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
