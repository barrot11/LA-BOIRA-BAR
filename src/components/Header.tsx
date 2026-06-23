import React, { useState, useEffect } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Inici", href: "#" },
    { name: "El Menú", href: "#menu" },
    { name: "Carta", href: "#carta" },
    { name: "Especialitats", href: "#especialitats" },
    { name: "Reserves", href: "#reserves" },
    { name: "Horaris", href: "#horaris" },
    { name: "Contacte", href: "#contacte" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetId = href.replace("#", "");
    if (!targetId) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      id="header-app"
      className={`sticky top-0 z-50 transition-all duration-300 w-full ${
        isScrolled
          ? "bg-boria-blue/95 backdrop-blur-md shadow-lg border-b border-boria-blue-mid/40 py-3"
          : "bg-boria-blue py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* LOGO */}
        <a
          href="#"
          onClick={(e) => handleLinkClick(e, "#")}
          className="flex items-center gap-3 group focus:outline-none"
          aria-label="Tornar a l'inici"
        >
          {/* SVG RETRO LOGO: Personatge amb barret, copa de vi i núvols */}
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md border border-boria-blue-light/50 overflow-hidden transform group-hover:scale-105 transition-all">
            <svg
              viewBox="0 0 100 100"
              className="w-10 h-10 text-boria-blue"
              fill="currentColor"
            >
              {/* Núvols del logo */}
              <path
                d="M10 75 C10 65, 25 60, 30 65 C35 55, 55 55, 60 65 C65 60, 80 60, 80 70 M20 80 C20 80, 80 80, 80 80"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
                opacity="0.3"
              />
              {/* Escena Retro del personatge amb barret i copa */}
              {/* Barret stilitzat d'època */}
              <path
                d="M25 42 C 25 35, 45 25, 60 38 C 70 32, 75 42, 65 44"
                stroke="currentColor"
                strokeWidth="3.5"
                fill="currentColor"
              />
              <path
                d="M20 44 L70 44"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
              {/* Perfil cara i ull retro */}
              <circle cx="42" cy="52" r="3" fill="currentColor" /> {/* ull */}
              <path
                d="M45 44 C 45 44, 46 62, 54 62 C 55 55, 58 55, 56 44"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              {/* Copa de vi retro */}
              <path
                d="M60 68 L68 68 M64 68 L64 54 M58 48 C 58 56, 70 56, 70 48 Z"
                stroke="currentColor"
                strokeWidth="2.5"
                fill="currentColor"
              />
              {/* Vi a la copa (vermell, representat com a accent o clivat) */}
              <path d="M59 51 C 60 54, 68 54, 69 51 Z" fill="#C8A84B" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-2xl font-bold text-white tracking-wide leading-none select-none">
              La Boria
            </span>
            <span className="text-[10px] uppercase font-body tracking-[0.2em] text-boria-blue-light font-medium mt-1">
              Bar · Restaurant · Lleida
            </span>
          </div>
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden lg:flex items-center gap-7">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className="text-white hover:text-boria-blue-light transition-all duration-300 text-sm font-medium hover:underline decoration-boria-gold decoration-2 underline-offset-4 focus:ring-2 focus:ring-boria-gold focus:outline-none rounded py-1 px-1"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* CTA RESERVA ALWAYS VISIBLE */}
        <div className="flex items-center gap-4">
          <a
            href="#reserves"
            onClick={(e) => handleLinkClick(e, "#reserves")}
            className="bg-boria-gold hover:bg-yellow-500 text-boria-blue-dark font-body font-bold rounded-full px-5 py-2 text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all focus:ring-2 focus:ring-offset-2 focus:ring-boria-gold focus:outline-none"
            id="header-cta-reserve"
          >
            Reserva <span className="hidden sm:inline">Taula</span>
          </a>

          {/* HAMBURGER BTN */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex flex-col justify-between w-6 h-5 focus:outline-none focus:ring-2 focus:ring-boria-gold p-0.5 rounded cursor-pointer z-50 text-white"
            aria-expanded={isOpen}
            aria-label="Menú de navegació"
          >
            <span
              className={`block h-0.5 w-full bg-white rounded transition-transform duration-300 origin-left ${
                isOpen ? "rotate-45 translate-y-[2px]" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-white rounded transition-opacity duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-white rounded transition-transform duration-300 origin-left ${
                isOpen ? "-rotate-45 -translate-y-[2px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <div
        className={`fixed inset-0 bg-boria-blue-dark/98 z-40 transition-transform duration-500 lg:hidden flex flex-col items-center justify-center gap-8 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center gap-6 text-center">
          {menuItems.map((item) => (
            <a
              key={`mob-${item.name}`}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className="text-white hover:text-boria-gold font-display text-2xl tracking-wide transition-colors active:text-boria-gold"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Decorative clouds inside the menu */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 35" className="w-24 text-white" fill="currentColor">
            <path d="M10 25 C10 18, 25 15, 30 18 C35 10, 55 10, 60 18 C65 15, 80 15, 80 25 Z" />
          </svg>
        </div>
      </div>
    </header>
  );
}
