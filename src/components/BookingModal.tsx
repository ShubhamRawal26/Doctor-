import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Phone, CheckCircle2, Stethoscope, Sparkles } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialDoctor?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService = 'General Physician Consultation',
  initialDoctor = 'Dr. Maria Kovalenko'
}) => {
  const [service, setService] = useState(initialService);
  const [doctor, setDoctor] = useState(initialDoctor);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('10:00 AM – 11:00 AM');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) setService(initialService);
    if (initialDoctor) setDoctor(initialDoctor);
  }, [initialService, initialDoctor]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newAppointment = {
      id: 'apt_' + Date.now(),
      name,
      phone,
      service,
      doctor,
      date,
      time,
      notes,
      timestamp: new Date().toISOString(),
      status: 'Confirmed'
    };

    // Store in localStorage
    try {
      const existing = JSON.parse(localStorage.getItem('clinic_leads') || '[]');
      existing.unshift(newAppointment);
      localStorage.setItem('clinic_leads', JSON.stringify(existing));
    } catch (_) {}

    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-white rounded-[32px] shadow-2xl border border-slate-200/80 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 sm:px-8 border-b border-slate-100 bg-gradient-to-r from-blue-50/50 via-white to-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20">
              <Stethoscope className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0a1024] tracking-tight">
                Schedule Consultation
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                SalvaMedic Innovation Clinic &bull; Rapid 30-min confirmation
              </p>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:px-8 overflow-y-auto flex-1">
          {submitted ? (
            <div className="py-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 shadow-sm ring-8 ring-emerald-50/50">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-[#0a1024] mb-2">Appointment Confirmed!</h4>
              <p className="text-sm text-slate-600 max-w-md leading-relaxed mb-6">
                Thank you, <strong className="text-slate-900">{name}</strong>. Your consultation for <strong className="text-blue-600">{service}</strong> with <strong className="text-slate-900">{doctor}</strong> has been registered. Our clinic desk will send your confirmation pass via WhatsApp.
              </p>

              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 w-full max-w-md text-left text-xs space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-slate-500">Date &amp; Time:</span>
                  <span className="font-semibold text-slate-800">{date || 'Today'} at {time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Contact Number:</span>
                  <span className="font-semibold text-slate-800">{phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Clinic Location:</span>
                  <span className="font-semibold text-slate-800">Medychnyi Avenue, 8-A, Lviv</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                <a 
                  href={`https://wa.me/380987654321?text=${encodeURIComponent(`Hello SalvaMedic, I have booked a consultation for ${service} on ${date || 'today'}. Name: ${name}`)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-md shadow-emerald-600/20 text-center transition-all"
                >
                  Open WhatsApp Chat
                </a>
                <button 
                  onClick={handleReset}
                  className="py-3 px-6 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Select Medical Department <span className="text-red-500">*</span>
                </label>
                <select 
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm font-medium text-slate-800 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                  required
                >
                  <option>General Physician Consultation</option>
                  <option>Family Medicine</option>
                  <option>Pediatrics &amp; Immunization</option>
                  <option>Women's Health &amp; Gynecology</option>
                  <option>Cardiology &amp; ECG Evaluation</option>
                  <option>Ultrasound &amp; Digital Lab Diagnostics</option>
                  <option>Preventive Full-Body Screening</option>
                </select>
              </div>

              {/* Doctor Specialist Choice */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Select Senior Specialist
                </label>
                <select 
                  value={doctor}
                  onChange={(e) => setDoctor(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm font-medium text-slate-800 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                >
                  <option>Dr. Maria Kovalenko (Lead Physician &bull; 14 yrs exp)</option>
                  <option>Dr. Alexander Chen (Senior Cardiologist &bull; 16 yrs exp)</option>
                  <option>Dr. Sarah Jensen (Head of Pediatrics &bull; 12 yrs exp)</option>
                  <option>Dr. Viktor Novak (Diagnostics Director &bull; 18 yrs exp)</option>
                  <option>First Available Senior Specialist</option>
                </select>
              </div>

              {/* Date & Time Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Preferred Date <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input 
                      type="date"
                      value={date}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm font-medium text-slate-800 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Time Window
                  </label>
                  <select 
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm font-medium text-slate-800 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                  >
                    <option>09:00 AM &ndash; 10:00 AM</option>
                    <option>10:00 AM &ndash; 11:00 AM</option>
                    <option>11:00 AM &ndash; 12:00 PM</option>
                    <option>01:00 PM &ndash; 02:00 PM</option>
                    <option>03:00 PM &ndash; 04:00 PM</option>
                    <option>05:00 PM &ndash; 06:00 PM</option>
                    <option>06:00 PM &ndash; 07:30 PM</option>
                  </select>
                </div>
              </div>

              {/* Patient Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Patient Name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text"
                    placeholder="Full legal name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-800 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="tel"
                    placeholder="+380 98 765 4321"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-800 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                    required
                  />
                </div>
              </div>

              {/* Symptoms / Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Symptoms / Medical Notes <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <textarea 
                  rows={2}
                  placeholder="Describe your current symptoms, reason for visit, or past reports..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-800 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button 
                type="submit"
                className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 mt-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Confirm Appointment Request</span>
              </button>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
