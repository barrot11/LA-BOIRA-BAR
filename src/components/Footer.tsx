import React from "react";
import { LA_BORIA_INSTAGRAM } from "../data";

export default function Footer() {
  return (
    <footer className="bg-boria-blue-dark border-t-2 border-boria-gold text-boria-gray font-body py-12 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          
          {/* Column Left: Copyright */}
          <div className="text-sm font-light select-none">
            &copy; 2025 La Boria Bar &middot; Tots els drets reservats
          </div>

          {/* Column Center: Branding & Instagram */}
          <div className="flex flex-col items-center gap-3">
            <span className="font-display text-2xl font-bold text-white tracking-wide">
              La Boria
            </span>
            
            <a
              href={LA_BORIA_INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-boria-blue hover:bg-boria-blue-mid flex items-center justify-center text-white hover:text-boria-gold transition-all duration-300 shadow-md transform hover:scale-110"
              aria-label="Segueix-nos a Instagram"
            >
              <i className="fa-brands fa-instagram text-lg" />
            </a>
          </div>

          {/* Column Right: Address info */}
          <div className="text-sm font-light text-center md:text-right">
            <p className="font-display text-white font-medium text-base mb-1">La Boria Bar</p>
            <p>Avinguda Catalunya, 26 &middot; 25002 Lleida</p>
          </div>

        </div>
      </div>
    </footer>
  );
}
