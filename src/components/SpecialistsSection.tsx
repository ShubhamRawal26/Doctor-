import React from 'react';
import { CalendarPlus, Star, Award, Stethoscope, ChevronRight } from 'lucide-react';

interface SpecialistsSectionProps {
  onSelectDoctor: (doctorName: string) => void;
}

export const SpecialistsSection: React.FC<SpecialistsSectionProps> = ({ onSelectDoctor }) => {
  const doctors = [
    {
      name: 'Dr. Maria Kovalenko',
      role: 'Lead Physician & Internal Medicine',
      experience: '14+ Years Experience',
      education: 'MD, Charité University Berlin Fellow',
      rating: '4.98',
      reviews: '2,400+ reviews',
      image: '/hero-doctor.png',
      specialty: 'Metabolic Disorders & Preventive Health',
      languages: 'English, Ukrainian, German'
    },
    {
      name: 'Dr. Alexander Chen',
      role: 'Senior Consultant Cardiologist',
      experience: '16+ Years Experience',
      education: 'MD, Cardiology Board Certified',
      rating: '4.95',
      reviews: '1,850+ reviews',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80',
      specialty: 'Preventive Cardiology & Hypertension',
      languages: 'English, Ukrainian'
    },
    {
      name: 'Dr. Sarah Jensen',
      role: 'Head of Pediatrics & Child Care',
      experience: '12+ Years Experience',
      education: 'MD Pediatrics, Oxford University Fellow',
      rating: '4.99',
      reviews: '3,100+ reviews',
      image: 'https://images.unsplash.com/photo-1594824813501-48c9735d491f?auto=format&fit=crop&w=400&q=80',
      specialty: 'Newborn Development & Immunizations',
      languages: 'English, Ukrainian, Polish'
    },
    {
      name: 'Dr. Viktor Novak',
      role: 'Director of Diagnostic Imaging',
      experience: '18+ Years Experience',
      education: 'PhD Radiology, European Board of Diagnostics',
      rating: '4.97',
      reviews: '1,620+ reviews',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80',
      specialty: 'High-Resolution 4D Ultrasound & MRI',
      languages: 'English, Ukrainian'
    }
  ];

  return (
    <section id="specialists" className="w-full px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto py-12 sm:py-16">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            <Award className="w-4 h-4" />
            <span>World-Class Medical Board</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1024] tracking-tight">
            Meet Our Senior Specialists
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 max-w-md leading-relaxed">
          Board-certified physicians with over 15 years of clinical practice in top European academic medical centers.
        </p>
      </div>

      {/* Doctor Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {doctors.map((doc, idx) => (
          <div 
            key={idx}
            className="bg-white rounded-[28px] border border-slate-200/80 p-5 shadow-xs apple-card-hover flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Top Badge */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-1 bg-amber-50 text-amber-700 px-2.5 py-0.5 rounded-full text-[11px] font-bold">
                <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                <span>{doc.rating}</span>
                <span className="text-slate-400 font-normal">({doc.reviews})</span>
              </div>
              <span className="text-[10px] font-semibold text-slate-400 bg-slate-50 px-2 py-0.5 rounded-md">
                {doc.languages}
              </span>
            </div>

            {/* Doctor Portrait Frame */}
            <div className="relative w-full h-56 rounded-2xl overflow-hidden bg-gradient-to-t from-blue-50 to-slate-50 mb-4 flex items-end justify-center p-2">
              <img 
                src={doc.image} 
                alt={doc.name} 
                className="max-h-full w-auto object-contain group-hover:scale-105 transition-transform duration-500 select-none"
              />
            </div>

            {/* Doctor Details */}
            <div className="space-y-1.5 mb-5">
              <h3 className="text-base font-bold text-[#0a1024] tracking-tight group-hover:text-blue-600 transition-colors">
                {doc.name}
              </h3>
              <div className="text-xs font-semibold text-blue-600">
                {doc.role}
              </div>
              <div className="text-[11px] text-slate-400 font-medium">
                {doc.education} &bull; {doc.experience}
              </div>
              <p className="text-xs text-slate-500 pt-1 leading-relaxed">
                {doc.specialty}
              </p>
            </div>

            {/* Book Doctor Action */}
            <button 
              onClick={() => onSelectDoctor(doc.name)}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-50 group-hover:bg-blue-600 group-hover:text-white text-slate-700 text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs group-hover:shadow-md group-hover:shadow-blue-500/20"
            >
              <CalendarPlus className="w-3.5 h-3.5" />
              <span>Book Consultation</span>
            </button>
          </div>
        ))}
      </div>

    </section>
  );
};
