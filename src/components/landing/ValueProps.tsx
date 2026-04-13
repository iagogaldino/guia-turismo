import { Icon } from "../Icon.tsx";

const items = [
  {
    icon: "star" as const,
    title: "Experiências personalizadas",
    body: "Rotas e ritmo adaptados ao que procura — longe das armadilhas para turistas, com o melhor do local.",
  },
  {
    icon: "diversity_3" as const,
    title: "Guias verificados",
    body: "Profissionais locais qualificados, apaixonados por história e cultura, com foco na sua segurança.",
  },
  {
    icon: "bolt" as const,
    title: "Variedade de formatos",
    body: "A pé, bicicleta, patinete, tuk tuk ou carro: escolha como quer descobrir Portugal.",
  },
  {
    icon: "favorite" as const,
    title: "Reserva simples",
    body: "Escolha o passeio, data, grupo e idioma — acompanhamento claro do início ao fim.",
  },
];

export function ValueProps() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-8">
        <p className="mb-12 text-center text-sm font-semibold uppercase tracking-wide text-secondary">
          Porquê Guia Turismo
        </p>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className="space-y-4">
              <Icon name={item.icon} className="text-4xl text-secondary" filled />
              <h4 className="text-title-lg text-primary">{item.title}</h4>
              <p className="text-sm text-on-surface-variant">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
