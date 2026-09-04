import React, { useEffect, useState } from 'react';
import { User, Video, Play, ArrowRight, Sparkles, ShieldCheck, Award, Star, Clock, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto pt-4 pb-8">
      
      {/* Flagship Luxury Clinic Container */}
      <div className="relative rounded-[36px] sm:rounded-[44px] bg-gradient-to-b from-white via-[#fcfdff] to-[#f2f6fc] border border-slate-200/90 shadow-[0_20px_50px_-20px_rgba(10,25,60,0.07)] overflow-hidden p-6 sm:p-10 lg:p-14">
        
        {/* Soft Ambient Diffuse Cones */}
        <div 
          className="absolute -top-32 -right-32 w-[550px] h-[550px] bg-blue-100/50 rounded-full blur-3xl pointer-events-none transition-transform duration-700 ease-out"
          style={{ transform: `translate3d(0, ${scrollY * 0.08}px, 0)` }}
        ></div>
        <div 
          className="absolute -bottom-32 left-1/4 w-[500px] h-[500px] bg-cyan-100/40 rounded-full blur-3xl pointer-events-none transition-transform duration-700 ease-out"
          style={{ transform: `translate3d(0, ${scrollY * -0.06}px, 0)` }}
        ></div>

        {/* 3-Column Flagship Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center relative z-10">
          
          {/* ========================================================
              LEFT COLUMN: Award Badge, Headline, Dual CTAs, Trust
          ======================================================== */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Top Voted Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50/90 border border-blue-200/80 rounded-full px-4 py-1.5 text-xs font-bold text-blue-900 w-fit shadow-2xs">
              <Award className="w-4 h-4 text-blue-600" />
              <span>Voted #1 Precision Healthcare Network 2026</span>
            </div>

            {/* Flagship Headline */}
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-[46px] xl:text-[52px] font-extrabold tracking-tight text-[#030b1e] leading-[1.12] mb-4">
                Healthcare <br className="hidden sm:inline" />
                Reimagined for <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500">
                  Precision Living.
                </span>
              </h1>

              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed max-w-md">
                Comprehensive longevity medicine, same-day AI diagnostics, and dedicated board-certified physicians &mdash; delivering personalized clinical care under one roof.
              </p>
            </div>

            {/* Dual CTAs: In-Person & Telehealth */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <button 
                onClick={onOpenBooking}
                className="py-3.5 px-6 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white text-xs sm:text-sm font-extrabold shadow-lg shadow-blue-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book In-Person Visit</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button 
                onClick={onOpenBooking}
                className="py-3.5 px-5 rounded-full bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-bold border border-slate-200 shadow-2xs hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Video className="w-4 h-4 text-blue-600" />
                <span>Instant Telehealth (&lt; 5m)</span>
              </button>
            </div>

            {/* In-Network Trust Proof */}
            <div className="pt-4 border-t border-slate-200/80 flex flex-col gap-2 text-xs">
              <div className="flex items-center gap-2 text-slate-700 font-semibold">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span>4.98/5 Rating &bull; 14,800+ Verified Patients</span>
              </div>
              <div className="text-[11px] text-slate-400 font-medium">
                In-Network: <strong className="text-slate-600">BlueCross, Aetna, Cigna, Medicare, UnitedHealthcare</strong>
              </div>
            </div>

          </div>

          {/* ========================================================
              CENTER COLUMN: Main Transparent Doctor Cutout with Credentials
          ======================================================== */}
          <div className="lg:col-span-4 relative flex justify-center items-end min-h-[380px] sm:min-h-[460px] lg:min-h-[500px]">
            
            {/* Elegant Ambient Pedestal */}
            <div className="absolute inset-x-4 bottom-0 top-12 bg-gradient-to-t from-blue-100/60 via-slate-100/30 to-transparent rounded-t-[140px] -z-0"></div>

            {/* Doctor Transparent Cutout with Scroll Parallax */}
            <div 
              className="relative z-10 w-full max-w-[340px] lg:max-w-[380px] transition-transform duration-300 ease-out will-change-transform"
              style={{
                transform: `translate3d(0, ${Math.min(scrollY * 0.07, 36)}px, 0)`
              }}
            >
              <img 
                src="/hero-doctor.png" 
                alt="Lead Attending Physician" 
                className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-xl"
              />
            </div>

            {/* Floating Credential Badge 1: Board Certified */}
            <div 
              className="absolute left-0 top-1/4 z-20 glass-pill rounded-full px-3.5 py-1.5 flex items-center gap-2 shadow-md border border-white animate-float-subtle cursor-default"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-blue-600 ring-4 ring-blue-100"></div>
              <span className="text-xs font-extrabold text-slate-800">Board Certified</span>
            </div>

            {/* Floating Credential Badge 2: Charité & Harvard Fellow */}
            <div 
              className="absolute right-0 top-1/3 z-20 glass-pill rounded-full px-3.5 py-1.5 flex items-center gap-2 shadow-md border border-white animate-float-reverse cursor-default"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-xs font-extrabold text-slate-800">European Fellow</span>
            </div>

            {/* Floating Credential Badge 3: 14+ Yrs Practice */}
            <div 
              className="absolute right-4 bottom-16 z-20 glass-pill rounded-full px-3.5 py-1.5 flex items-center gap-2 shadow-md border border-white animate-float-subtle cursor-default"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span className="text-xs font-extrabold text-slate-800">14+ Yrs Experience</span>
            </div>

          </div>

          {/* ========================================================
              RIGHT COLUMN: Real-Time Clinic Operations Console
          ======================================================== */}
          <div className="lg:col-span-3 flex flex-col justify-between space-y-4">
            
            {/* Live Clinic Operations Card */}
            <div className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Clinic Active Status</span>
                </div>
                <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                  Normal Flow
                </span>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">Average In-Clinic Wait:</span>
                  <span className="font-extrabold text-slate-900">&lt; 8 mins</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Next Telehealth Slot:</span>
                  <span className="font-extrabold text-blue-600">Available Now</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Lab Diagnostic Turnaround:</span>
                  <span className="font-extrabold text-slate-900">Same Day (4 hrs)</span>
                </div>
              </div>

              <button 
                onClick={onOpenBooking}
                className="w-full py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold transition-colors text-center cursor-pointer"
              >
                Claim Next Open Slot
              </button>
            </div>

            {/* Quick Contact & WhatsApp Dispatch */}
            <div className="bg-gradient-to-tr from-slate-900 to-[#030b1e] text-white rounded-3xl p-5 border border-slate-800 shadow-md space-y-3">
              <div className="text-xs font-bold text-blue-300 uppercase tracking-wider">
                Emergency &amp; Priority
              </div>
              <h4 className="text-sm font-bold leading-snug">
                Need urgent medical evaluation or prescription triage?
              </h4>
              <a 
                href="https://wa.me/380987654321?text=Hello%20SalvaMedic%20Clinic,%20I%20need%20urgent%20consultation." 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <span>Direct WhatsApp Hotline</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
