import React from "react";
import FadeIn from "./FadeIn";
import { LA_BORIA_TELEFON, LA_BORIA_INSTAGRAM } from "../data";

export default function Contact() {
  return (
    <section id="contacte" className="py-20 bg-boria-blue-dark text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Three Contact blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
          
          {/* Card 1: Telefon */}
          <FadeIn delayClass="delay-0" className="bg-boria-blue rounded-2xl p-8 border border-white/5 hover:border-boria-gold/20 hover:-translate-y-1.5 transition-all duration-300 shadow-md">
            <div className="w-16 h-16 rounded-full bg-boria-blue-dark/50 flex items-center justify-center mx-auto mb-6 border border-white/10">
              <i className="fa-solid fa-phone text-3xl text-boria-gold" />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-2">Truca'ns</h3>
            <a
              href={`tel:${LA_BORIA_TELEFON.replace(/\s+/g, "")}`}
              className="font-body text-boria-blue-light hover:text-boria-gold text-lg transition-colors font-semibold"
            >
              {LA_BORIA_TELEFON}
            </a>
            <p className="text-xs text-boria-blue-light/60 font-body mt-2">Trucades per encàrrecs o dubtes</p>
          </FadeIn>

          {/* Card 2: Instagram */}
          <FadeIn delayClass="delay-100" className="bg-boria-blue rounded-2xl p-8 border border-white/5 hover:border-boria-gold/20 hover:-translate-y-1.5 transition-all duration-300 shadow-md">
            <div className="w-16 h-16 rounded-full bg-boria-blue-dark/50 flex items-center justify-center mx-auto mb-6 border border-white/10">
              <i className="fa-brands fa-instagram text-3xl text-boria-gold" />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-2">Instagram</h3>
            <a
              href={LA_BORIA_INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-boria-blue-light hover:text-boria-gold text-lg transition-colors font-semibold block"
            >
              @laboira_lleida
            </a>
            <p className="text-xs text-boria-blue-light/60 font-body mt-2">Segueix-nos per estar al dia!</p>
          </FadeIn>

          {/* Card 3: Ubicacio */}
          <FadeIn delayClass="delay-200" className="bg-boria-blue rounded-2xl p-8 border border-white/5 hover:border-boria-gold/20 hover:-translate-y-1.5 transition-all duration-300 shadow-md">
            <div className="w-16 h-16 rounded-full bg-boria-blue-dark/50 flex items-center justify-center mx-auto mb-6 border border-white/10">
              <i className="fa-solid fa-map-marker-alt text-3xl text-boria-gold" />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-2">On som</h3>
            <span className="font-body text-boria-blue-light text-base sm:text-lg block font-semibold leading-tight">
              Avinguda Catalunya, 26
            </span>
            <span className="text-xs text-boria-blue-light/60 font-body mt-1 block">25002 · Lleida</span>
          </FadeIn>

        </div>

        {/* Central phrase in italics */}
        <FadeIn className="max-w-3xl mx-auto text-center py-6">
          <p className="font-display text-2xl sm:text-3xl text-white italic leading-relaxed tracking-wide px-4">
            "Vine a La Boria Bar i descobreix per què som el racó favorit de l'Avinguda Catalunya. T'esperem!"
          </p>
        </FadeIn>

      </div>
    </section>
  );
}
