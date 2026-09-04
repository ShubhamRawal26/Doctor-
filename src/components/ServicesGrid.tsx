import React, { useState } from 'react';
import { Stethoscope, Baby, Sparkles, HeartPulse, Scan, ArrowUpRight, ArrowRight, ShieldCheck, Activity, Dna, Clock, Award } from 'lucide-react';

interface ServicesGridProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onSelectService }) => {
  const [filter, setFilter] = useState<'all' | 'primary' | 'diagnostics' | 'longevity'>('all');

  const services = [
    {
      id: '01',
      title: 'Precision Longevity & Primary Care',
      category: 'longevity',
      icon: Stethoscope,
      description: 'Comprehensive health mapping, biological age evaluation, metabolic optimization, and continuous proactive wellness.',
      copay: '$20 with Insurance',
      selfPay: '$125 self-pay',
      duration: '40 min'
    },
    {
      id: '02',
      title: 'Cardiovascular & 12-Lead ECG Suite',
      category: 'diagnostics',
      icon: HeartPulse,
      description: 'Advanced resting & stress ECG, Holter 24h monitoring, coronary calcium score referral, and hypertension management.',
      copay: '$30 with Insurance',
      selfPay: '$150 self-pay',
      duration: '45 min'
    },
    {
      id: '03',
      title: 'Pediatrics & Adolescent Medicine',
      category: 'primary',
      icon: Baby,
      description: 'Gentle, compassionate child health from infant wellness checks and CDC-scheduled immunizations to adolescent growth.',
      copay: '$20 with Insurance',
      selfPay: '$110 self-pay',
      duration: '35 min'
    },
    {
      id: '04',
      title: "Women's Specialized Health & Longevity",
      category: 'primary',
      icon: Sparkles,
      description: 'Preventive gynecological health, hormonal balancing, prenatal consultations, and cervical & breast health screenings.',
      copay: '$25 with Insurance',
      selfPay: '$140 self-pay',
      duration: '45 min'
    },
    {
      id: '05',
      title: 'Digital 3T MRI & High-Definition Ultrasound',
      category: 'diagnostics',
      icon: Scan,
      description: 'High-field magnetic resonance and acoustic beamforming ultrasound for vascular, thyroid, and soft tissue analysis.',
      copay: '$35 with Insurance',
      selfPay: '$195 self-pay',
      duration: '30 min'
    },
    {
      id: '06',
      title: 'Automated Rapid Biomarker Lab Panels',
      category: 'diagnostics',
      icon: Dna,
      description: 'Same-hour comprehensive metabolic panels, lipid fractionation, thyroid panels, and inflammation biomarker testing.',
      copay: '$15 with Insurance',
      selfPay: '$95 self-pay',
      duration: 'Same-day'
    },
    {
      id: '07',
      title: 'Executive Comprehensive Annual Physical',
      category: 'longevity',
      icon: Award,
      description: 'The ultimate 60-minute head-to-toe clinical assessment with 40+ biomarkers, resting ECG, and personalized health roadmap.',
      copay: 'Covered Wellness',
      selfPay: '$295 self-pay',
      duration: '60 min'
    },
    {
      id: '08',
      title: '24/7 Urgent Care & Telehealth Concierge',
      category: 'primary',
      icon: Activity,
      description: 'Immediate treatment for acute infections, minor injuries, fever, and instant electronic prescription delivery.',
      copay: '$20 with Insurance',
      selfPay: '$99 self-pay',
      duration: 'Instant'
    }
  ];

  const filtered = filter === 'all' 
    ? services 
    : services.filter(s => s.category === filter);

  return (
    <section id="services" className="w-full px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto py-12 sm:py-16">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span>Comprehensive Care Programs</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#030b1e] tracking-tight">
            Specialized Medical Departments
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1 bg-slate-100 p-1.5 rounded-full border border-slate-200 overflow-x-auto max-w-full">
          <button 
            onClick={() => setFilter('all')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${filter === 'all' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
          >
            All Programs ({services.length})
          </button>
          <button 
            onClick={() => setFilter('primary')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${filter === 'primary' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
          >
            Primary Care
          </button>
          <button 
            onClick={() => setFilter('diagnostics')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${filter === 'diagnostics' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
          >
            Diagnostics &amp; Lab
          </button>
          <button 
            onClick={() => setFilter('longevity')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${filter === 'longevity' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
          >
            Longevity &amp; Executive
          </button>
        </div>
      </div>

      {/* 8 Care Program Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((s) => {
          const IconComponent = s.icon;
          return (
            <div 
              key={s.id}
              className="bg-white rounded-[32px] p-6 border border-slate-200/90 shadow-xs luxury-hover-card flex flex-col justify-between group"
            >
              <div>
                {/* Card Top */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-light text-slate-300 font-serif select-none">{s.id}</span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-500 bg-slate-50 px-2.5 py-0.5 rounded-full border border-slate-100">
                    <Clock className="w-3 h-3 text-blue-500" />
                    {s.duration}
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xs">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#030b1e] leading-snug group-hover:text-blue-600 transition-colors">
                    {s.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  {s.description}
                </p>
              </div>

              {/* Pricing & Booking Trigger */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-extrabold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                    {s.copay}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">
                    {s.selfPay}
                  </span>
                </div>

                <button 
                  onClick={() => onSelectService(s.title)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-50 group-hover:bg-blue-600 group-hover:text-white text-slate-700 text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs group-hover:shadow-md group-hover:shadow-blue-500/20"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
};
