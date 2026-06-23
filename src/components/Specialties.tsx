import React from "react";
import { SPECIALTIES } from "../data";
import FadeIn from "./FadeIn";

export default function Specialties() {
  return (
    <section id="especialitats" className="py-20 bg-boria-sky">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <FadeIn className="text-center mb-16">
          <span className="text-boria-gold font-body uppercase tracking-[0.15em] text-xs font-semibold block mb-2">
            El nostre segell d'identitat
          </span>
          <h2 className="font-display font-bold text-3.5xl sm:text-4xl text-boria-blue-dark">
            El que ens fa especials
          </h2>
          <div className="border-b-4 border-boria-blue w-24 mx-auto mt-4 rounded-full" />
        </FadeIn>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SPECIALTIES.map((spec, index) => (
            <div key={`spec-${index}`}>
              <FadeIn
                delayClass={`delay-${index * 100}`}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl p-8 text-center border-t-4 border-boria-blue hover:-translate-y-2 transition-all duration-300 flex flex-col items-center h-full"
              >
                <div
                  className="text-5xl mb-6 transform hover:scale-110 transition-transform duration-300"
                  role="img"
                  aria-label={spec.titol}
                >
                  {spec.icona}
                </div>
                <h3 className="font-display text-xl text-boria-blue-dark font-bold mb-3 tracking-wide">
                  {spec.titol}
                </h3>
                <p className="text-boria-gray text-sm font-body leading-relaxed font-light">
                  {spec.text}
                </p>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
