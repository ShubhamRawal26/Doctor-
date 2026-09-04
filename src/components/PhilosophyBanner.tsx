import React from 'react';
import { Lightbulb, User } from 'lucide-react';

interface PhilosophyBannerProps {
  onOpenBooking: () => void;
}

export const PhilosophyBanner: React.FC<PhilosophyBannerProps> = ({ onOpenBooking }) => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto py-12 sm:py-16 text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Brand Micro Watermark */}
        <div className="text-[11px] font-bold tracking-widest text-slate-400 uppercase mb-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          <span>SalvaMedic Philosophy</span>
          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
        </div>

        {/* Large Statement with Embedded Pill Badges */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#0a1024] leading-[1.35] tracking-tight mb-6">
          We combine innovative{' '}
          {/* Lightbulb Capsule Badge */}
          <span className="inline-flex items-center justify-center align-middle w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-blue-50 border border-blue-200/80 text-blue-600 shadow-sm mx-1.5 -mt-1 hover:scale-110 transition-transform">
            <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 fill-blue-500/20 text-blue-600" />
          </span>{' '}
          technologies with a human approach to make every patient{' '}
          {/* Patient Avatars Capsule Badge */}
          <span className="inline-flex items-center align-middle bg-slate-100/90 border border-slate-200 rounded-full px-1.5 py-0.5 shadow-sm mx-1.5 -mt-1 -space-x-1.5 hover:scale-105 transition-transform">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80" 
              alt="Patient" 
              className="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover ring-1 ring-white" 
            />
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80" 
              alt="Patient" 
              className="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover ring-1 ring-white" 
            />
            <img 
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&q=80" 
              alt="Patient" 
              className="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover ring-1 ring-white" 
            />
          </span>{' '}
          <span className="font-extrabold text-[#0a1024]">feel confident and calm.</span>
        </h2>

        {/* Subtitle Description */}
        <p className="text-xs sm:text-sm text-slate-500 font-normal max-w-xl leading-relaxed mb-8">
          Our hospital is <strong className="font-semibold text-slate-700">a space of trust</strong>, modern medicine and care, based on many years of experience and love for people.
        </p>

        {/* More About Us Pill Button */}
        <button 
          onClick={onOpenBooking}
          className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-full pl-6 pr-2 py-2 text-xs sm:text-sm font-semibold shadow-md shadow-blue-500/20 hover:scale-[1.03] active:scale-[0.98] transition-all group cursor-pointer"
        >
          <span>Schedule Consultation</span>
          <span className="w-7 h-7 rounded-full bg-white text-blue-600 flex items-center justify-center group-hover:rotate-12 transition-transform shadow-xs">
            <User className="w-3.5 h-3.5" />
          </span>
        </button>

      </div>
    </section>
  );
};
