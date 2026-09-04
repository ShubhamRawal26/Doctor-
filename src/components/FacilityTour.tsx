import React, { useState } from 'react';
import { Camera, Eye, X, ChevronRight, Building2 } from 'lucide-react';

interface FacilityTourProps {
  onOpenBooking: () => void;
}

export const FacilityTour: React.FC<FacilityTourProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'diagnostics' | 'surgical' | 'suites'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const spaces = [
    {
      id: 1,
      title: 'Executive Reception & Patient Lounge',
      category: 'suites',
      department: 'Main Entrance',
      image: '/lobby-4k.jpg',
      desc: 'Quiet, acoustically optimized waiting lounge designed for calm, zero-stress check-in.'
    },
    {
      id: 2,
      title: 'AI 3T Magnetic Resonance Imaging (MRI)',
      category: 'diagnostics',
      department: 'Radiology Center',
      image: '/mri-4k.jpg',
      desc: 'Ultra-clear cross-sectional diagnostic imaging with wide-bore patient comfort design.'
    },
    {
      id: 3,
      title: 'Ultra-Clean Robotic Surgical Suite',
      category: 'surgical',
      department: 'Operating Wing',
      image: '/operating-4k.jpg',
      desc: 'Laminar positive-pressure operating room engineered for minimally invasive procedures.'
    },
    {
      id: 4,
      title: 'Automated Digital Hematology & Blood Lab',
      category: 'diagnostics',
      department: 'Biochemistry Lab',
      image: '/lab-4k.jpg',
      desc: 'Robotic diagnostic testing pipelines delivering accurate blood and hormone panels in 60 mins.'
    },
    {
      id: 5,
      title: 'Private Inpatient Recovery Room',
      category: 'suites',
      department: 'Post-Care Wing',
      image: '/inpatient-4k.jpg',
      desc: 'Comfortable private recovery suites equipped with 24/7 telemetry monitoring.'
    },
    {
      id: 6,
      title: 'Pediatric Development & Play Room',
      category: 'suites',
      department: 'Child Care',
      image: '/pediatric-4k.jpg',
      desc: 'Warm, cheerful environment created to eliminate white-coat fear for children.'
    },
    {
      id: 7,
      title: 'Physician Consultation & Exam Office',
      category: 'suites',
      department: 'Doctor Suites',
      image: '/consultation-4k.jpg',
      desc: 'Confidential discussion room for comprehensive diagnostic evaluation and health mapping.'
    },
    {
      id: 8,
      title: 'Digital High-Definition Ultrasound Suite',
      category: 'diagnostics',
      department: 'Sonography',
      image: '/mri-4k.jpg',
      desc: 'High-definition soundwave imaging for prenatal, thyroid, abdominal, and vascular evaluation.'
    }
  ];

  const filtered = activeCategory === 'all' 
    ? spaces 
    : spaces.filter(s => s.category === activeCategory);

  return (
    <section id="facilities" className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 sm:py-16">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <div className="text-xs font-extrabold uppercase tracking-wider text-blue-600 mb-2 flex items-center gap-1.5">
            <Camera className="w-4 h-4" />
            <span>4K Virtual Tour &bull; Inside SalvaMedic</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0b152d] tracking-tight">
            Inside Our Medical Facility
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-full border border-slate-200 overflow-x-auto max-w-full">
          <button 
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${activeCategory === 'all' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
          >
            All Spaces ({spaces.length})
          </button>
          <button 
            onClick={() => setActiveCategory('diagnostics')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${activeCategory === 'diagnostics' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
          >
            Diagnostics &amp; Lab
          </button>
          <button 
            onClick={() => setActiveCategory('surgical')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${activeCategory === 'surgical' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
          >
            Surgical Units
          </button>
          <button 
            onClick={() => setActiveCategory('suites')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${activeCategory === 'suites' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
          >
            Patient Lounges
          </button>
        </div>
      </div>

      {/* 4K Facility Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((item, idx) => (
          <div 
            key={item.id}
            onClick={() => setLightboxIndex(idx)}
            className="group bg-white rounded-[28px] overflow-hidden border border-slate-200/90 shadow-2xs spring-hover cursor-pointer flex flex-col justify-between"
          >
            {/* 4K Image Container */}
            <div className="relative h-52 w-full overflow-hidden bg-slate-100">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent flex items-end p-3.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-black/40 backdrop-blur-xs px-2.5 py-0.5 rounded-md">
                  {item.department}
                </span>
              </div>
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 text-slate-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-xs">
                <Eye className="w-4 h-4" />
              </div>
            </div>

            {/* Content Details */}
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold text-[#0b152d] group-hover:text-blue-600 transition-colors leading-snug mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-blue-600">
                <span>View Full-HD Tour</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-150"
          onClick={() => setLightboxIndex(null)}
        >
          <div 
            className="relative max-w-3xl w-full bg-slate-900 rounded-[32px] overflow-hidden shadow-2xl border border-slate-800 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setLightboxIndex(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative h-80 sm:h-96 w-full bg-black">
              <img 
                src={filtered[lightboxIndex].image} 
                alt={filtered[lightboxIndex].title} 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                  {filtered[lightboxIndex].department}
                </span>
                <h3 className="text-lg font-bold text-white mt-0.5">
                  {filtered[lightboxIndex].title}
                </h3>
                <p className="text-xs text-slate-300 mt-1 max-w-md">
                  {filtered[lightboxIndex].desc}
                </p>
              </div>

              <button 
                onClick={() => { setLightboxIndex(null); onOpenBooking(); }}
                className="btn-primary py-2.5 px-5 rounded-full text-white text-xs font-bold shrink-0 cursor-pointer"
              >
                Schedule Visit Here
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
