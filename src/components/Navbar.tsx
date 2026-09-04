import React, { useState } from 'react';
import { Menu, MapPin, Phone, Search, User, X, Stethoscope, ChevronRight, CalendarPlus, ShieldCheck, Video, Zap } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full relative z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-2xs">
      {/* Main Floating Capsule Navigation Bar */}
      <div className="w-full py-3 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <div className="flex items-center justify-between gap-3">
          
          {/* Brand Identity */}
          <div className="flex items-center gap-3.5 shrink-0">
            {/* SalvaMedic Brand Emblem */}
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                <Stethoscope className="w-5 h-5" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-[#030b1e] flex items-center">
                Salva<span className="text-blue-600">Medic</span>
              </span>
            </a>
          </div>

          {/* Center Capsule Navigation (Desktop) */}
          <nav className="hidden lg:flex items-center bg-white/90 backdrop-blur-md rounded-full px-2 py-1.5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-200/80">
            <div className="flex items-center gap-0.5 text-xs font-semibold text-slate-600">
              <a href="#services" className="px-3.5 py-1.5 rounded-full hover:text-blue-600 hover:bg-blue-50/60 transition-all">
                Care Programs
              </a>
              <a href="#insurance" className="px-3.5 py-1.5 rounded-full hover:text-blue-600 hover:bg-blue-50/60 transition-all">
                Insurance
              </a>
              <a href="#specialists" className="px-3.5 py-1.5 rounded-full hover:text-blue-600 hover:bg-blue-50/60 transition-all">
                Physicians
              </a>
              <a href="#tech" className="px-3.5 py-1.5 rounded-full hover:text-blue-600 hover:bg-blue-50/60 transition-all">
                Diagnostics
              </a>
              <a href="#reviews" className="px-3.5 py-1.5 rounded-full hover:text-blue-600 hover:bg-blue-50/60 transition-all">
                Reviews
              </a>
              <a href="#faq" className="px-3.5 py-1.5 rounded-full hover:text-blue-600 hover:bg-blue-50/60 transition-all">
                FAQ
              </a>
            </div>
          </nav>

          {/* Right Info & Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            
            {/* Quick Telehealth Button */}
            <button 
              onClick={onOpenBooking}
              className="hidden sm:inline-flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-full px-3.5 py-2 text-xs font-bold transition-all cursor-pointer"
            >
              <Video className="w-3.5 h-3.5 text-blue-600" />
              <span>Telehealth</span>
            </button>

            {/* Quick Book Appointment Button */}
            <button 
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-full px-4 sm:px-5 py-2 text-xs font-extrabold shadow-md shadow-blue-500/25 hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer"
            >
              <CalendarPlus className="w-3.5 h-3.5" />
              <span>Book Consultation</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-4 right-4 mt-2 bg-white rounded-3xl p-5 shadow-2xl border border-slate-100 flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
          <div className="p-3 bg-blue-50/70 rounded-2xl text-xs text-blue-900 font-medium mb-1 flex items-center justify-between">
            <span>● 24/7 Physicians Available</span>
            <span className="font-bold text-blue-700">+1 (800) 725-8263</span>
          </div>

          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-between p-3 rounded-2xl hover:bg-slate-50 text-slate-800 font-semibold text-sm">
            Care Programs <ChevronRight className="w-4 h-4 text-slate-400" />
          </a>
          <a href="#insurance" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-between p-3 rounded-2xl hover:bg-slate-50 text-slate-800 font-semibold text-sm">
            Insurance &amp; Coverage <ChevronRight className="w-4 h-4 text-slate-400" />
          </a>
          <a href="#specialists" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-between p-3 rounded-2xl hover:bg-slate-50 text-slate-800 font-semibold text-sm">
            Medical Specialists <ChevronRight className="w-4 h-4 text-slate-400" />
          </a>
          <a href="#tech" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-between p-3 rounded-2xl hover:bg-slate-50 text-slate-800 font-semibold text-sm">
            Diagnostic Facilities <ChevronRight className="w-4 h-4 text-slate-400" />
          </a>
          <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-between p-3 rounded-2xl hover:bg-slate-50 text-slate-800 font-semibold text-sm">
            Patient Stories <ChevronRight className="w-4 h-4 text-slate-400" />
          </a>

          <button 
            onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
            className="w-full py-3 rounded-2xl bg-blue-600 text-white font-bold text-sm shadow-md text-center mt-2 flex items-center justify-center gap-2"
          >
            <CalendarPlus className="w-4 h-4" />
            <span>Book Appointment Online</span>
          </button>
        </div>
      )}

    </header>
  );
};
