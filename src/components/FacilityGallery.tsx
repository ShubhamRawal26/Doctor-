import React, { useState } from 'react';
import { Building2, Eye, X, ChevronLeft, ChevronRight, Sparkles, ShieldCheck, Camera } from 'lucide-react';

interface FacilityGalleryProps {
  onOpenBooking: () => void;
}

export const FacilityGallery: React.FC<FacilityGalleryProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'diagnostics' | 'surgical' | 'inpatient'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const facilities = [
    {
      id: 1,
      title: 'Executive Reception & Patient Lounge',
      category: 'inpatient',
      department: 'Main Wing',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=85',
      desc: 'Spacious, acoustically isolated waiting lounge designed for calm, zero-stress registration.'
    },
    {
      id: 2,
      title: 'AI 3T Digital MRI & Imaging Suite',
      category: 'diagnostics',
      department: 'Radiology Center',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=85',
      desc: 'High-field magnetic resonance scanner with reduced scan times and open-bore geometry.'
    },
    {
      id: 3,
      title: 'Ultra-Clean Robotic Surgical Theater',
      category: 'surgical',
      department: 'Surgical Unit',
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=85',
      desc: 'Laminar airflow positive-pressure operating room equipped for minimally invasive surgeries.'
    },
    {
      id: 4,
      title: 'Automated Digital Hematology Lab',
      category: 'diagnostics',
      department: 'Biochemistry Lab',
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=85',
      desc: 'Robotic blood and biomarker testing pipelines delivering verified reports within 60 minutes.'
    },
    {
      id: 5,
      title: 'Private Executive Recovery Suite',
      category: 'inpatient',
      department: 'Post-Care Wing',
      image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=85',
      desc: 'En-suite inpatient recovery rooms with ergonomic smart beds and 24/7 telemetry monitoring.'
    },
    {
      id: 6,
      title: 'Pediatric Development & Play Suite',
      category: 'inpatient',
      department: 'Pediatric Care',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85',
      desc: 'Kid-friendly clinic environment crafted to eliminate fear of medical instruments and visits.'
    },
    {
      id: 7,
      title: '12-Lead Cardiology & ECG Center',
      category: 'diagnostics',
      department: 'Cardiology Station',
      image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=85',
      desc: 'Comprehensive cardiovascular examination room with continuous arrhythmia monitors.'
    },
    {
      id: 8,
      title: 'Senior Physician Consultation Office',
      category: 'inpatient',
      department: 'Doctor Suites',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1200&q=85',
      desc: 'Private, confidential discussion rooms for detailed diagnosis and personalized treatment mapping.'
    },
    {
      id: 9,
      title: 'Automated Hospital Pharmacy',
      category: 'diagnostics',
      department: 'Dispensary',
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1200&q=85',
      desc: 'Temperature-controlled pharmaceutical store ensuring verified genuine medications.'
    },
    {
      id: 10,
      title: 'Sonography & 4D Ultrasound Suite',
      category: 'diagnostics',
      department: 'Ultrasound Dept',
      image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=1200&q=85',
      desc: 'Acoustic beamforming sonography for vascular, thyroid, and prenatal tissue imaging.'
    }
  ];

  const filtered = activeCategory === 'all' 
    ? facilities 
    : facilities.filter(f => f.category === activeCategory);

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto py-12 sm:py-16">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            <Camera className="w-4 h-4" />
            <span>4K Hospital Tour &bull; Inside SalvaMedic</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1024] tracking-tight">
            World-Class Clinical Infrastructure
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 bg-slate-100/90 p-1.5 rounded-full border border-slate-200/80 overflow-x-auto max-w-full">
          <button 
            onClick={() => setActiveCategory('all')}
            className={`px-3.5 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${activeCategory === 'all' ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-500 hover:text-slate-800'}`}
          >
            All Areas ({facilities.length})
          </button>
          <button 
            onClick={() => setActiveCategory('diagnostics')}
            className={`px-3.5 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${activeCategory === 'diagnostics' ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-500 hover:text-slate-800'}`}
          >
            Diagnostics &amp; Lab
          </button>
          <button 
            onClick={() => setActiveCategory('surgical')}
            className={`px-3.5 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${activeCategory === 'surgical' ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-500 hover:text-slate-800'}`}
          >
            Surgical Theaters
          </button>
          <button 
            onClick={() => setActiveCategory('inpatient')}
            className={`px-3.5 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${activeCategory === 'inpatient' ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-500 hover:text-slate-800'}`}
          >
            Patient Suites
          </button>
        </div>
      </div>

      {/* 4K Facility Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((item, idx) => (
          <div 
            key={item.id}
            onClick={() => setLightboxIndex(idx)}
            className="group bg-white rounded-[28px] overflow-hidden border border-slate-200/80 shadow-xs apple-card-hover cursor-pointer flex flex-col justify-between"
          >
            {/* Image Container with Zoom Effect */}
            <div className="relative h-52 w-full overflow-hidden bg-slate-100">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover gallery-zoom"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent flex items-end p-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                  {item.department}
                </span>
              </div>
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-md text-slate-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                <Eye className="w-4 h-4" />
              </div>
            </div>

            {/* Content Details */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-[#0a1024] group-hover:text-blue-600 transition-colors leading-snug mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-blue-600">
                <span>View Full-HD Tour</span>
                <span className="text-slate-400 font-normal">4K Certified</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setLightboxIndex(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-slate-900 rounded-[32px] overflow-hidden shadow-2xl border border-slate-800 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setLightboxIndex(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* High-Res Image Display */}
            <div className="relative h-[450px] w-full bg-black">
              <img 
                src={filtered[lightboxIndex].image} 
                alt={filtered[lightboxIndex].title} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details Bar */}
            <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-slate-900">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                  {filtered[lightboxIndex].department}
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  {filtered[lightboxIndex].title}
                </h3>
                <p className="text-xs text-slate-400 mt-1 max-w-lg">
                  {filtered[lightboxIndex].desc}
                </p>
              </div>

              <button 
                onClick={() => { setLightboxIndex(null); onOpenBooking(); }}
                className="py-3 px-6 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-500/30 transition-all shrink-0 cursor-pointer"
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
