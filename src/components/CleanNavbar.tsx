import React, { useState } from 'react';
import { Stethoscope, Phone, CalendarPlus, Menu, X, ChevronRight, ShieldCheck } from 'lucide-react';

interface CleanNavbarProps {
  onOpenBooking: () => void;
}

export const CleanNavbar: React.FC<CleanNavbarProps> = ({ onOpenBooking }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-2xs">
      
      {/* Top Hotline Bar */}
      <div className="w-full bg-[#0b152d] text-white text-[11px] font-medium py-1.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-emerald-400 font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>24/7 Board-Certified Physicians On-Call</span>
            <span className="hidden sm:inline text-slate-500 font-normal">&bull; HIPAA &amp; CLIA Certified</span>
          </div>

          <a href="tel:+18007258263" className="flex items-center gap-1.5 text-slate-200 hover:text-white font-bold transition-colors">
            <Phone className="w-3 h-3 text-blue-400" />
            <span>Call Desk: +1 (800) 725-8263</span>
          </a>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          {/* NexGen Digital Creator Tag */}
          <a 
            href="https://nexgendigital.tech" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hidden md:flex items-center gap-2 group text-decoration-none"
            title="Built by NexGen Digital"
          >
            <img 
              src="https://res.cloudinary.com/sahbncq8/image/upload/v1786081222/NexG1en_alefcv.png" 
              alt="NexGen Digital" 
              className="h-7 w-auto object-contain group-hover:scale-105 transition-transform" 
            />
            <span className="text-[11px] font-medium text-slate-400">
              By <strong className="text-slate-800 font-bold group-hover:text-blue-600 transition-colors">NexGen</strong>
            </span>
          </a>

          <div className="hidden md:block w-px h-5 bg-slate-200"></div>

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
