import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const SimpleFAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Do you accept commercial insurance and Medicare?',
      a: 'Yes, we are in-network with Blue Cross Blue Shield, Aetna, UnitedHealthcare, Cigna, Medicare Part B & Advantage, Humana, and major commercial health plans. We also accept direct HSA/FSA payments with instant itemized reimbursement receipts.'
    },
    {
      q: 'How quickly can I see a doctor today?',
      a: 'In-person same-day appointments are available with average wait times under 8 minutes. For 24/7 video telehealth, you can typically connect with a board-certified physician in under 5 minutes.'
    },
    {
      q: 'What diagnostic testing is performed on-site?',
      a: 'We perform 12-lead resting and stress ECG, high-field 3T MRI scans, acoustic 4D ultrasound, pulmonary spirometry, and automated blood/biomarker lab panels with same-day digital report delivery.'
    },
    {
      q: 'How do I receive test results and electronic prescriptions?',
      a: 'All diagnostic reports, high-resolution imaging scans, and doctor treatment notes are uploaded directly to your secure, encrypted patient portal within hours. Electronic prescriptions are automatically routed to your chosen local pharmacy.'
    },
    {
      q: 'Are follow-up messages with my doctor free of charge?',
      a: 'Yes. Every in-person and virtual consultation includes 7 days of unlimited direct messaging with your attending physician through our encrypted patient app.'
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
          <div className="text-xs font-extrabold uppercase tracking-wider text-blue-600 mb-2 flex items-center justify-center gap-1.5">
            <HelpCircle className="w-4 h-4" />
            <span>Patient Support</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0b152d] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto mt-2">
            Clear, upfront information about appointments, insurance, and medical diagnostics.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs transition-all"
              >
                <button 
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#0b152d] hover:text-blue-600 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-blue-50 text-blue-600' : 'text-slate-500'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-slate-500 leading-relaxed border-t border-slate-50 animate-in fade-in duration-150">
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
