import React, { useState } from 'react';
import { FAQS } from '../data/mockData';
import { MapPin, Clock, Phone, Instagram, ChevronDown, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

export const FaqAndLocation: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name.trim() || !contactForm.message.trim()) return;
    setContactSubmitted(true);
  };

  return (
    <section id="contacto" className="py-24 bg-[#17191C] relative border-t border-[#262A30]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Sede & Location Information */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#A88958] mb-3">
                <MapPin className="w-4 h-4 text-[#A88958]" />
                <span>Nuestra Sede Bogotá</span>
              </div>

              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#E8E1D5] uppercase tracking-wide mb-4">
                Visítanos en Bogotá
              </h2>

              <p className="text-sm text-[#7E868D] leading-relaxed mb-8">
                Ubicados en un punto estratégico y de fácil acceso. Ven y experimenta la diferencia de un corte ejecutado por verdaderos artesanos.
              </p>

              {/* Contact Card Details */}
              <div className="space-y-5 bg-[#1A1D20] border border-[#2D3238] p-6 rounded-lg mb-8">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[#17191C] border border-[#A88958]/30 text-[#A88958] rounded-sm shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#7E868D] font-medium block">
                      Dirección Oficial
                    </span>
                    <p className="text-sm font-semibold text-[#E8E1D5] mt-0.5">
                      Cra. 10 #20-30, Bogotá D.C.
                    </p>
                    <span className="text-xs text-[#7E868D]">Zona céntrica y segura</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[#17191C] border border-[#A88958]/30 text-[#A88958] rounded-sm shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#7E868D] font-medium block">
                      Horario de Atención
                    </span>
                    <p className="text-sm font-semibold text-[#E8E1D5] mt-0.5">
                      Lunes a Sábado: 9:00 am – 8:00 pm
                    </p>
                    <span className="text-xs text-[#7E868D]">Domingos y Festivos: cita previa</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[#17191C] border border-[#A88958]/30 text-[#A88958] rounded-sm shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#7E868D] font-medium block">
                      Línea Directa / WhatsApp
                    </span>
                    <a
                      href="https://wa.me/573000000000"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-bold text-[#A88958] hover:underline mt-0.5 block font-heading tracking-wider"
                    >
                      300 000 0000
                    </a>
                    <span className="text-xs text-[#7E868D]">Respuesta en pocos minutos</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[#17191C] border border-[#A88958]/30 text-[#A88958] rounded-sm shrink-0">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#7E868D] font-medium block">
                      Comunidad Instagram
                    </span>
                    <a
                      href="https://instagram.com/cortefino.barberia"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-semibold text-[#E8E1D5] hover:text-[#A88958] mt-0.5 block"
                    >
                      @cortefino.barberia
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="bg-[#141618] border border-[#2D3238] p-6 rounded-lg">
              <h4 className="font-heading font-bold text-base text-[#E8E1D5] uppercase mb-2">
                ¿Tienes alguna consulta rápida?
              </h4>
              <p className="text-xs text-[#7E868D] mb-4">
                Déjanos tu mensaje y nuestro equipo de atención se pondrá en contacto contigo.
              </p>

              {contactSubmitted ? (
                <div className="p-4 bg-[#1F2226] border border-[#A88958]/50 rounded text-center">
                  <CheckCircle2 className="w-6 h-6 text-[#A88958] mx-auto mb-2" />
                  <p className="text-xs font-semibold text-[#E8E1D5]">¡Mensaje enviado con éxito!</p>
                  <p className="text-[11px] text-[#7E868D] mt-1">Te contactaremos a la brevedad.</p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      required
                      placeholder="Nombre"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full px-3 py-2 bg-[#1A1D20] border border-[#2D3238] focus:border-[#A88958] text-xs text-[#E8E1D5] rounded-sm focus:outline-none"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="WhatsApp"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      className="w-full px-3 py-2 bg-[#1A1D20] border border-[#2D3238] focus:border-[#A88958] text-xs text-[#E8E1D5] rounded-sm focus:outline-none"
                    />
                  </div>
                  <textarea
                    rows={2}
                    required
                    placeholder="¿En qué te podemos asesorar?"
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full px-3 py-2 bg-[#1A1D20] border border-[#2D3238] focus:border-[#A88958] text-xs text-[#E8E1D5] rounded-sm focus:outline-none resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-[#262A30] hover:bg-[#A88958] hover:text-[#17191C] text-[#E8E1D5] font-heading font-bold text-xs uppercase tracking-wider rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Enviar Mensaje</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: FAQs Accordion */}
          <div className="lg:col-span-7">
            <div className="mb-8">
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#A88958] block mb-2">
                Dudas Frecuentes
              </span>
              <h3 className="font-heading font-bold text-3xl sm:text-4xl text-[#E8E1D5] uppercase">
                Todo lo que Necesitas Saber
              </h3>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="bg-[#1A1D20] border border-[#2A2F35] rounded-lg overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      type="button"
                      className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    >
                      <span className="font-heading font-semibold text-base sm:text-lg text-[#E8E1D5] uppercase tracking-wide">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#A88958] transition-transform duration-200 shrink-0 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#C8C1B4] leading-relaxed border-t border-[#262A30] animate-in fade-in duration-200">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
