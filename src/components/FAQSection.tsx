import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Are walk-in consultations accepted or is an appointment required?',
      a: 'We welcome emergency walk-ins during clinic hours. However, to guarantee zero waiting time, we strongly encourage scheduling an appointment online or via WhatsApp. Scheduled patients are given immediate priority.'
    },
    {
      q: 'How does follow-up consultation work for lab test reports?',
      a: 'Reports for tests prescribed during your visit are uploaded directly to your encrypted patient portal within 12 hours. Dr. Maria and our senior specialists provide digital review notes and prescription adjustments without any additional consultation fee within 7 days.'
    },
    {
      q: 'What diagnostic equipment and imaging modalities are available on-site?',
      a: 'Our facility is fully equipped with AI-powered 12-lead ECG, high-resolution 4D digital ultrasound, automatic hematology and biochemistry analyzers, pulmonary spirometry, and non-invasive cardiovascular monitoring.'
    },
    {
      q: 'What payment methods and private health insurance are accepted?',
      a: 'We accept all major credit/debit cards, Apple Pay, Google Pay, direct bank transfers, and cash. Official itemized medical invoices with licensed physician registration stamps are issued for insurance reimbursement.'
    },
    {
      q: 'Are online video teleconsultations available for outstation patients?',
      a: 'Yes, secure video consultations are available via WhatsApp or our patient portal for routine checkups, report discussions, and prescription renewals. Digital e-prescriptions are sent immediately after the call.'
    },
    {
      q: 'What safety and sterilization standards does SalvaMedic adhere to?',
      a: 'We strictly follow European Union and WHO clinical hygiene guidelines with HEPA air filtration in all examination rooms, autoclave instrument sterilization, and single-use diagnostic consumables.'
    }
  ];

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="w-full px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto py-12 sm:py-16">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1024] tracking-tight">
            Everything You Need to Know
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto mt-2">
            Clear, transparent answers about appointments, medical diagnostics, insurance, and follow-ups.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-2xs transition-all"
              >
                <button 
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#0a1024] hover:text-blue-600 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-blue-50 text-blue-600' : 'text-slate-500'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-0 text-xs sm:text-sm text-slate-500 leading-relaxed border-t border-slate-50 animate-in fade-in slide-in-from-top-1 duration-200">
                    <p className="pt-3">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
