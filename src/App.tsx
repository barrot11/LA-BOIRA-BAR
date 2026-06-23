import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BarMenuTabs from "./components/BarMenuTabs";
import RestaurantCarta from "./components/RestaurantCarta";
import Specialties from "./components/Specialties";
import ReservationForm from "./components/ReservationForm";
import LocationSchedule from "./components/LocationSchedule";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CloudSeparator from "./components/CloudSeparator";

export default function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
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
    <div className="min-h-screen flex flex-col selection:bg-boria-blue-light selection:text-boria-blue-dark">
      {/* 1. STICKY HEADER */}
      <Header />

      {/* 2. HERO / PORTADA */}
      <Hero
        onMenuClick={() => scrollToSection("menu")}
        onReserveClick={() => scrollToSection("reserves")}
      />

      {/* SEPARATOR 1: Hero (Blue) -> Bar Menu (Cream) */}
      <CloudSeparator fillColor="#F8FAFF" containerBgColor="bg-boria-blue" className="-mb-1" />

      {/* 3. BAR MENUS */}
      <BarMenuTabs />

      {/* SEPARATOR 2: Bar Menu (Cream) -> Restaurant Carta (White) */}
      <CloudSeparator fillColor="#FFFFFF" containerBgColor="bg-boria-cream" className="-mb-1" />

      {/* 4. RESTAURANT CARTA */}
      <RestaurantCarta />

      {/* SEPARATOR 3: Restaurant Carta (White) -> Specialties (Sky) */}
      <CloudSeparator fillColor="#EEF4FF" containerBgColor="bg-white" className="-mb-1" />

      {/* 5. ESPECIALITATS */}
      <Specialties />

      {/* SEPARATOR 4: Specialties (Sky) -> Reservation Form (Cream) */}
      <CloudSeparator fillColor="#F8FAFF" containerBgColor="bg-boria-sky" className="-mb-1" />

      {/* 6. RESERVES */}
      <ReservationForm />

      {/* SEPARATOR 5: Reservation Form (Cream) -> Location Schedule (Blue) */}
      <CloudSeparator fillColor="#1B3F8B" containerBgColor="bg-boria-cream" className="-mb-1" />

      {/* 7. HORARIS I UBICACIÓ */}
      <LocationSchedule />

      {/* SEPARATOR 6: Location Schedule (Blue) -> Contact (Dark Blue) */}
      <CloudSeparator fillColor="#0F2560" containerBgColor="bg-boria-blue" className="-mb-1" />

      {/* 8. CONTACTE */}
      <Contact />

      {/* 9. FOOTER */}
      <Footer />
    </div>
  );
}
