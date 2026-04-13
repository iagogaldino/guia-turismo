import imgWalk from "../../assets/project/6.jpeg";
import imgCar from "../../assets/project/7.jpeg";
import patineteAsset from "../../assets/patinete.svg";

const IMG_WALK = imgWalk;
const IMG_CAR = imgCar;

const IMG_BIKE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAD52IeB6fwPDIvVwmkwIHcGq4mgxCNiVL9gXAUUWNxVYevFe2x1PfyGM4kdje5Ojy907hPnWHslnCkFJUEqJvKu2fmr1a7tQWdIFAn2iA-FNr-wjM0nNqEe1yilWq-ODTVxt0R5AaZv9iNEdeA9QtT9vlF4Ew7QH02_CIt6dzW34eXGSrtDwZ27s4TfNwZapeNGYhMW0nOi4XAsLX3lwTGgDO2rv5i0L3a6TAM0idDLs0cAcaYjQ3NHJmN2PV7otGAHkU_8HDcVhG-";
const IMG_SCOOTER = patineteAsset;
const IMG_TUK =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAR0RE30L5-m4vSI_K_Ka2L0XEaKly5TfKB5ZzY8Oj7VxahRijcA06sltFCiWNJGe6-TYGGBahZj3PCV9h51N8ODAB6F96iNZkSAQmORQejWsGV6lhbCNpXRCCQ_iVXNZC8SDmnP2gzMR04QTpUWYuj1mKSr2BpyDMP66OQ6MiiI9seRlTEiJtVDw6guAqaDbF9KKszT-Rlpm09Vj-b3p6Yx7nZT5Z14qO3lGtXjpjafA_7BPYbD7W-EZtD9Jsr5sdtvDlEhPdCspMK";

export function ExperiencesShowcase() {
  return (
    <section id="experiencias" className="bg-surface-container-low py-24">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <span className="text-label-md uppercase text-secondary">Portugal por medida</span>
            <h2 className="text-headline-md mt-2 text-primary">Escolha o formato</h2>
            <p className="mt-2 max-w-xl text-sm text-on-surface-variant">
              Cinco formas de explorar: a pé, bicicleta, patinete, tuk tuk ou carro — sempre com guias
              locais.
            </p>
          </div>
          <span className="hidden font-bold text-primary underline-offset-4 hover:underline md:block">
            Todos os estilos disponíveis
          </span>
        </div>
        <div className="grid grid-cols-1 gap-4 md:h-[400px] md:grid-cols-12 md:gap-5 lg:h-[440px]">
          <div className="group relative min-h-[200px] overflow-hidden rounded-xl md:col-span-5 md:min-h-0 md:h-full">
            <img
              src={IMG_WALK}
              alt="Arcadas da Praça do Comércio em Lisboa, com visitantes a passear"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8">
              <span className="mb-3 inline-block rounded bg-secondary px-3 py-1 text-[10px] font-bold uppercase text-white">
                História e cultura
              </span>
              <h3 className="font-serif text-3xl text-white" style={{ fontFamily: "var(--font-headline)" }}>
                A pé
              </h3>
            </div>
          </div>
          <div className="grid grid-rows-2 gap-4 md:col-span-7 md:h-full md:min-h-0 md:gap-5">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-4 md:min-h-0 md:auto-rows-fr">
              <div className="group relative min-h-[130px] overflow-hidden rounded-xl sm:min-h-0">
                <img
                  src={IMG_BIKE}
                  alt="Bicicleta junto a uma parede com azulejos num dia de sol"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="font-serif text-xl text-white" style={{ fontFamily: "var(--font-headline)" }}>
                    Bicicleta
                  </h3>
                </div>
              </div>
              <div className="group relative min-h-[130px] overflow-hidden rounded-xl sm:min-h-0">
                <img
                  src={IMG_SCOOTER}
                  alt="Passeio urbano de patinete elétrico em ambiente citadino"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="font-serif text-xl text-white" style={{ fontFamily: "var(--font-headline)" }}>
                    Patinete
                  </h3>
                </div>
              </div>
              <div className="group relative min-h-[130px] overflow-hidden rounded-xl sm:min-h-0">
                <img
                  src={IMG_TUK}
                  alt="Tuk tuk colorido numa rua de calçada portuguesa"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="font-serif text-xl text-white" style={{ fontFamily: "var(--font-headline)" }}>
                    Tuk tuk
                  </h3>
                </div>
              </div>
            </div>
            <div className="group relative min-h-[160px] overflow-hidden rounded-xl md:min-h-0">
              <img
                src={IMG_CAR}
                alt="Rua da Madalena em Lisboa, com elétrico amarelo e trânsito"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <h3 className="font-serif text-3xl text-white" style={{ fontFamily: "var(--font-headline)" }}>
                  Carro privado
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
