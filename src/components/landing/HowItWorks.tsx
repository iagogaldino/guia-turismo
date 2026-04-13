import { Icon } from "../Icon.tsx";

const steps = [
  {
    icon: "map" as const,
    title: "Escolha o passeio",
    body: "Selecione o tipo de experiência: a pé, bicicleta, patinete, tuk tuk ou carro.",
    highlight: false,
  },
  {
    icon: "calendar_month" as const,
    title: "Data e grupo",
    body: "Indique a data e o número de pessoas — nós ajudamos a combinar com o guia.",
    highlight: false,
  },
  {
    icon: "language" as const,
    title: "Idioma",
    body: "Escolha entre os idiomas disponíveis para ouvir a história com clareza.",
    highlight: false,
  },
  {
    icon: "verified" as const,
    title: "Reserve",
    body: "Confirmação simples e gestão da reserva com guias verificados.",
    highlight: true,
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-16 text-center">
          <span className="text-label-md uppercase text-secondary">Processo simples</span>
          <h2 className="text-headline-md mt-2 text-primary">Reserve em 4 passos</h2>
        </div>
        <div className="relative grid grid-cols-1 gap-12 md:grid-cols-4">
          {steps.map((s) => (
            <div key={s.title} className="flex flex-col items-center text-center">
              <div
                className={`mb-6 flex h-20 w-20 items-center justify-center rounded-full editorial-shadow ${
                  s.highlight
                    ? "bg-secondary text-white"
                    : "bg-surface-container-low text-primary"
                }`}
              >
                <Icon name={s.icon} className="text-4xl" />
              </div>
              <h3 className="text-title-lg mb-2">{s.title}</h3>
              <p className="text-on-surface-variant">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
