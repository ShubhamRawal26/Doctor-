import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, CheckCircle2, Quote } from 'lucide-react';

export const TestimonialsSlider: React.FC = () => {
  const [index, setIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      name: 'Ramesh Kumar',
      location: 'New Delhi &bull; Diabetes Management',
      text: 'Dr. Maria and the SalvaMedic clinic team completely turned around my health. My HbA1c dropped from 9.2 to 6.4 in just 2 months with personalized nutrition and precise medication adjustment.',
      stars: 5,
      avatar: 'RK',
      verified: true
    },
    {
      id: 2,
      name: 'Olena Petrenko',
      location: 'Lviv &bull; Preventive Cardiology',
      text: 'The AI ECG and heart ultrasound were conducted in under 20 minutes with zero stress. Dr. Alexander explained every metric in clear terms without pushing unnecessary drugs. Outstanding medical service.',
      stars: 5,
      avatar: 'OP',
      verified: true
    },
    {
      id: 3,
      name: 'Priya Sharma',
      location: 'Noida &bull; Pediatric Care',
      text: 'When my 5-year-old had an acute night fever, Dr. Sarah Jensen attended to us promptly. Her warm, gentle approach kept my daughter completely calm. Highly recommend for every family.',
      stars: 5,
      avatar: 'PS',
      verified: true
    },
    {
      id: 4,
      name: 'Andrii Shevchenko',
      location: 'Kyiv &bull; Full-Body Diagnostics',
      text: 'Booking through WhatsApp took 2 minutes. The digital lab had my blood work and ultrasound results ready by evening with structured doctor notes in the patient portal. 5 stars all the way.',
      stars: 5,
      avatar: 'AS',
      verified: true
    },
    {
      id: 5,
      name: 'Sunita Gupta',
      location: 'Faridabad &bull; Women’s Health',
      text: 'Comprehensive, respectful, and evidence-based care. The clinic is spotless, equipment is modern, and staff remembers each patient personally. Best clinic in the region.',
      stars: 5,
      avatar: 'SG',
      verified: true
    },
    {
      id: 6,
      name: 'Viktor Melnyk',
      location: 'Lviv &bull; Respiratory & Allergy',
      text: 'Chronic seasonal bronchitis was debilitating for years. The targeted inhalation therapy recommended here cured the persistent cough in 2 weeks. Life-changing care.',
      stars: 5,
      avatar: 'VM',
      verified: true
    }
  ];

  const maxIndex = reviews.length - 1;

  const nextReview = () => {
    setIndex((prev) => (prev >= maxIndex - 1 ? 0 : prev + 1));
  };

  const prevReview = () => {
    setIndex((prev) => (prev <= 0 ? maxIndex - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextReview, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="reviews" className="w-full px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto py-12 sm:py-16">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Verified Patient Experiences</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1024] tracking-tight">
            What Our Patients Say
          </h2>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-2">
          <button 
            onClick={prevReview}
            className="w-10 h-10 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-center shadow-xs transition-transform active:scale-95 cursor-pointer"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={nextReview}
            className="w-10 h-10 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-center shadow-xs transition-transform active:scale-95 cursor-pointer"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Testimonials Carousel Track */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.slice(index, index + 3).map((r) => (
          <div 
            key={r.id}
            className="bg-white rounded-[28px] p-6 sm:p-7 border border-slate-200/80 shadow-xs apple-card-hover flex flex-col justify-between"
          >
            <div>
              {/* Star Rating */}
              <div className="flex items-center gap-1 text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed italic mb-6">
                &ldquo;{r.text}&rdquo;
              </p>
            </div>

            {/* Author Info */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold text-xs flex items-center justify-center shadow-sm">
                {r.avatar}
              </div>
              <div>
                <div className="text-sm font-bold text-[#0a1024] flex items-center gap-1.5">
                  <span>{r.name}</span>
                  {r.verified && (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500/20" />
                  )}
                </div>
                <div className="text-[11px] text-slate-400" dangerouslySetInnerHTML={{ __html: r.location }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
