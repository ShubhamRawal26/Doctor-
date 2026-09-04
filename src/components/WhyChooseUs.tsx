import React, { useEffect, useState } from 'react';
import { ShieldCheck, Sparkles } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
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
    <section id="about" className="w-full px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto py-10 sm:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* ========================================================
            LEFT COLUMN: Big Cobalt Blue Doctor Card with Badges
        ======================================================== */}
        <div className="lg:col-span-5 blue-card-gradient rounded-[32px] p-6 sm:p-8 text-white relative overflow-hidden shadow-xl shadow-blue-600/15 flex flex-col justify-between min-h-[460px]">
          
          {/* Header */}
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
              Why <br />
              choose us
            </h2>
            <div className="text-[11px] text-blue-200 uppercase tracking-wider font-medium">
              [ PROVIDED BY ] <span className="font-bold text-white">Licensed medical experts</span>
            </div>
          </div>

          {/* Center Doctor Team Image with Overlaid Floating Pills */}
          <div className="relative z-10 my-4 flex justify-center items-end">
            <div 
              className="w-full max-w-[340px] transition-transform duration-300 ease-out will-change-transform"
              style={{
                transform: `translate3d(0, ${Math.sin(scrollY * 0.003) * 12}px, 0)`
              }}
            >
              <img 
                src="/doctors-duo.png" 
                alt="Medical Team Duo" 
                className="w-full h-auto object-contain select-none drop-shadow-2xl"
              />
            </div>

            {/* Badge: Experienced Doctors */}
            <div 
              className="absolute left-0 top-1/4 glass-pill-dark rounded-full px-3 py-1 text-[11px] font-bold text-white shadow-lg flex items-center gap-1.5 border border-white/20 animate-float-slow transition-transform duration-300 ease-out"
              style={{
                transform: `translate3d(0, ${Math.sin(scrollY * 0.004 + 1) * 10}px, 0)`
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
              Experienced Doctors
            </div>

            {/* Badge: Modern Equipment */}
            <div 
              className="absolute left-4 bottom-4 glass-pill-dark rounded-full px-3 py-1 text-[11px] font-bold text-white shadow-lg flex items-center gap-1.5 border border-white/20 animate-float-reverse transition-transform duration-300 ease-out"
              style={{
                transform: `translate3d(0, ${Math.sin(scrollY * 0.004 + 2) * -8}px, 0)`
              }}
            >
              <Sparkles className="w-3 h-3 text-sky-400" />
              Modern Equipment
            </div>

            {/* Badge: Certified Clinic */}
            <div 
              className="absolute right-0 top-1/2 glass-pill-dark rounded-full px-3 py-1 text-[11px] font-bold text-white shadow-lg flex items-center gap-1.5 border border-white/20 animate-float-fast transition-transform duration-300 ease-out"
              style={{
                transform: `translate3d(0, ${Math.sin(scrollY * 0.004 + 3) * 10}px, 0)`
              }}
            >
              <ShieldCheck className="w-3 h-3 text-emerald-400" />
              Certified Clinic
            </div>
          </div>

          {/* Bottom Pill */}
          <div className="relative z-10 pt-2 flex items-center justify-between">
            <span className="text-[10px] uppercase font-bold tracking-widest text-blue-200 bg-white/10 px-3 py-1 rounded-full border border-white/15">
              Feels Like Home
            </span>
          </div>

        </div>

        {/* ========================================================
            RIGHT COLUMN: 4 Numeric Stat Callouts & Advantages
        ======================================================== */}
        <div className="lg:col-span-7 bg-white rounded-[32px] p-6 sm:p-10 border border-slate-200/80 shadow-xs flex flex-col justify-between">
          
          {/* Header Tag */}
          <div className="flex items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-100">
            <span className="text-xs font-semibold text-slate-400">[ Advantages ]</span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">LOOKS LIKE TRUST</span>
          </div>

          {/* 4 Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
            
            {/* Stat 1 */}
            <div className="group">
              <div className="text-4xl sm:text-5xl font-extrabold text-[#0a1024] tracking-tight mb-1 flex items-baseline">
                10<span className="text-blue-600 font-bold ml-0.5">+</span>
              </div>
              <div className="text-sm font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">Years of experience</div>
              <p className="text-xs text-slate-500 leading-relaxed">
                We have been working since 2012, continuously improving the quality of healthcare services every day.
              </p>
            </div>

            {/* Stat 2 */}
            <div className="group">
              <div className="text-4xl sm:text-5xl font-extrabold text-[#0a1024] tracking-tight mb-1 flex items-baseline">
                15
              </div>
              <div className="text-sm font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">Areas of medicine</div>
              <p className="text-xs text-slate-500 leading-relaxed">
                From family medicine to surgery, pediatrics, cardiology, and digital diagnostics.
              </p>
            </div>

            {/* Stat 3 */}
            <div className="group">
              <div className="text-4xl sm:text-5xl font-extrabold text-[#0a1024] tracking-tight mb-1 flex items-baseline">
                95<span className="text-blue-600 font-bold ml-0.5">%</span>
              </div>
              <div className="text-sm font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">Satisfied patients</div>
              <p className="text-xs text-slate-500 leading-relaxed">
                According to internal patient satisfaction surveys and verified clinic feedback.
              </p>
            </div>

            {/* Stat 4 */}
            <div className="group">
              <div className="text-4xl sm:text-5xl font-extrabold text-[#0a1024] tracking-tight mb-1 flex items-baseline">
                98<span className="text-blue-600 font-bold ml-0.5">%</span>
              </div>
              <div className="text-sm font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">Diagnostic accuracy</div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Thanks to state-of-the-art laboratory equipment and experienced medical specialists.
              </p>
            </div>

          </div>

          {/* Bottom Footer Note */}
          <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
            <span>IN FACT: Professional care and certified precision</span>
            <span className="font-semibold text-blue-600">SalvaMedic Standard</span>
          </div>

        </div>

      </div>
    </section>
  );
};
