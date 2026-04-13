import { useState } from "react";
import { Icon } from "../Icon.tsx";
import logoAllon from "../../assets/project/logo.png";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass =
    "font-['Noto_Serif'] text-lg font-medium text-slate-600 transition-colors duration-300 hover:text-orange-700 dark:text-slate-400 dark:hover:text-orange-400";
  const linkActive =
    "border-b-2 border-orange-700 pb-1 text-sky-900 dark:text-sky-100";

  return (
    <nav className="fixed top-0 z-50 w-full bg-slate-50/70 shadow-sm backdrop-blur-xl dark:bg-slate-900/70 dark:shadow-none">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
        <a className="flex items-center gap-2" href="#" aria-label="ALLON — Início">
          <img src={logoAllon} alt="" className="h-14 w-auto sm:h-16" />
          <span className="sr-only">ALLON</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          <a className={`${linkClass} ${linkActive}`} href="#experiencias">
            Experiências
          </a>
          <a className={linkClass} href="#como-funciona">
            Como funciona
          </a>
          <a className={linkClass} href="#guias">
            Para guias
          </a>
        </div>
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="scale-95 rounded-full bg-gradient-to-br from-primary to-primary-container px-6 py-2 font-semibold text-on-primary transition-transform hover:scale-100 active:duration-100"
          >
            Registar
          </button>
          <button
            type="button"
            className="text-primary md:hidden"
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} className="text-3xl" />
          </button>
        </div>
      </div>
      {open ? (
        <div className="flex flex-col gap-4 border-t border-slate-200 px-8 py-4 md:hidden dark:border-slate-800">
          <a
            className="font-['Noto_Serif'] text-lg font-medium text-sky-900"
            href="#experiencias"
            onClick={() => setOpen(false)}
          >
            Experiências
          </a>
          <a
            className="font-['Noto_Serif'] text-lg font-medium text-slate-600"
            href="#como-funciona"
            onClick={() => setOpen(false)}
          >
            Como funciona
          </a>
          <a
            className="font-['Noto_Serif'] text-lg font-medium text-slate-600"
            href="#guias"
            onClick={() => setOpen(false)}
          >
            Para guias
          </a>
        </div>
      ) : null}
    </nav>
  );
}
