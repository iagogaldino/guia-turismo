import { Icon } from "../Icon.tsx";

const testimonials = [
  {
    quote:
      "«O tour por Alfama foi mágico. O guia conhecia histórias que não estão em nenhum livro. Senti-me local por um dia!»",
    name: "Ana Oliveira",
    place: "Porto, Portugal",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB4TC8c3x1zupnxF_jdx_Hy6ss1ygws4C1A0OvaMQhjJLU0OAEluEJZlGRBHIX-KgwBWFS_hmPAmSJ_Wmtxi6vIUBdLKmNO4MZeNSTRsQz6F758TqvArnIdMBtcl572GhfPHoAWzGK8cM7QxUuqUGf-YwZ4-KwiwFM3J_n8mqlEq58S6VWvEkFqZkUB_cAVbkmcOEsTteYbufnO5hplYlTNRNl1wGcIySHt8pCyOSE_90dcmPv4IkgJoMSH4Mh6NbQiBE4poUn6OzAW",
    alt: "Retrato de Ana Oliveira",
  },
  {
    quote:
      "«Experiência incrível no Douro. O carro era confortável e a seleção das quintas foi soberba. Vale cada cêntimo.»",
    name: "Mark Thompson",
    place: "Londres, Reino Unido",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA1ao2edkdr01p_L51gtY5NBiRi7l-zthaeZYVDw9jrczp3DQ3VeDOGavX41j7h6irRZyv5pJPI9sf83hMU7MZjiN2E0JTgzEzVF9MsgcrK-T_-sVUMOZwMlTyDZCHHOspH1UZPqcLjns97RQZJcir9gykcF7cg_2_17fFPd_k_uISRyrTgML4zTOc0whvnVo0hmGa6cS6LYzYfxbQMA587USmoGm4kIaFfV-70tQozRZ106As_nksA6Fku0HjpebyLBemcrn3ArTMk",
    alt: "Retrato de Mark Thompson",
  },
  {
    quote:
      "«O passeio de tuk tuk com as crianças foi o ponto alto das férias. Divertido, seguro e muito educativo.»",
    name: "Elena Martínez",
    place: "Madrid, Espanha",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDSeS_XLqss6D6RBKSeiCEHFxZXoVizmZyIKNshbI7ZWu5tsB2_4TBbuUwjSNBQSCjh2ojtaJyB16UzYFR_2w7iNZW8fL5-SIQMmzpnf_kloJ1IqKjvCWzvH_OWV59d_zVJTgkEcU7JBoGFX_4xZKKLe8WdqgkUa7MxbL5uP2lRmi-w2cEiROWDmIr3XT4kUAvnMH1_utTiu-krty2SshmXlCSqreNoJj6kfKyniKoM2HP-58lxkfjghq83xkGKtpSQSpi6Ry2k_UOl",
    alt: "Retrato de Elena Martínez",
  },
];

function Stars() {
  return (
    <div className="mb-4 flex gap-1 text-secondary">
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon key={i} name="star" filled />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="bg-surface-container-low py-24">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-16 text-center">
          <span className="text-label-md uppercase text-secondary">Prova social</span>
          <h2 className="text-headline-md mt-2 text-primary">Avaliações reais de viajantes</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-on-surface-variant">
            Experiências bem avaliadas e guias verificados — a confiança de quem já explorou connosco.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="editorial-shadow rounded-xl bg-surface-container-lowest p-8">
              <Stars />
              <p className="text-body-lg mb-6 italic">{t.quote}</p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full">
                  <img src={t.avatar} alt={t.alt} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div>
                  <p className="text-sm font-bold">{t.name}</p>
                  <p className="text-xs text-on-surface-variant">{t.place}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
