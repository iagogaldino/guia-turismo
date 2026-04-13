import heroImg from "../../assets/project/hero-riverfront.jpeg";

const HERO_IMG = heroImg;

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMG}
          alt="Cais junto ao rio Tejo em Lisboa, com calçada portuguesa e céu azul"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent" />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-7xl px-8">
        <div className="max-w-2xl">
          <h1 className="text-display-lg mb-6 text-white">
            Portugal autêntico com quem vive aqui
          </h1>
          <p className="text-body-lg mb-8 max-w-lg leading-relaxed text-slate-100">
            A nossa plataforma liga turistas a guias locais qualificados para
            passeios personalizados — do formato ao idioma, tudo à sua medida.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#experiencias"
              className="editorial-shadow rounded-full bg-secondary px-8 py-4 text-center text-lg font-bold text-white transition-colors hover:bg-on-secondary-fixed-variant"
            >
              Explorar experiências
            </a>
            <a
              href="#como-funciona"
              className="rounded-full border-2 border-white/30 px-8 py-4 text-center text-lg font-bold text-white backdrop-blur-md transition-colors hover:bg-white/10"
            >
              Como funciona
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
