import React, { useState } from 'react';
import { Search, Calendar, Video, UserCheck, ArrowRight, ShieldCheck, Star, Clock, CheckCircle2 } from 'lucide-react';

interface HeroSearchSectionProps {
  onOpenBooking: () => void;
  onSearchSpecialty: (term: string) => void;
}

export const HeroSearchSection: React.FC<HeroSearchSectionProps> = ({
  onOpenBooking,
  onSearchSpecialty
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const quickSearches = [
    'Cardiology & ECG',
    'Pediatrics',
    'Primary Care',
    'Women’s Health',
    '3T MRI Diagnostics',
    'Rapid Lab Tests'
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearchSpecialty(searchTerm);
    } else {
      onOpenBooking();
    }
  };

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-6 pb-12">
      
      {/* Main Hero Container with Balanced Proportions & Zero Clutter */}
      <div className="bg-gradient-to-b from-[#f0f4fa] via-[#f8fafc] to-white rounded-[36px] sm:rounded-[44px] border border-slate-200/90 p-8 sm:p-12 lg:p-14 shadow-xs relative overflow-hidden">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Search Bar, Quick Pills */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* National Top Rank Badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 text-xs font-bold text-slate-800 shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>Ranked #1 for Patient Trust &amp; Precision Care 2026</span>
            </div>

            {/* Clear, Empathetic Headline */}
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-[50px] font-extrabold tracking-tight text-[#0b152d] leading-[1.14]">
                World-class healthcare, <br className="hidden sm:inline" />
                <span className="text-blue-600">designed around you.</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-xl mt-3.5">
                Experience comprehensive primary care, world-class specialists, and same-day diagnostics with zero waiting times &mdash; in-clinic and 24/7 via telehealth.
              </p>
            </div>

            {/* Smart Patient Care Search Bar */}
            <form onSubmit={handleSearchSubmit} className="relative max-w-xl">
              <div className="relative flex items-center bg-white rounded-full p-2 border border-slate-300/80 shadow-md focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10 transition-all">
                <Search className="w-5 h-5 text-slate-400 ml-3.5 shrink-0" />
                <input 
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by condition, specialty, or doctor name..."
                  className="w-full px-3 py-2 text-xs sm:text-sm text-slate-900 bg-transparent outline-none placeholder:text-slate-400 font-medium"
                />
                <button 
                  type="submit"
                  className="btn-primary text-white text-xs sm:text-sm font-bold px-6 py-2.5 sm:py-3 rounded-full shrink-0 flex items-center gap-1.5 shadow-sm cursor-pointer"
                >
                  <span>Search Care</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>

            {/* Popular Condition Pills */}
            <div className="flex items-center gap-2 flex-wrap pt-1">
              <span className="text-xs font-bold text-slate-400">Popular:</span>
              {quickSearches.map((term, idx) => (
                <button 
                  key={idx}
                  onClick={() => onSearchSpecialty(term)}
                  className="text-xs font-semibold text-slate-600 hover:text-blue-600 bg-white hover:bg-blue-50/80 px-3 py-1 rounded-full border border-slate-200 shadow-2xs transition-all cursor-pointer"
                >
                  {term}
                </button>
              ))}
            </div>

            {/* Trust Proof Metrics */}
            <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-6 text-xs text-slate-600">
              <div className="flex items-center gap-1.5 font-bold text-slate-800">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span>4.98/5 (14,800+ Verified Patient Reviews)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>All Major Insurances In-Network</span>
              </div>
            </div>

          </div>

          {/* Right Column: Lead Physician Card & Real-Time Slot */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            <div className="relative w-full max-w-sm bg-white rounded-[32px] p-4 sm:p-5 border border-slate-200/90 shadow-xl overflow-hidden">
              
              {/* Doctor Photo Frame */}
              <div className="relative w-full h-80 rounded-2xl overflow-hidden bg-slate-50 flex items-end justify-center">
                <img 
                  src="/hero-doctor.png" 
                  alt="Lead Physician Dr. Maria Kovalenko" 
                  className="w-auto h-full object-contain drop-shadow-md select-none pointer-events-none"
                />

                {/* Next Available Slot Pill */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200 text-xs font-bold text-slate-800 shadow-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Next Open Slot: Today 10:30 AM</span>
                </div>
              </div>

              {/* Doctor Card Bio */}
              <div className="p-3 space-y-2 mt-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-[#0b152d]">Dr. Maria Kovalenko, MD</h3>
                    <p className="text-xs text-blue-600 font-semibold">Lead Attending Physician &bull; Charité Fellow</p>
                  </div>
                  <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md">
                    ★ 4.98
                  </span>
                </div>

                <button 
                  onClick={onOpenBooking}
                  className="w-full py-2.5 rounded-xl bg-blue-50 hover:bg-blue-600 hover:text-white text-blue-700 text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Consultation with Dr. Maria</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* 3 High-Impact Patient Action Pillars with Perfect Spacing */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        
        {/* Action 1: In-Person Appointment */}
        <div 
          onClick={onOpenBooking}
          className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs spring-hover cursor-pointer flex items-center gap-4 group"
        >
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
            <Calendar className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-0.5">Instant Booking</div>
            <h3 className="text-base font-bold text-[#0b152d] group-hover:text-blue-600 transition-colors">
              Schedule In-Person Visit
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">Average wait under 8 minutes in-clinic.</p>
          </div>
          <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
        </div>

        {/* Action 2: 24/7 Virtual Care */}
        <div 
          onClick={onOpenBooking}
          className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs spring-hover cursor-pointer flex items-center gap-4 group"
        >
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
            <Video className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-0.5">On-Demand</div>
            <h3 className="text-base font-bold text-[#0b152d] group-hover:text-emerald-600 transition-colors">
              24/7 Video Telehealth
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">Connect with a doctor in &lt; 5 minutes.</p>
          </div>
          <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
        </div>

        {/* Action 3: Find a Doctor */}
        <a 
          href="#doctors"
          className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs spring-hover cursor-pointer flex items-center gap-4 group"
        >
          <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
            <UserCheck className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <div className="text-xs font-bold uppercase tracking-wider text-purple-600 mb-0.5">Specialist Directory</div>
            <h3 className="text-base font-bold text-[#0b152d] group-hover:text-purple-600 transition-colors">
              Find a Senior Specialist
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">150+ Board-certified physician profiles.</p>
          </div>
          <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
        </a>

      </div>

    </section>
  );
};
