const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAztITCkVzapvrRr6EByA0fCt2TbJvD7V2k5jYPLTNauZ9otLlg07u6kAX5niK9btj9muSrVpkT8VdiDybM8iQF2jukc0ZwHaUJOICAk1nO-3wKQyePvMr2bwhIHSz4y8OmYmJrPUNN5W3B_NwOEspZADlXD-bRJJfB9A6OpwzwwdgUVFrDSqqOnsfP0nMeGopLUk-GVaSOyeXIHt-4rWIB_2begE-ImxhkWerEU4gd9hz1UisjIZA2lyxYYAs0c6l4M39HFdwRrR5q";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMG}
          alt="Vista sobre o bairro da Alfama em Lisboa ao pôr do sol, com telhados e o rio Tejo"
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
