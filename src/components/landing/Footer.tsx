import { Icon } from "../Icon.tsx";
import logoAllon from "../../assets/project/logo.png";

export function Footer() {
  return (
    <footer className="mt-20 w-full rounded-t-[2rem] bg-slate-100 dark:bg-slate-950">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-12 py-16 md:grid-cols-4">
        <div className="space-y-6">
          <a href="#" className="inline-block" aria-label="ALLON — Início">
            <img src={logoAllon} alt="" className="h-16 w-auto sm:h-20" />
            <span className="sr-only">ALLON</span>
          </a>
          <p className="text-sm tracking-wide text-slate-500 dark:text-slate-400">
            Plataforma que liga turistas a guias locais em Portugal — experiências personalizadas, com autenticidade
            e apoio ponta a ponta.
          </p>
        </div>
        <div className="space-y-4">
          <h5 className="font-bold text-sky-900 dark:text-sky-200">Empresa</h5>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-sm tracking-wide text-slate-500 transition-all duration-200 hover:text-sky-700 dark:text-slate-400 dark:hover:text-sky-300"
              >
                Sobre nós
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm tracking-wide text-slate-500 transition-all duration-200 hover:text-sky-700 dark:text-slate-400 dark:hover:text-sky-300"
              >
                Segurança
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm tracking-wide text-slate-500 transition-all duration-200 hover:text-sky-700 dark:text-slate-400 dark:hover:text-sky-300"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h5 className="font-bold text-sky-900 dark:text-sky-200">Legal</h5>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-sm tracking-wide text-slate-500 transition-all duration-200 hover:text-sky-700 dark:text-slate-400 dark:hover:text-sky-300"
              >
                Termos de utilização
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm tracking-wide text-slate-500 transition-all duration-200 hover:text-sky-700 dark:text-slate-400 dark:hover:text-sky-300"
              >
                Política de privacidade
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h5 className="font-bold text-sky-900 dark:text-sky-200">Redes</h5>
          <div className="flex gap-4">
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary shadow-sm transition-transform hover:scale-110 dark:bg-slate-800"
              aria-label="Website"
            >
              <Icon name="public" />
            </a>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary shadow-sm transition-transform hover:scale-110 dark:bg-slate-800"
              aria-label="Rede social"
            >
              <Icon name="photo_camera" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 px-12 py-8 text-center dark:border-slate-800">
        <p className="text-sm tracking-wide text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} Guia Turismo. Feito para explorar Portugal com quem o conhece de verdade.
        </p>
      </div>
    </footer>
  );
}
