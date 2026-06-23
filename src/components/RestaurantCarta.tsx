import React, { useState } from "react";
import { ENTRANTS, PRINCIPALS, POSTRES } from "../data";
import FadeIn from "./FadeIn";

type CategoriaId = "entrants" | "principals" | "postres" | null;

export default function RestaurantCarta() {
  const [openCategory, setOpenCategory] = useState<CategoriaId>("entrants");

  const toggleCategory = (id: CategoriaId) => {
    setOpenCategory(openCategory === id ? null : id);
  };

  const categories = [
    {
      id: "entrants" as CategoriaId,
      titol: "🥗 Entrants per Compartir",
      items: ENTRANTS,
    },
    {
      id: "principals" as CategoriaId,
      titol: "🥩 Plats Principals de la Terra",
      items: PRINCIPALS,
    },
    {
      id: "postres" as CategoriaId,
      titol: "🍰 Postres Tradicionals i Casolanes",
      items: POSTRES,
    },
  ];

  return (
    <section id="carta" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <FadeIn className="text-center mb-16">
          <span className="text-boria-gold font-body uppercase tracking-[0.15em] text-xs font-semibold block mb-2">
            La nostra proposta gastronòmica
          </span>
          <h2 className="font-display font-bold text-3.5xl sm:text-4xl text-boria-blue-dark">
            Carta de restaurant
          </h2>
          <p className="text-base text-boria-gray font-normal max-w-lg mx-auto mt-2">
            Cuina de mercat, producte local de les Terres de Lleida i receptes d'aquí.
          </p>
          <div className="border-b-4 border-boria-blue w-24 mx-auto mt-4 rounded-full" />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* ACCORDION (Left Columns) */}
          <div className="lg:col-span-2 space-y-4">
            {categories.map((cat) => {
              const isOpen = openCategory === cat.id;
              return (
                <div
                  key={cat.id}
                  className="border border-boria-blue-light rounded-xl overflow-hidden shadow-sm"
                >
                  {/* Category Header */}
                  <button
                    onClick={() => toggleCategory(cat.id)}
                    aria-expanded={isOpen}
                    className={`w-full text-left p-5 flex justify-between items-center transition-all duration-300 cursor-pointer ${
                      isOpen
                        ? "bg-boria-blue text-white"
                        : "bg-boria-sky text-boria-blue-dark hover:bg-boria-blue-light/50"
                    }`}
                  >
                    <span className="font-display font-bold text-lg sm:text-xl">
                      {cat.titol}
                    </span>
                    <span className={`text-xl transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                      {isOpen ? "−" : "＋"}
                    </span>
                  </button>

                  {/* Category Content */}
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-[1200px]" : "max-h-0"
                    }`}
                  >
                    <div className="p-6 bg-boria-cream/40 divide-y divide-boria-blue-light/50">
                      {cat.items.map((item, index) => (
                        <div
                          key={`catitem-${cat.id}-${index}`}
                          className="py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2"
                        >
                          <div className="space-y-1">
                            <h4 className="font-display font-bold text-base sm:text-lg text-boria-blue-dark">
                              {item.nom}
                            </h4>
                            {item.descripcio && (
                              <p className="text-sm text-boria-gray font-body font-light">
                                {item.descripcio}
                              </p>
                            )}
                          </div>
                          <span className="font-body font-bold text-boria-gold text-base sm:text-lg whitespace-nowrap sm:text-right mt-1 sm:mt-0 shrink-0">
                            {item.preu}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* HIGHLIGHTED CARD - MENÚ DEL DIA (Right Column) */}
          <FadeIn className="lg:col-span-1">
            <div className="bg-boria-blue text-white rounded-2xl p-6 sm:p-8 text-center shadow-xl border-t-8 border-boria-gold relative overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
              {/* Background Cloud */}
              <div className="absolute top-2 right-2 opacity-5 pointer-events-none select-none">
                <svg viewBox="0 0 100 35" className="w-32 text-white" fill="currentColor">
                  <path d="M10 25 C10 18, 25 15, 30 18 C35 10, 55 10, 60 18 C65 15, 80 15, 80 25 Z" />
                </svg>
              </div>

              <span className="inline-block bg-boria-gold/20 text-boria-gold text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
                Migdia · Dilluns a Divendres
              </span>

              <h3 className="font-display font-semibold text-2xl sm:text-3xl text-white mb-4">
                Menú del dia
              </h3>

              <div className="my-6">
                <span className="font-display text-5xl font-black text-boria-gold">13,50 €</span>
                <p className="text-xs text-boria-blue-light mt-1">I.V.A. Inclòs</p>
              </div>

              {/* Inclusions list */}
              <ul className="text-sm font-body text-boria-blue-light space-y-3 mb-8 border-t border-b border-white/10 py-5">
                <li className="flex items-center justify-center gap-2">
                  <span className="text-boria-gold">✔</span>
                  <span>1r Plat a triar</span>
                </li>
                <li className="flex items-center justify-center gap-2">
                  <span className="text-boria-gold">✔</span>
                  <span>2n Plat a triar</span>
                </li>
                <li className="flex items-center justify-center gap-2">
                  <span className="text-boria-gold">✔</span>
                  <span>Postres casolanes o cafè d'especialitat</span>
                </li>
                <li className="flex items-center justify-center gap-2">
                  <span className="text-boria-gold">✔</span>
                  <span>Pa del dia i beguda inclosa (aigua o vi de la casa)</span>
                </li>
              </ul>

              <p className="text-xs italic text-boria-blue-light/80 mt-2">
                "La nostra carta canvia diàriament segons el producte fresc que trobem al mercat. Pregunta als nostres cambrers o truca'ns!"
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
