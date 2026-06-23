import React, { useState, useEffect } from "react";
import FadeIn from "./FadeIn";

export default function ReservationForm() {
  const [nom, setNom] = useState("");
  const [telefon, setTelefon] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [persones, setPersones] = useState("2");
  const [motiu, setMotiu] = useState("Cap");
  const [comentaris, setComentaris] = useState("");

  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
  const [showModal, setShowModal] = useState(false);
  const [minDateStr, setMinDateStr] = useState("");

  useEffect(() => {
    // Set min date directly of input which must be today
    const today = new Date();
    const formatted = today.toISOString().split("T")[0];
    setMinDateStr(formatted);
  }, []);

  const handleSubmissioReserva = () => {
    const novesErrors: { [key: string]: boolean } = {};
    
    if (!nom.trim()) novesErrors.nom = true;
    if (!telefon.trim()) novesErrors.telefon = true;
    if (!email.trim()) novesErrors.email = true;
    if (!data) novesErrors.data = true;
    if (!hora) novesErrors.hora = true;

    if (Object.keys(novesErrors).length > 0) {
      setErrors(novesErrors);
      // Scroll slightly inside the form card to show error indicators
      const section = document.getElementById("reserves");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    // Success flow!
    setErrors({});
    setShowModal(true);
  };

  const netejaFormulari = () => {
    setNom("");
    setTelefon("");
    setEmail("");
    setData("");
    setHora("");
    setPersones("2");
    setMotiu("Cap");
    setComentaris("");
    setShowModal(false);
  };

  return (
    <section id="reserves" className="py-20 bg-boria-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <FadeIn className="text-center mb-12">
          <span className="text-boria-gold font-body uppercase tracking-[0.15em] text-xs font-semibold block mb-2">
            Fes la teva sol·licitud ara
          </span>
          <h2 className="font-display font-bold text-3.5xl sm:text-4xl text-boria-blue-dark">
            Reserva la teva taula
          </h2>
          <p className="text-base text-boria-gray font-normal max-w-lg mx-auto mt-2">
            Assegura el teu lloc i gaudeix de la millor cuina casolana a Lleida. T'esperem amb els braços oberts!
          </p>
          <div className="border-b-4 border-boria-blue w-24 mx-auto mt-4 rounded-full" />
        </FadeIn>

        {/* Form Container (Div styled precisely as requested) */}
        <FadeIn className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-10 border border-boria-blue-light/40 relative">
            <div className="space-y-6">
              {/* Warnings if mandatory fields failed */}
              {Object.keys(errors).length > 0 && (
                <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg p-4 font-body">
                  ⚠️ Per favor, omple tots els camps obligatoris marcats en vermell per confirmar la teva reserva.
                </div>
              )}

              {/* Grid 2 Columnes per Dades Contacte */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Nom */}
                <div>
                  <label htmlFor="nom" className="block text-sm font-semibold text-boria-blue-dark mb-1 font-body">
                    Nom i cognoms *
                  </label>
                  <input
                    type="text"
                    id="nom"
                    required
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    placeholder="El teu nom"
                    className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-boria-blue focus:ring-offset-1 transition-all font-body text-boria-blue-dark ${
                      errors.nom ? "border-red-500 bg-red-50/50" : "border-boria-blue-light"
                    }`}
                  />
                </div>

                {/* Telefon */}
                <div>
                  <label htmlFor="telefon" className="block text-sm font-semibold text-boria-blue-dark mb-1 font-body">
                    Telèfon *
                  </label>
                  <input
                    type="tel"
                    id="telefon"
                    required
                    value={telefon}
                    onChange={(e) => setTelefon(e.target.value)}
                    placeholder="600 00 00 00"
                    className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-boria-blue focus:ring-offset-1 transition-all font-body text-boria-blue-dark ${
                      errors.telefon ? "border-red-500 bg-red-50/50" : "border-boria-blue-light"
                    }`}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-boria-blue-dark mb-1 font-body">
                  Correu electrònic *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="correu@exemple.com"
                  className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-boria-blue focus:ring-offset-1 transition-all font-body text-boria-blue-dark ${
                    errors.email ? "border-red-500 bg-red-50/50" : "border-boria-blue-light"
                  }`}
                />
              </div>

              {/* Grid 3 columnes per Data, Hora i Persones */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Data */}
                <div>
                  <label htmlFor="data" className="block text-sm font-semibold text-boria-blue-dark mb-1 font-body">
                    Data de la reserva *
                  </label>
                  <input
                    type="date"
                    id="data"
                    required
                    min={minDateStr}
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                    className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-boria-blue focus:ring-offset-1 transition-all font-body text-boria-blue-dark ${
                      errors.data ? "border-red-500 bg-red-50/50" : "border-boria-blue-light"
                    }`}
                  />
                </div>

                {/* Hora Select */}
                <div>
                  <label htmlFor="hora" className="block text-sm font-semibold text-boria-blue-dark mb-1 font-body">
                    Hora *
                  </label>
                  <select
                    id="hora"
                    required
                    value={hora}
                    onChange={(e) => setHora(e.target.value)}
                    className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-boria-blue focus:ring-offset-1 transition-all font-body text-boria-blue-dark ${
                      errors.hora ? "border-red-500 bg-red-50/50" : "border-boria-blue-light"
                    }`}
                  >
                    <option value="">Tria l'hora...</option>
                    <optgroup label="Dinar (Migdia)">
                      <option value="13:00">13:00 h</option>
                      <option value="13:30">13:30 h</option>
                      <option value="14:00">14:00 h</option>
                      <option value="14:30">14:30 h</option>
                      <option value="15:00">15:00 h</option>
                    </optgroup>
                    <optgroup label="Sopar (Nit)">
                      <option value="20:00">20:00 h</option>
                      <option value="20:30">20:30 h</option>
                      <option value="21:00">21:00 h</option>
                      <option value="21:30">21:30 h</option>
                      <option value="22:00">22:00 h</option>
                    </optgroup>
                  </select>
                </div>

                {/* Persone Select */}
                <div>
                  <label htmlFor="persones" className="block text-sm font-semibold text-boria-blue-dark mb-1 font-body">
                    Persones *
                  </label>
                  <select
                    id="persones"
                    required
                    value={persones}
                    onChange={(e) => setPersones(e.target.value)}
                    className="w-full border border-boria-blue-light rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-boria-blue focus:offset-1 transition-all font-body text-boria-blue-dark"
                  >
                    <option value="1">1 Persona</option>
                    <option value="2">2 Persones</option>
                    <option value="3">3 Persones</option>
                    <option value="4">4 Persones</option>
                    <option value="5">5 Persones</option>
                    <option value="6">6 Persones</option>
                    <option value="7">7 Persones</option>
                    <option value="8">8 Persones</option>
                    <option value="9">+8 (contacta'ns)</option>
                  </select>
                </div>
              </div>

              {/* Motiu Especial */}
              <div>
                <label htmlFor="motiu" className="block text-sm font-semibold text-boria-blue-dark mb-1 font-body">
                  Celebració o Motiu especial (opcional)
                </label>
                <select
                  id="motiu"
                  value={motiu}
                  onChange={(e) => setMotiu(e.target.value)}
                  className="w-full border border-boria-blue-light rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-boria-blue focus:offset-1 transition-all font-body text-boria-blue-dark"
                >
                  <option value="Cap">Cap celebració específica</option>
                  <option value="Aniversari">🎂 Aniversari</option>
                  <option value="Celebració familiar">👥 Celebració familiar / d'amics</option>
                  <option value="Àpat d'empresa">💼 Àpat d'empresa</option>
                  <option value="Sopar romàntic">❤️ Sopar romàntic</option>
                  <option value="Altre">✨ Altre motiu especial</option>
                </select>
              </div>

              {/* Comentaris i alergies */}
              <div>
                <label htmlFor="comentaris" className="block text-sm font-semibold text-boria-blue-dark mb-1 font-body">
                  Comentaris, intoleràncies o al·lèrgies (opcional)
                </label>
                <textarea
                  id="comentaris"
                  rows={3}
                  value={comentaris}
                  onChange={(e) => setComentaris(e.target.value)}
                  placeholder="Indica si pateixes alguna al·lèrgia, i demana accessos especials si cal..."
                  className="w-full border border-boria-blue-light rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-boria-blue focus:offset-1 transition-all font-body text-boria-blue-dark"
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmissioReserva}
                className="w-full bg-boria-blue hover:bg-boria-blue-dark text-white font-body font-bold rounded-full py-4 text-lg transition-all mt-6 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-boria-blue/40 cursor-pointer"
              >
                Confirmar reserva
              </button>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* CONFIRMATION OVERLAY MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-boria-blue-dark/80 backdrop-blur-sm flex items-center justify-center p-4 z-[100] transition-opacity duration-300">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center border-t-8 border-boria-gold transform scale-100 transition-transform duration-300 relative">
            <div className="w-16 h-16 rounded-full bg-green-100/80 flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl text-green-600">✅</span>
            </div>

            <h3 className="font-display font-bold text-2xl text-boria-blue-dark mb-3">
              Sol·licitud rebuda!
            </h3>
            
            <p className="text-sm font-body text-boria-gray leading-relaxed mb-6">
              Gràcies per triar <strong>La Boria Bar</strong>. <br />
              Hem rebut correctament les teves dades per al dia <strong>{data}</strong> a les <strong>{hora}h</strong> ({persones} {parseInt(persones) === 1 ? "persona" : "persones"}). Pròximament rebràs una trucada o missatge de confirmació al telèfon <strong>{telefon}</strong>.
            </p>

            <button
              onClick={netejaFormulari}
              className="bg-boria-blue hover:bg-boria-blue-dark text-white font-body font-semibold rounded-full px-8 py-3 tracking-wide shadow transition-colors w-full cursor-pointer"
            >
              Perfecte, gràcies!
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
