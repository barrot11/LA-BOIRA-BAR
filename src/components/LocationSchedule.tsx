import React, { useState, useEffect } from "react";
import FadeIn from "./FadeIn";
import { LA_BORIA_MAPS } from "../data";

export default function LocationSchedule() {
  const [isOpenNow, setIsOpenNow] = useState(false);

  useEffect(() => {
    const checkSchedule = () => {
      const now = new Date();
      const day = now.getDay(); // 0 is Sunday, 1-5 Mon-Fri, 6 Sat
      const hour = now.getHours();
      const minutes = now.getMinutes();
      const timeDecimal = hour + minutes / 60;

      let open = false;

      if (day >= 1 && day <= 5) {
        // Monday - Friday (7:00 to 22:00)
        if (timeDecimal >= 7.0 && timeDecimal < 22.0) {
          open = true;
        }
      } else if (day === 6) {
        // Saturday (8:00 to 16:00)
        if (timeDecimal >= 8.0 && timeDecimal < 16.0) {
          open = true;
        }
      } else {
        // Sunday (Closed)
        open = false;
      }

      setIsOpenNow(open);
    };

    checkSchedule();
    // Refresh status check every 30 seconds
    const interval = setInterval(checkSchedule, 30000);
    return () => clearInterval(interval);
  }, []);

  const horaris = [
    { dia: "Dilluns", horari: "7:00 – 22:00h" },
    { dia: "Dimarts", horari: "7:00 – 22:00h" },
    { dia: "Dimecres", horari: "7:00 – 22:00h" },
    { dia: "Dijous", horari: "7:00 – 22:00h" },
    { dia: "Divendres", horari: "7:00 – 22:00h" },
    { dia: "Dissabte", horari: "8:00 – 16:00h" },
    { dia: "Diumenge", horari: "Tancat", especial: true },
  ];

  return (
    <section id="horaris" className="py-20 bg-boria-blue text-white relative overflow-hidden">
      {/* Decorative cloud border */}
      <div className="absolute inset-0 opacity-5 pointer-events-none z-0 select-none">
        <svg viewBox="0 0 100 35" className="absolute -bottom-10 right-10 w-96 text-white" fill="currentColor">
          <path d="M10 25 C10 18, 25 15, 30 18 C35 10, 55 10, 60 18 C65 15, 80 15, 80 25 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
          {/* COLUMN 1: HORARIS */}
          <FadeIn className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <h2 className="font-display text-4xl font-bold tracking-tight text-white">
                Quan som aquí
              </h2>

              {/* Dynamic open/closed status indicator */}
              <div className="shrink-0">
                {isOpenNow ? (
                  <span className="inline-flex items-center gap-1.5 bg-green-400 text-green-950 font-body rounded-full px-4 py-1.5 text-sm font-extrabold shadow-sm">
                    <span className="inline-block w-2.5 h-2.5 rounded-full bg-green-900 animate-ping" />
                    🟢 Ara obert
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 bg-red-400 text-red-950 font-body rounded-full px-4 py-1.5 text-sm font-extrabold shadow-sm">
                    <span className="inline-block w-2.5 h-2.5 rounded-full bg-red-900" />
                    🔴 Ara tancat
                  </span>
                )}
              </div>
            </div>

            {/* Schedule table */}
            <div className="border border-white/10 rounded-2xl overflow-hidden shadow-lg bg-boria-blue-dark/20 backdrop-blur-sm">
              <table className="w-full text-left font-body">
                <thead>
                  <tr className="border-b border-white/10 bg-boria-blue-dark/40">
                    <th className="py-4 px-6 text-sm font-semibold uppercase tracking-wider text-boria-blue-light">Dia</th>
                    <th className="py-4 px-6 text-sm font-semibold uppercase tracking-wider text-boria-blue-light">Horari</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {horaris.map((item, index) => (
                    <tr
                      key={item.dia}
                      className={`hover:bg-white/5 transition-colors ${
                        index % 2 === 0 ? "bg-boria-blue-dark/15" : ""
                      }`}
                    >
                      <td className="py-4 px-6 text-base font-medium">{item.dia}</td>
                      <td className={`py-4 px-6 text-base ${item.especial ? "text-boria-gold font-semibold" : ""}`}>
                        {item.horari}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-xs text-boria-blue-light/80 italic font-body flex items-start gap-2 pt-2">
              <span className="text-base text-boria-gold">⚠️</span>
              <span>Horaris de referència. Segueix el nostre compte oficial a Instagram per conèixer actualitzacions, festius o tancaments especials d'última hora.</span>
            </p>
          </FadeIn>

          {/* COLUMN 2: UBICACIÓ */}
          <FadeIn className="space-y-6">
            <div>
              <h2 className="font-display text-4xl font-bold tracking-tight text-white mb-2">
                On som
              </h2>
              <span className="text-2xl font-display font-semibold text-boria-gold block leading-tight">
                Avinguda Catalunya, 26 · 25002 Lleida
              </span>
              <span className="text-xs sm:text-sm font-body tracking-wider text-boria-blue-light font-medium uppercase mt-1 block">
                🏢 Ubicat a la zona centre de Lleida, fàcil accés i aparcament proper
              </span>
            </div>

            {/* Stylized street simulation map inside a CSS card */}
            <div className="relative rounded-2xl bg-boria-blue-dark w-full h-[280px] overflow-hidden border border-white/10 shadow-inner group flex items-center justify-center">
              {/* Virtual Grid Roads & Streets */}
              <div className="absolute inset-0 opacity-15 pointer-events-none">
                {/* Diagonal roads */}
                <div className="absolute left-[30%] top-0 bottom-0 w-[40px] bg-white transform -rotate-12" />
                <div className="absolute left-0 right-0 top-[45%] h-[40px] bg-white transform rotate-6" />
                {/* Regular grid streets */}
                <div className="absolute left-[15%] top-0 bottom-0 w-1.5 bg-white" />
                <div className="absolute left-[55%] top-0 bottom-0 w-2 bg-white" />
                <div className="absolute left-[80%] top-0 bottom-0 w-1 bg-white" />
                <div className="absolute left-0 right-0 top-[20%] h-1.5 bg-white" />
                <div className="absolute left-0 right-0 top-[75%] h-2 bg-white" />
              </div>

              {/* River Segre visual simulation for Lleida accent */}
              <div className="absolute -left-10 right-0 bottom-0 h-10 bg-sky-500/10 transform rotate-3 flex items-center justify-center font-display text-[9px] tracking-widest uppercase text-white/20 select-none">
                🌊 Riu Segre
              </div>

              {/* Surrounding styled blocks */}
              <div className="absolute left-[6%] top-[10%] w-[12%] h-[20%] bg-blue-900/40 rounded-md border border-white/5" />
              <div className="absolute left-[38%] top-[14%] w-[15%] h-[25%] bg-blue-900/40 rounded-md border border-white/5" />
              <div className="absolute right-[12%] top-[12%] w-[18%] h-[30%] bg-blue-900/40 rounded-md border border-white/5" />
              <div className="absolute left-[4%] bottom-[20%] w-[16%] h-[25%] bg-blue-900/40 rounded-md border border-white/5" />
              <div className="absolute left-[64%] bottom-[16%] w-[22%] h-[35%] bg-blue-900/40 rounded-md border border-white/5" />

              {/* Pulsing PIN locator */}
              <div className="absolute left-[42%] top-[45%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                {/* Ping rings */}
                <div className="relative flex items-center justify-center w-14 h-14">
                  <div
                    className="absolute inset-0 bg-boria-gold rounded-full"
                    style={{ animation: "boria-ping 2s cubic-bezier(0, 0, 0.2, 1) infinite" }}
                  />
                  <div className="relative w-7 h-7 rounded-full bg-boria-blue flex items-center justify-center shadow-lg border-2 border-boria-gold">
                    <span className="text-sm">🍷</span>
                  </div>
                </div>

                {/* Info Card Pop */}
                <div className="mt-1 bg-boria-blue border border-boria-gold text-white font-body rounded px-3 py-1 text-xs font-semibold shadow-md whitespace-nowrap">
                  📍 La Boria Bar
                </div>
              </div>

              {/* Label streets */}
              <div className="absolute left-[42%] top-[25%] text-[9px] uppercase tracking-wider text-white/40 font-body -rotate-12">
                Avinguda Catalunya
              </div>
              <div className="absolute left-[70%] top-[60%] text-[9px] uppercase tracking-wider text-white/40 font-body rotate-6">
                Plaça Catalunya
              </div>

              {/* Compass icon decoration */}
              <div className="absolute bottom-3 right-3 bg-boria-blue/60 p-1 px-1.5 rounded-md border border-white/10 text-white/60 text-[10px] font-mono leading-none">
                N 🧭 41.6148° LLEIDA
              </div>
            </div>

            {/* Maps link */}
            <a
              href={LA_BORIA_MAPS}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-boria-blue hover:bg-boria-blue-light rounded-full px-6 py-3 font-semibold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white cursor-pointer"
            >
              <span className="text-lg">🗺️</span>
              <span>Obrir a Google Maps</span>
              <i className="fas fa-external-link-alt text-xs opacity-70 ml-1" />
            </a>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
