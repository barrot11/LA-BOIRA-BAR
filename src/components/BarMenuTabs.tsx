import React, { useState, useEffect } from "react";
import { ESMORZARS, PINXOS_DISSABTE, COQUES_RECAPTE, BEGUDES } from "../data";
import FadeIn from "./FadeIn";

type TabId = "esmorzars" | "pinxos" | "coques" | "begudes";

export default function BarMenuTabs() {
  const [activeTab, setActiveTab] = useState<TabId>("esmorzars");
  const [isSaturday, setIsSaturday] = useState(false);

  useEffect(() => {
    // Detect if today is Saturday (6 is Saturday)
    const today = new Date();
    const isSat = today.getDay() === 6;
    setIsSaturday(isSat);
    
    if (isSat) {
      // Auto-select Saturday tab if today is Saturday
      setActiveTab("pinxos");
    }
  }, []);

  const tabs = [
    { id: "esmorzars" as TabId, label: "Esmorzars ☀️", aria: "Llistat d'esmorzars i cafès" },
    { id: "pinxos" as TabId, label: "Pinxos del Dissabte 🍢", aria: "Llistat de pinxos del dissabte" },
    { id: "coques" as TabId, label: "Coca de Recapte 🫓", aria: "Llistat de coques de recapte" },
    { id: "begudes" as TabId, label: "Begudes 🍷", aria: "Llistat de begudes i licors" },
  ];

  return (
    <section id="menu" className="py-20 bg-boria-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <FadeIn className="text-center mb-12">
          <span className="text-boria-gold font-body uppercase tracking-[0.15em] text-xs font-semibold block mb-2">
            La millor selecció de Lleida
          </span>
          <h2 className="font-display font-bold text-3.5xl sm:text-4xl text-boria-blue-dark">
            La nostra carta de bar
          </h2>
          <div className="border-b-4 border-boria-blue w-24 mx-auto mt-4 rounded-full" />
        </FadeIn>

        {/* Dynamic Saturday banner if true */}
        {isSaturday && (
          <FadeIn className="max-w-3xl mx-auto mb-8">
            <div className="bg-green-100/90 border border-green-200 text-green-800 rounded-xl p-4 text-center font-semibold shadow-sm animate-pulse-gold flex items-center justify-center gap-2">
              <span className="text-xl">🎉</span>
              <span>Avui és dissabte! Els nostres pinxos artesans estan preparats i t'esperen a la barra!</span>
            </div>
          </FadeIn>
        )}

        {/* Tab Switcher Actions */}
        <div className="flex flex-wrap justify-center gap-3 mb-10" role="tablist">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                aria-label={tab.aria}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full font-body font-semibold text-sm transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-boria-blue ${
                  isActive
                    ? "bg-boria-blue text-white shadow-md transform scale-105"
                    : "bg-boria-blue-light text-boria-blue hover:bg-boria-blue hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="min-h-[400px]">
          {/* ESMORZARS TAB */}
          {activeTab === "esmorzars" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
              {ESMORZARS.map((item, index) => (
                <div
                  key={`esm-${index}`}
                  className={`bg-white rounded-xl shadow-md hover:shadow-xl p-5 flex flex-col justify-between hover:-translate-y-0.5 transition-all duration-300 border-l-4 ${
                    item.destacat ? "border-boria-gold bg-amber-50/10" : "border-boria-blue"
                  }`}
                >
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <h3 className="font-display text-lg font-bold text-boria-blue-dark leading-snug">
                      {item.nom}
                      {item.destacat && (
                        <span className="ml-2 inline-block bg-boria-gold/20 text-boria-gold text-[10px] uppercase font-body tracking-wider font-extrabold px-2 py-0.5 rounded-full">
                          Recomanat
                        </span>
                      )}
                    </h3>
                    <span className="font-body font-bold text-boria-gold text-lg shrink-0 whitespace-nowrap">
                      {item.preu}
                    </span>
                  </div>
                  {item.descripcio && (
                    <p className="text-sm text-boria-gray font-body font-light leading-relaxed">
                      {item.descripcio}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* PINXOS DISSABTE TAB */}
          {activeTab === "pinxos" && (
            <div className="animate-fade-in">
              {/* Banner obligatori */}
              <div className="bg-boria-gold text-boria-blue-dark rounded-xl p-4 shadow-sm text-center font-bold mb-8 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2">
                <span className="text-xl">⭐</span>
                <span>Disponibles només els dissabtes · De 9:00 a 14:00h</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PINXOS_DISSABTE.map((item, index) => (
                  <div
                    key={`pinx-${index}`}
                    className="bg-white rounded-xl shadow-md hover:shadow-xl p-5 flex flex-col justify-between hover:-translate-y-0.5 transition-all duration-300 border-l-4 border-boria-blue"
                  >
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <h3 className="font-display text-lg font-bold text-boria-blue-dark leading-snug">
                        {item.nom}
                        {item.destacat && (
                          <span className="ml-2 inline-block bg-boria-gold/20 text-boria-gold text-xs px-2 py-0.5 rounded-full">
                            Especial
                          </span>
                        )}
                      </h3>
                      <span className="font-body font-bold text-boria-gold text-lg shrink-0 whitespace-nowrap">
                        {item.preu}
                      </span>
                    </div>
                    {item.descripcio && (
                      <p className="text-sm text-boria-gray font-body font-light leading-relaxed">
                        {item.descripcio}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* COCA DE RECAPTE TAB */}
          {activeTab === "coques" && (
            <div className="animate-fade-in">
              <div className="max-w-3xl mx-auto mb-8 text-center">
                <span className="bg-boria-blue-light text-boria-blue rounded-full text-xs font-semibold px-4 py-1.5 font-body shadow-sm inline-flex items-center gap-2">
                  <span>🚗</span> Per emportar o menjar al local · Encàrrec recomanat per a coques familiars
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {COQUES_RECAPTE.map((item, index) => (
                  <div
                    key={`coq-${index}`}
                    className={`bg-white rounded-xl shadow-md hover:shadow-xl p-5 flex flex-col justify-between hover:-translate-y-0.5 transition-all duration-300 border-l-4 ${
                      item.destacat ? "border-boria-gold" : "border-boria-blue"
                    }`}
                  >
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <h3 className="font-display text-lg font-bold text-boria-blue-dark leading-snug">
                        {item.nom}
                        {item.destacat && (
                          <span className="ml-2 inline-block bg-boria-blue-light text-boria-blue text-[10px] uppercase tracking-wider font-extrabold px-2.5 py-0.5 rounded-full">
                            Familiar
                          </span>
                        )}
                      </h3>
                      <span className="font-body font-bold text-boria-gold text-lg shrink-0 whitespace-nowrap">
                        {item.preu}
                      </span>
                    </div>
                    {item.descripcio && (
                      <p className="text-sm text-boria-gray font-body font-light leading-relaxed">
                        {item.descripcio}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* BEGUDES TAB */}
          {activeTab === "begudes" && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 animate-fade-in">
              {BEGUDES.map((item, index) => (
                <div
                  key={`beg-${index}`}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md p-4 flex justify-between items-center transition-all duration-300 border-l-2 border-boria-blue-mid/40"
                >
                  <span className="font-display font-semibold text-boria-blue-dark text-sm sm:text-base mr-2">
                    {item.nom}
                  </span>
                  <span className="font-body font-bold text-boria-gold text-sm sm:text-base shrink-0">
                    {item.preu}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
