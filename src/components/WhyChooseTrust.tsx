import React from 'react';
import { Award, Clock, Dna, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

interface WhyChooseTrustProps {
  onOpenBooking: () => void;
}

export const WhyChooseTrust: React.FC<WhyChooseTrustProps> = ({ onOpenBooking }) => {
  const pillars = [
    {
      icon: Award,
      title: 'Top 1% Ranked Specialists',
      desc: 'Board-certified attending physicians with training from top academic medical centers.'
    },
    {
      icon: Clock,
      title: 'Guaranteed Under 8-Min Wait',
      desc: 'Digital mobile check-in ensures your doctor sees you precisely at your scheduled time.'
    },
    {
      icon: Dna,
      title: 'Same-Day Diagnostics & Lab',
      desc: 'On-site 3T MRI, digital ultrasound, and automated blood biomarker reports delivered in hours.'
    },
    {
      icon: ShieldCheck,
      title: '100% In-Network Transparency',
      desc: 'Direct insurance partnerships with BlueCross, Aetna, Cigna, and Medicare with zero surprise fees.'
    }
  ];

  return (
    <section id="why-us" className="w-full px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto py-12 sm:py-16">
      
      <div className="bg-[#0b152d] text-white rounded-[36px] p-6 sm:p-10 lg:p-14 shadow-xl relative overflow-hidden">
        
        {/* Subtle Cones */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 pb-8 border-b border-slate-800">
          <div>
            <div className="text-xs font-extrabold uppercase tracking-wider text-blue-400 mb-2">
              The SalvaMedic Difference
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
              Why Patients Choose Us
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md">
            We are redesigning the doctor visit from the ground up &mdash; focusing on speed, diagnostic accuracy, and empathetic patient care.
          </p>
        </div>

        {/* 4 Trust Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => {
            const IconComponent = p.icon;
            return (
              <div 
                key={idx}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-600/20 text-blue-400 flex items-center justify-center mb-5">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 leading-snug">
                  {p.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-10 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Join 14,800+ patients who have experienced modern, zero-wait healthcare.</span>
          </div>

          <button 
            onClick={onOpenBooking}
            className="btn-primary py-2.5 px-6 rounded-full text-white text-xs font-extrabold shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <span>Book Your First Visit</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </section>
  );
};
