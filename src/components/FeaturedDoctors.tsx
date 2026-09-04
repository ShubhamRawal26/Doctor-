import React from 'react';
import { Star, Calendar, Award, ChevronRight, CheckCircle2 } from 'lucide-react';

interface FeaturedDoctorsProps {
  onSelectDoctor: (doctorName: string) => void;
}

export const FeaturedDoctors: React.FC<FeaturedDoctorsProps> = ({ onSelectDoctor }) => {
  const doctors = [
    {
      name: 'Dr. Maria Kovalenko, MD',
      role: 'Lead Attending & Internal Medicine',
      credentials: 'Charité & Berlin Medical Fellow',
      experience: '14+ Years Practice',
      rating: '4.98',
      reviews: '2,400+ reviews',
      slot: 'Today 11:30 AM',
      image: '/hero-doctor.png',
      specialty: 'Metabolic Longevity & Preventive Health'
    },
    {
      name: 'Dr. Alexander Chen, MD',
      role: 'Chief of Interventional Cardiology',
      credentials: 'Board Certified Cardiologist',
      experience: '16+ Years Practice',
      rating: '4.95',
      reviews: '1,850+ reviews',
      slot: 'Today 02:00 PM',
      image: '/doc-chen.jpg',
      specialty: 'Preventive Cardiology & Arrhythmia'
    },
    {
      name: 'Dr. Sarah Jensen, MD',
      role: 'Head of Pediatric Medicine',
      credentials: 'Oxford University Fellow',
      experience: '12+ Years Practice',
      rating: '4.99',
      reviews: '3,100+ reviews',
      slot: 'Tomorrow 09:15 AM',
      image: '/doc-jensen.jpg',
      specialty: 'Infant Development & Immunization'
    },
    {
      name: 'Dr. Viktor Novak, MD, PhD',
      role: 'Director of Radiology & MRI Imaging',
      credentials: 'European Board of Radiology',
      experience: '18+ Years Practice',
      rating: '4.97',
      reviews: '1,620+ reviews',
      slot: 'Today 04:30 PM',
      image: '/doc-novak.jpg',
      specialty: 'High-Field 3T MRI & Ultrasound'
    }
  ];

  return (
    <section id="doctors" className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 sm:py-16">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <div className="text-xs font-extrabold uppercase tracking-wider text-blue-600 mb-2 flex items-center gap-1.5">
            <Award className="w-4 h-4" />
            <span>Senior Medical Board</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0b152d] tracking-tight">
            Top-Ranked Attending Physicians
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 max-w-md leading-relaxed">
          Board-certified clinicians from premier medical institutions dedicated to your individualized care plan.
        </p>
      </div>

      {/* 4 Doctor Cards with 4K Generated Portraits and Clean Spacing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {doctors.map((doc, idx) => (
          <div 
            key={idx}
            className="bg-white rounded-[32px] p-5 sm:p-6 border border-slate-200/90 shadow-2xs spring-hover flex flex-col justify-between group"
          >
            {/* Top Rating & Next Slot */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-1 bg-amber-50 text-amber-700 px-2.5 py-0.5 rounded-full text-[11px] font-bold">
                <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                <span>{doc.rating}</span>
                <span className="text-slate-400 font-normal">({doc.reviews})</span>
              </div>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>Open Slot</span>
              </span>
            </div>

            {/* 4K Doctor Portrait Frame */}
            <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-slate-50 mb-4 flex items-end justify-center p-2">
              <img 
                src={doc.image} 
                alt={doc.name} 
                className="max-h-full w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Details */}
            <div className="space-y-1 mb-5">
              <h3 className="text-base font-bold text-[#0b152d] group-hover:text-blue-600 transition-colors">
                {doc.name}
              </h3>
              <div className="text-xs font-semibold text-blue-600">
                {doc.role}
              </div>
              <div className="text-[11px] text-slate-400">
                {doc.credentials} &bull; {doc.experience}
              </div>
              <p className="text-xs text-slate-500 pt-1 leading-relaxed">
                {doc.specialty}
              </p>
            </div>

            {/* Action */}
            <button 
              onClick={() => onSelectDoctor(doc.name)}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-50 group-hover:bg-blue-600 group-hover:text-white text-slate-700 text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs group-hover:shadow-md group-hover:shadow-blue-600/20"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book with {doc.name.split(' ')[1]}</span>
            </button>
          </div>
        ))}
      </div>

    </section>
  );
};
