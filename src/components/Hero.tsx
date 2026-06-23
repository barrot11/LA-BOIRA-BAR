import React from "react";

interface HeroProps {
  onMenuClick: () => void;
  onReserveClick: () => void;
}

export default function Hero({ onMenuClick, onReserveClick }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col justify-between bg-boria-blue text-white overflow-hidden pt-12 md:pt-20"
    >
      {/* BACKGROUND DECORATIVE CLOUDS (10% opacity, retro theme) */}
      <div className="absolute inset-0 pointer-events-none opacity-10 select-none z-0">
        {/* Floating large clouds */}
        <svg
          className="absolute top-10 left-[8%] w-48 h-auto animate-pulse-gold"
          viewBox="0 0 100 35"
          fill="currentColor"
        >
          <path d="M10 25 C10 18, 25 15, 30 18 C35 10, 55 10, 60 18 C65 15, 80 15, 80 25 Z" />
        </svg>
        <svg
          className="absolute top-[35%] right-[10%] w-60 h-auto"
          viewBox="0 0 100 35"
          fill="currentColor"
          style={{ animation: "pulse 6s infinite" }}
        >
          <path d="M10 25 C10 18, 25 15, 30 18 C35 10, 55 10, 60 18 C65 15, 80 15, 80 25 Z" />
        </svg>
        <svg
          className="absolute bottom-[20%] left-[5%] w-72 h-auto"
          viewBox="0 0 100 35"
          fill="currentColor"
          style={{ animation: "pulse 8s infinite" }}
        >
          <path d="M10 25 C10 18, 25 15, 30 18 C35 10, 55 10, 60 18 C65 15, 80 15, 80 25 Z" />
        </svg>
      </div>

      {/* COMPONENT BODY */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex-grow flex flex-col justify-center z-10 py-12">
        {/* Upper Badge */}
        <div className="mb-6 animate-fade-in">
          <span className="inline-flex items-center gap-2 bg-boria-blue-light text-boria-blue rounded-full px-5 py-1.5 text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-sm">
            <span className="w-2 h-2 rounded-full bg-boria-blue-mid animate-ping" />
            Bar · Cafeteria · Restaurant
          </span>
        </div>

        {/* Title */}
        <h1 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-tight max-w-4xl mx-auto mb-6">
          Cuina honesta, <br className="hidden sm:inline" />
          <span className="text-boria-gold relative inline-block">
            sabor de casa
            {/* Elegant retro wavy underline under "sabor de casa" */}
            <svg
              className="absolute left-0 right-0 -bottom-2 h-3 text-boria-gold/60 w-full"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
            >
              <path d="M0,5 Q25,2 50,5 T100,5" />
            </svg>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-boria-blue-light text-base sm:text-xl font-body max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Bar, cafeteria i restaurant al cor de Lleida. Esmorzars, pinxos de
          dissabte i cuina de mercat a l'Avinguda Catalunya.
        </p>

        {/* CTA Buttons in Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12">
          <button
            onClick={onReserveClick}
            className="w-full sm:w-auto bg-boria-gold hover:bg-[#D9B755] text-boria-blue-dark font-body font-extrabold rounded-full px-8 py-4 text-base sm:text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-4 focus:ring-boria-gold/40 cursor-pointer"
          >
            Reserva la teva taula
          </button>
          <button
            onClick={onMenuClick}
            className="w-full sm:w-auto border-2 border-white/80 text-white hover:bg-white hover:text-boria-blue font-body font-bold rounded-full px-8 py-4 text-base sm:text-lg transition-all focus:outline-none focus:ring-4 focus:ring-white/20 cursor-pointer"
          >
            Veure el menú
          </button>
        </div>
      </div>

      {/* THREE PILLARS BACKDROP GRID */}
      <div className="relative z-15 w-full bg-boria-blue-dark/50 border-t border-white/10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {/* Pillar 1 */}
            <div className="flex items-center justify-center gap-3 py-3 px-4 rounded-xl hover:bg-white/5 transition-colors">
              <span className="text-3xl" role="img" aria-label="Cafè">☕</span>
              <div className="text-left">
                <h3 className="font-semibold text-white text-sm sm:text-base">
                  Esmorzars des de les 7h
                </h3>
                <p className="text-xs text-boria-blue-light">
                  Cafè d'especialitat i pastes fresques
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="flex items-center justify-center gap-3 py-3 px-4 rounded-xl hover:bg-white/5 transition-colors border-y md:border-y-0 md:border-x border-white/10">
              <span className="text-3xl" role="img" aria-label="Pinxo">🍢</span>
              <div className="text-left">
                <h3 className="font-semibold text-white text-sm sm:text-base">
                  Pinxos cada dissabte
                </h3>
                <p className="text-xs text-boria-blue-light">
                  Creacions úniques de 9h a 14h
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="flex items-center justify-center gap-3 py-3 px-4 rounded-xl hover:bg-white/5 transition-colors">
              <span className="text-3xl" role="img" aria-label="Menú del dia">🍽️</span>
              <div className="text-left">
                <h3 className="font-semibold text-white text-sm sm:text-base">
                  Menú del dia · 13,50€
                </h3>
                <p className="text-xs text-boria-blue-light">
                  Cuina casolana fresca de mercat
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
