import React, { useState } from 'react';
import { SERVICES, BARBERS } from '../data/mockData';
import { Service, Barber, BookingAppointment } from '../types';
import { CalendarCheck, Clock, CheckCircle2, User, Phone, Mail, MessageSquare, Sparkles, Scissors, ArrowRight } from 'lucide-react';

interface BookingSectionProps {
  selectedServicePreset?: Service | null;
  onClearPreset?: () => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  selectedServicePreset,
}) => {
  // Available dates for booking
  const dates = [
    { label: 'Hoy', value: '2026-10-29', dayName: 'Jueves' },
    { label: 'Mañana', value: '2026-10-30', dayName: 'Viernes' },
    { label: '31 Oct', value: '2026-10-31', dayName: 'Sábado' },
    { label: '02 Nov', value: '2026-11-02', dayName: 'Lunes' },
    { label: '03 Nov', value: '2026-11-03', dayName: 'Martes' },
    { label: '04 Nov', value: '2026-11-04', dayName: 'Miércoles' },
  ];

  const timeSlots = [
    '09:00 AM',
    '09:45 AM',
    '10:30 AM',
    '11:15 AM',
    '12:00 PM',
    '02:00 PM',
    '02:45 PM',
    '03:30 PM',
    '04:15 PM',
    '05:00 PM',
    '05:45 PM',
    '06:30 PM',
    '07:15 PM',
  ];

  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    selectedServicePreset?.id || 'promo-apertura'
  );
  const [selectedBarberId, setSelectedBarberId] = useState<string>('any');
  const [selectedDate, setSelectedDate] = useState<string>(dates[0].value);
  const [selectedTime, setSelectedTime] = useState<string>('10:30 AM');

  // Customer form inputs
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Sync if preset changes
  React.useEffect(() => {
    if (selectedServicePreset) {
      setSelectedServiceId(selectedServicePreset.id);
    }
  }, [selectedServicePreset]);

  const activeService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];
  const activeBarber = BARBERS.find((b) => b.id === selectedBarberId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim()) {
      setErrorMsg('Por favor ingresa tu nombre completo.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 7) {
      setErrorMsg('Por favor ingresa un número de teléfono o WhatsApp válido.');
      return;
    }

    // Generate random confirmation code
    const code = `CF-${Math.floor(1000 + Math.random() * 9000)}`;
    setConfirmationCode(code);
    setIsSubmitted(true);
  };

  const getWhatsAppMessage = () => {
    const barberTxt = activeBarber ? activeBarber.name : 'Primer barbero disponible';
    const msg = `¡Hola Corte Fino Barbería! Acabo de registrar mi cita con código ${confirmationCode}:
- Servicio: ${activeService.name} ($${activeService.price.toLocaleString('es-CO')} COP)
- Fecha: ${selectedDate} a las ${selectedTime}
- Barbero: ${barberTxt}
- Cliente: ${formData.name}
- Teléfono: ${formData.phone}
Por favor confirmar mi turno. ¡Muchas gracias!`;
    return encodeURIComponent(msg);
  };

  return (
    <section id="registro" className="py-24 bg-[#17191C] relative border-t border-[#262A30]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#A88958] mb-3">
            <CalendarCheck className="w-4 h-4 text-[#A88958]" />
            <span>Agenda Online Inmediata</span>
          </div>

          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-[#E8E1D5] uppercase tracking-wide mb-4">
            Reserva tu Cita y No Esperes Más
          </h2>

          <p className="text-sm sm:text-base text-[#7E868D] leading-relaxed">
            Garantiza tu turno sin intermediarios en nuestra sede de Cra. 10 #20-30 en Bogotá. Escoge tu barbero de confianza, tu hora ideal y recibe confirmación al instante.
          </p>
        </div>

        {/* Booking Card */}
        <div className="max-w-4xl mx-auto bg-[#1A1D20] border border-[#A88958]/40 rounded-lg p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle top gold accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#A88958] to-transparent" />

          {isSubmitted ? (
            /* Confirmation Success State */
            <div className="py-8 flex flex-col items-center text-center animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-[#A88958]/20 border-2 border-[#A88958] flex items-center justify-center text-[#A88958] mb-5">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <span className="text-xs font-bold uppercase tracking-widest text-[#A88958] mb-2 font-heading">
                ¡Cita Registrada Exitosamente!
              </span>

              <h3 className="font-heading font-bold text-3xl sm:text-4xl text-[#E8E1D5] uppercase mb-4">
                Te esperamos en Corte Fino
              </h3>

              <div className="p-6 bg-[#141618] border border-[#2D3238] rounded-md max-w-md w-full text-left mb-6 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-[#262A30]">
                  <span className="text-xs text-[#7E868D] uppercase">Código de Reserva</span>
                  <span className="font-heading font-bold text-lg text-[#A88958] tracking-widest">{confirmationCode}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#7E868D]">Servicio:</span>
                  <span className="text-xs font-semibold text-[#E8E1D5]">{activeService.name}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#7E868D]">Valor a pagar en sede:</span>
                  <span className="text-xs font-bold text-[#A88958] font-heading text-sm">
                    ${activeService.price.toLocaleString('es-CO')} COP
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#7E868D]">Fecha & Hora:</span>
                  <span className="text-xs font-semibold text-[#E8E1D5]">{selectedDate} · {selectedTime}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#7E868D]">Barbero:</span>
                  <span className="text-xs font-semibold text-[#E8E1D5]">
                    {activeBarber ? activeBarber.name : 'Primer barbero disponible'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#7E868D]">Ubicación:</span>
                  <span className="text-xs text-[#E8E1D5]">Cra. 10 #20-30, Bogotá</span>
                </div>
              </div>

              <p className="text-xs text-[#7E868D] max-w-sm mb-6 leading-relaxed">
                Hemos registrado tus datos. Te sugerimos abrir la confirmación por WhatsApp para guardar el recordatorio en tu teléfono.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md">
                <a
                  href={`https://wa.me/573000000000?text=${getWhatsAppMessage()}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 px-4 bg-[#A88958] hover:bg-[#C4A573] text-[#17191C] font-heading font-bold text-xs uppercase tracking-wider rounded-sm transition-all text-center flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enviar Confirmación a WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', phone: '', email: '', notes: '' });
                  }}
                  type="button"
                  className="w-full sm:w-auto py-3.5 px-6 border border-[#555B60] hover:border-[#A88958] text-[#E8E1D5] text-xs font-heading font-bold uppercase tracking-wider rounded-sm transition-colors"
                >
                  Nueva Reserva
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Step 1: Select Service */}
              <div>
                <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#A88958] mb-3">
                  1. Selecciona tu Servicio
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {SERVICES.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSelectedServiceId(s.id)}
                      className={`p-3.5 text-left rounded-md border transition-all cursor-pointer flex flex-col justify-between ${
                        selectedServiceId === s.id
                          ? 'bg-[#20252B] border-[#A88958] shadow-md shadow-[#A88958]/10'
                          : 'bg-[#151719] border-[#2A2F35] hover:border-[#555B60]'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="font-heading font-semibold text-xs text-[#E8E1D5] line-clamp-1">
                          {s.name}
                        </span>
                        {s.isPromo && (
                          <span className="text-[10px] bg-[#A88958] text-[#17191C] px-1.5 py-0.2 rounded-sm font-bold uppercase">
                            Promo
                          </span>
                        )}
                      </div>
                      <div className="flex items-baseline justify-between mt-2">
                        <span className="text-xs font-bold text-[#A88958] tabular-nums font-heading">
                          ${s.price.toLocaleString('es-CO')}
                        </span>
                        <span className="text-[11px] text-[#7E868D] tabular-nums">{s.duration}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Select Barber */}
              <div>
                <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#A88958] mb-3">
                  2. Selecciona tu Maestro Barbero
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedBarberId('any')}
                    className={`p-3 text-left rounded-md border transition-all cursor-pointer ${
                      selectedBarberId === 'any'
                        ? 'bg-[#20252B] border-[#A88958]'
                        : 'bg-[#151719] border-[#2A2F35] hover:border-[#555B60]'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-7 h-7 rounded-full bg-[#2A2F35] flex items-center justify-center text-xs font-bold text-[#A88958]">
                        CF
                      </div>
                      <span className="font-heading font-semibold text-xs text-[#E8E1D5]">
                        Sin Preferencia
                      </span>
                    </div>
                    <p className="text-[11px] text-[#7E868D]">Primer especialista libre</p>
                  </button>

                  {BARBERS.map((barber) => (
                    <button
                      key={barber.id}
                      type="button"
                      onClick={() => setSelectedBarberId(barber.id)}
                      className={`p-3 text-left rounded-md border transition-all cursor-pointer ${
                        selectedBarberId === barber.id
                          ? 'bg-[#20252B] border-[#A88958]'
                          : 'bg-[#151719] border-[#2A2F35] hover:border-[#555B60]'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-7 h-7 rounded-full bg-[#A88958]/20 border border-[#A88958]/50 flex items-center justify-center text-[11px] font-bold text-[#A88958]">
                          {barber.avatar}
                        </div>
                        <span className="font-heading font-semibold text-xs text-[#E8E1D5] line-clamp-1">
                          {barber.name}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#7E868D] line-clamp-1">{barber.role}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Select Date & Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#A88958] mb-3">
                    3. Fecha de Cita
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {dates.map((d) => (
                      <button
                        key={d.value}
                        type="button"
                        onClick={() => setSelectedDate(d.value)}
                        className={`p-2.5 text-center rounded border transition-all cursor-pointer ${
                          selectedDate === d.value
                            ? 'bg-[#A88958] text-[#17191C] font-bold border-[#A88958]'
                            : 'bg-[#151719] text-[#E8E1D5] border-[#2A2F35] hover:border-[#555B60]'
                        }`}
                      >
                        <span className="text-xs font-heading block">{d.label}</span>
                        <span className={`text-[10px] block ${selectedDate === d.value ? 'text-[#17191C]' : 'text-[#7E868D]'}`}>
                          {d.dayName}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#A88958] mb-3">
                    4. Horario Disponible
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 max-h-36 overflow-y-auto pr-1">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`py-2 px-1 text-center text-xs font-heading tracking-wider rounded border transition-all cursor-pointer ${
                          selectedTime === time
                            ? 'bg-[#A88958] text-[#17191C] font-bold border-[#A88958]'
                            : 'bg-[#151719] text-[#C8C1B4] border-[#2A2F35] hover:border-[#555B60]'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step 4: Customer Details */}
              <div className="pt-4 border-t border-[#2A2F35]">
                <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#A88958] mb-3">
                  5. Datos Personales
                </label>

                {errorMsg && (
                  <div className="mb-4 p-3 bg-red-950/60 border border-red-800 text-red-200 text-xs rounded">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-[11px] text-[#7E868D] uppercase mb-1">
                      Nombre y Apellido *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-[#7E868D] absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        placeholder="Ej. Gabriel Bovea"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 bg-[#141618] border border-[#2D3238] focus:border-[#A88958] text-sm text-[#E8E1D5] rounded-sm focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] text-[#7E868D] uppercase mb-1">
                      Teléfono / WhatsApp *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-[#7E868D] absolute left-3 top-3" />
                      <input
                        type="tel"
                        required
                        placeholder="Ej. 300 000 0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 bg-[#141618] border border-[#2D3238] focus:border-[#A88958] text-sm text-[#E8E1D5] rounded-sm focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] text-[#7E868D] uppercase mb-1">
                      Correo Electrónico (Opcional)
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-[#7E868D] absolute left-3 top-3" />
                      <input
                        type="email"
                        placeholder="tu-correo@ejemplo.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 bg-[#141618] border border-[#2D3238] focus:border-[#A88958] text-sm text-[#E8E1D5] rounded-sm focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] text-[#7E868D] uppercase mb-1">
                      Notas Especiales o Preferencia de Corte
                    </label>
                    <input
                      type="text"
                      placeholder="Ej. Fade bajo, arreglo de barba largo"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3 py-2.5 bg-[#141618] border border-[#2D3238] focus:border-[#A88958] text-sm text-[#E8E1D5] rounded-sm focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Summary and Submit Button */}
              <div className="pt-4 border-t border-[#2A2F35] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] text-[#7E868D] uppercase block">Resumen del servicio seleccionado:</span>
                  <span className="text-sm font-bold text-[#E8E1D5]">
                    {activeService.name} · ${activeService.price.toLocaleString('es-CO')} COP
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#A88958] hover:bg-[#C4A573] active:bg-[#8B6E3F] text-[#17191C] font-heading font-bold text-sm uppercase tracking-wider rounded-sm shadow-xl shadow-[#A88958]/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Confirmar Mi Registro</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
