import React, { useState } from 'react';
import { Stethoscope, CalendarPlus, Menu, X, ChevronRight } from 'lucide-react';

interface CleanNavbarProps {
  onOpenBooking: () => void;
}

export const CleanNavbar: React.FC<CleanNavbarProps> = ({ onOpenBooking }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-2xs">
      {/* Main Nav Bar */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          {/* SalvaMedic Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
              <Stethoscope className="w-5 h-5" />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-[#0b152d] flex items-center">
              Salva<span className="text-blue-600">Medic</span>
            </span>
          </a>
        </div>

        {/* Center Desktop Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-600">
          <a href="#specialties" className="hover:text-blue-600 transition-colors">Specialties</a>
          <a href="#doctors" className="hover:text-blue-600 transition-colors">Doctors</a>
          <a href="#facilities" className="hover:text-blue-600 transition-colors">Inside the Clinic</a>
          <a href="#why-us" className="hover:text-blue-600 transition-colors">Why Patients Trust Us</a>
          <a href="#reviews" className="hover:text-blue-600 transition-colors">Patient Stories</a>
          <a href="#faq" className="hover:text-blue-600 transition-colors">FAQ</a>
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-3">
          <button 
            onClick={onOpenBooking}
            className="btn-primary text-white font-extrabold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-md shadow-blue-600/20 flex items-center gap-2 cursor-pointer"
          >
            <CalendarPlus className="w-4 h-4" />
            <span>Schedule Appointment</span>
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-slate-200"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 p-5 space-y-3 animate-in fade-in duration-200">
          <a href="#specialties" onClick={() => setMobileOpen(false)} className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 font-semibold text-slate-800 text-sm">
            Specialties <ChevronRight className="w-4 h-4 text-slate-400" />
          </a>
          <a href="#doctors" onClick={() => setMobileOpen(false)} className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 font-semibold text-slate-800 text-sm">
            Find a Doctor <ChevronRight className="w-4 h-4 text-slate-400" />
          </a>
          <a href="#facilities" onClick={() => setMobileOpen(false)} className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 font-semibold text-slate-800 text-sm">
            Inside the Clinic <ChevronRight className="w-4 h-4 text-slate-400" />
          </a>
          <a href="#why-us" onClick={() => setMobileOpen(false)} className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 font-semibold text-slate-800 text-sm">
            Why Patients Trust Us <ChevronRight className="w-4 h-4 text-slate-400" />
          </a>
          <a href="#faq" onClick={() => setMobileOpen(false)} className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 font-semibold text-slate-800 text-sm">
            Frequently Asked Questions <ChevronRight className="w-4 h-4 text-slate-400" />
          </a>
        </div>
      )}

    </header>
  );
};
