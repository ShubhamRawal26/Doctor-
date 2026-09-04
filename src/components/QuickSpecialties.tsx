import React from 'react';
import { Stethoscope, HeartPulse, Baby, Sparkles, Scan, Dna, ArrowRight, ShieldCheck } from 'lucide-react';

interface QuickSpecialtiesProps {
  onSelectSpecialty: (specialtyName: string) => void;
}

export const QuickSpecialties: React.FC<QuickSpecialtiesProps> = ({ onSelectSpecialty }) => {
  const specialties = [
    {
      id: 'primary',
      name: 'Primary & Family Care',
      icon: Stethoscope,
      badge: 'Comprehensive',
      desc: 'Annual wellness checkups, chronic disease management, blood pressure, and preventive health plans.',
      popular: 'Metabolic & Diabetes Care, Annual Physicals'
    },
    {
      id: 'cardiology',
      name: 'Cardiology & Heart Center',
      icon: HeartPulse,
      badge: 'Top Ranked',
      desc: '12-Lead ECG, 24h Holter monitoring, hypertension triage, echocardiograms, and coronary prevention.',
      popular: 'Chest Pain Evaluation, Arrhythmia Triage'
    },
    {
      id: 'pediatrics',
      name: 'Pediatrics & Infant Care',
      icon: Baby,
      badge: 'Family Favorite',
      desc: 'Infant development milestones, newborn care, CDC vaccinations, and childhood infection treatment.',
      popular: 'Same-Day Fever Care, Vaccine Consults'
    },
    {
      id: 'womens-health',
      name: "Women’s Health & Longevity",
      icon: Sparkles,
      badge: 'Dedicated Suite',
      desc: 'Preventive gynecological examinations, prenatal support, hormonal balance, and bone density scans.',
      popular: 'Hormonal Wellness, Cancer Screening'
    },
    {
      id: 'radiology',
      name: '3T MRI & Digital Ultrasound',
      icon: Scan,
      badge: 'High-Field 4K',
      desc: 'Advanced magnetic resonance imaging, acoustic beamforming sonography, and fast radiology reports.',
      popular: 'Soft Tissue MRI, Thyroid Sonography'
    },
    {
      id: 'lab',
      name: 'Same-Day Digital Lab',
      icon: Dna,
      badge: '60-Min Results',
      desc: 'Automated hematology, full lipid panels, thyroid panels, and rapid biomarker results delivered online.',
      popular: 'Complete Blood Count, HbA1c Panels'
    }
  ];

  return (
    <section id="specialties" className="w-full px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto py-12 sm:py-16">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <div className="text-xs font-extrabold uppercase tracking-wider text-blue-600 mb-2 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4" />
            <span>Clinical Departments</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0b152d] tracking-tight">
            Top Specialized Programs
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 max-w-md">
          Explore our primary care and surgical specialties. Choose a department to view available physicians and book instantly.
        </p>
      </div>

      {/* 6 Specialty Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {specialties.map((item) => {
          const IconComponent = item.icon;
          return (
            <div 
              key={item.id}
              className="bg-white rounded-[32px] p-6 border border-slate-200/90 shadow-2xs spring-hover flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#0b152d] group-hover:text-blue-600 transition-colors mb-2">
                  {item.name}
                </h3>

                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  {item.desc}
                </p>

                <div className="text-[11px] text-slate-400 bg-slate-50 p-2.5 rounded-xl border border-slate-100 mb-6">
                  <strong className="text-slate-700">Common:</strong> {item.popular}
                </div>
              </div>

              <button 
                onClick={() => onSelectSpecialty(item.name)}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-50 group-hover:bg-blue-600 group-hover:text-white text-slate-700 text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs group-hover:shadow-md group-hover:shadow-blue-600/20"
              >
                <span>Book {item.name.split(' ')[0]} Care</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          );
        })}
      </div>

    </section>
  );
};
