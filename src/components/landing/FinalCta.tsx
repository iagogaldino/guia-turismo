import { WHATSAPP_CHAT_URL, WHATSAPP_NUMBER_LABEL } from "../../constants/contact.ts";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-white py-32">
      <div className="absolute top-0 right-0 h-full w-1/3 translate-x-20 -skew-x-12 bg-secondary/5" />
      <div className="relative z-10 mx-auto max-w-4xl px-8 text-center">
        <h2 className="text-display-lg mb-8 text-primary">Comece a sua próxima viagem</h2>
        <p className="text-body-lg mx-auto mb-12 max-w-xl text-on-surface-variant">
          Escolha o passeio, o idioma e o grupo — nós ligamo-lo a guias locais em Portugal para uma experiência
          autêntica e sem complicações.
        </p>
        <div className="flex flex-col justify-center gap-6 sm:flex-row">
          <button
            type="button"
            className="editorial-shadow rounded-full bg-secondary px-10 py-5 text-xl font-bold text-white transition-all hover:scale-105 hover:bg-on-secondary-fixed-variant"
          >
            Reservar experiência
          </button>
          <a
            href={WHATSAPP_CHAT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border-2 border-primary/20 bg-white px-10 py-5 text-xl font-bold text-primary transition-all hover:bg-slate-50"
            aria-label={`Falar connosco no WhatsApp (${WHATSAPP_NUMBER_LABEL})`}
          >
            Falar connosco
          </a>
        </div>
      </div>
    </section>
  );
}
