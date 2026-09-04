import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';

export const PatientStories: React.FC = () => {
  const stories = [
    {
      name: 'Ramesh Kumar',
      tag: 'Metabolic Longevity Care',
      text: 'Dr. Maria is hands down the most thorough physician I have ever had. She spent 45 minutes walking through my lipid fractionation and insulin metrics. My HbA1c went from 8.8 to 6.2 in 90 days.',
      rating: 5,
      avatar: 'RK'
    },
    {
      name: 'Olena Petrenko',
      tag: 'Cardiology & 12-Lead ECG',
      text: 'Zero waiting room chaos. I arrived at 10:15 AM, was in the exam room by 10:18 AM, and had my heart ultrasound and ECG completed by Dr. Alexander Chen within 30 minutes with clear explanations.',
      rating: 5,
      avatar: 'OP'
    },
    {
      name: 'Priya Sharma',
      tag: 'Pediatric Child Care',
      text: 'When my 4-year-old developed high fever and wheezing, we booked a same-day slot. Dr. Sarah Jensen was extraordinarily gentle and caring. The clinic is spotless and kid-friendly.',
      rating: 5,
      avatar: 'PS'
    },
    {
      name: 'Andrii Shevchenko',
      tag: 'Full-Body Diagnostic MRI',
      text: 'The 3T MRI suite was spacious, quiet, and comfortable. Dr. Viktor Novak had the diagnostic report and high-res imaging sent to my patient app the very same afternoon. Truly world-class.',
      rating: 5,
      avatar: 'AS'
    }
  ];

  return (
    <section id="reviews" className="w-full px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto py-12 sm:py-16">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <div className="text-xs font-extrabold uppercase tracking-wider text-blue-600 mb-2 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Verified Patient Outcomes</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0b152d] tracking-tight">
            Patient Stories &amp; Experiences
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 max-w-md">
          Read direct feedback from patients who have trusted SalvaMedic for their primary and specialized medical care.
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stories.map((s, idx) => (
          <div 
            key={idx}
            className="bg-white rounded-[32px] p-6 border border-slate-200/90 shadow-2xs spring-hover flex flex-col justify-between"
          >
            <div>
              {/* Stars */}
              <div className="flex text-amber-400 gap-0.5 mb-3">
                {[...Array(s.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <div className="text-[11px] font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full w-fit mb-3">
                {s.tag}
              </div>

              <p className="text-xs text-slate-600 leading-relaxed italic mb-6">
                &ldquo;{s.text}&rdquo;
              </p>
            </div>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
              <div className="w-9 h-9 rounded-full bg-blue-600 text-white font-extrabold text-xs flex items-center justify-center shadow-xs">
                {s.avatar}
              </div>
              <div>
                <div className="text-xs font-bold text-[#0b152d] flex items-center gap-1">
                  <span>{s.name}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                </div>
                <div className="text-[10px] text-slate-400">Verified Patient &bull; 2026</div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
