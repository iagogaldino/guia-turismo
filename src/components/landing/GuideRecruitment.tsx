import { Icon } from "../Icon.tsx";

import guideImg from "../../assets/project/4.jpeg";

const GUIDE_IMG = guideImg;

export function GuideRecruitment() {
  return (
    <section id="guias" className="mx-auto max-w-7xl px-8 py-24">
      <div className="editorial-shadow flex flex-col overflow-hidden rounded-[2rem] bg-primary md:flex-row">
        <div className="flex w-full flex-col justify-center p-12 md:w-1/2 md:p-16">
          <span className="text-label-md mb-4 uppercase text-on-primary-container">Para guias turísticos</span>
          <h2 className="text-headline-md mb-6 text-white">Cresça com a nossa comunidade</h2>
          <div className="mb-10 space-y-6">
            <div className="flex items-start gap-4">
              <Icon name="schedule" className="mt-1 shrink-0 text-white" />
              <div>
                <p className="font-bold text-white">Agenda sua</p>
                <p className="text-sm text-blue-100/70">
                  Liberdade para definir quando e como conduzir as suas experiências.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Icon name="payments" className="mt-1 shrink-0 text-white" />
              <div>
                <p className="font-bold text-white">Mais rendimento</p>
                <p className="text-sm text-blue-100/70">
                  Possibilidade de aumentar a renda com turismo de qualidade e clientes alinhados.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Icon name="assignment" className="mt-1 shrink-0 text-white" />
              <div>
                <p className="font-bold text-white">Gestão simples</p>
                <p className="text-sm text-blue-100/70">
                  Reservas e atividades organizadas num só lugar, com menos fricção administrativa.
                </p>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="w-fit rounded-full bg-white px-8 py-4 font-bold text-primary transition-colors hover:bg-slate-100"
          >
            Quero ser guia
          </button>
        </div>
        <div className="min-h-[320px] w-full md:w-1/2 md:min-h-[400px]">
          <img
            src={GUIDE_IMG}
            alt="Praça do Comércio em Lisboa com a estátua equestre e visitantes"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
