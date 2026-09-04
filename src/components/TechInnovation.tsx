import React from 'react';
import { Cpu, Zap, Dna, ShieldCheck, ArrowRight, Sparkles, Activity, Layers } from 'lucide-react';

interface TechInnovationProps {
  onOpenBooking: () => void;
}

export const TechInnovation: React.FC<TechInnovationProps> = ({ onOpenBooking }) => {
  const techItems = [
    {
      icon: Cpu,
      tag: 'Cardiology AI',
      title: 'AI-Assisted 12-Lead ECG Suite',
      description: 'Continuous algorithmic arrhythmia detection and instant ischemic risk scoring within 60 seconds of test completion.'
    },
    {
      icon: Zap,
      tag: 'Sonography',
      title: 'Low-Dose 4D High-Definition Ultrasound',
      description: 'Ultra-clear cross-sectional tissue imaging utilizing deep acoustic beamforming with 65% lower energy emission.'
    },
    {
      icon: Dna,
      tag: 'Digital Lab',
      title: 'Rapid Automated Biomarker Panels',
      description: 'Same-hour comprehensive metabolic panels, hormonal assays, and HbA1c testing with zero manual contamination.'
    },
    {
      icon: ShieldCheck,
      tag: 'Cyber Health',
      title: 'Encrypted Digital Patient Portal',
      description: 'Instant WhatsApp prescription delivery, historical biomarker graphing, and seamless physician messaging.'
    }
  ];

  return (
    <section id="tech" className="w-full px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto py-12 sm:py-16">
      
      {/* Container with Modern Navy / Blue Aesthetic */}
      <div className="bg-[#0b152d] rounded-[36px] p-6 sm:p-10 lg:p-14 text-white relative overflow-hidden shadow-2xl shadow-blue-950/30">
        
        {/* Ambient Mesh Glows */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none"></div>

        {/* Section Header */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400 mb-3 bg-blue-950/80 px-3 py-1 rounded-full border border-blue-800/60">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Next-Gen Medical Infrastructure</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
              With Advanced Technologies
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
            The latest generation diagnostic equipment, automated digital laboratory analysis, and non-invasive surgical techniques &mdash; all working for your wellness.
          </p>
        </div>

        {/* 4 Technology Cards Grid */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index}
                className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:border-blue-500/40 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold tracking-wider uppercase text-blue-300 bg-blue-950/60 px-2 py-0.5 rounded-md border border-blue-800/40">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-blue-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-white/5 flex items-center gap-1 text-xs font-semibold text-blue-400 group-hover:text-blue-300">
                  <span>Certified Precision</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Bottom Banner */}
        <div className="relative z-10 mt-10 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="text-xs text-slate-300">
            Need urgent diagnostic imaging or report evaluation? Same-day slots available.
          </div>
          <button 
            onClick={onOpenBooking}
            className="py-2.5 px-6 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-600/30 hover:scale-105 transition-all flex items-center gap-2 cursor-pointer shrink-0"
          >
            <span>Book Diagnostic Test</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </section>
  );
};
