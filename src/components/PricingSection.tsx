import React, { useState } from 'react';
import { Check, ShieldCheck, Zap, Sparkles, ArrowRight } from 'lucide-react';

interface PricingSectionProps {
  onOpenBooking: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenBooking }) => {
  const [billingMode, setBillingMode] = useState<'insurance' | 'selfpay'>('insurance');

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto py-12 sm:py-16">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
          <ShieldCheck className="w-4 h-4" />
          <span>Transparent Healthcare Economics</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#030b1e] tracking-tight">
          Clear, Upfront Pricing &bull; No Surprise Bills
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-2">
          Whether you use commercial insurance, Medicare, or direct HSA/FSA concierge self-pay, our rates are 100% transparent.
        </p>

        {/* Insurance vs Self-Pay Toggle */}
        <div className="inline-flex items-center bg-slate-100 p-1 rounded-full border border-slate-200 mt-6">
          <button 
            onClick={() => setBillingMode('insurance')}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${billingMode === 'insurance' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
          >
            With In-Network Insurance
          </button>
          <button 
            onClick={() => setBillingMode('selfpay')}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${billingMode === 'selfpay' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
          >
            Self-Pay / Direct Concierge
          </button>
        </div>
      </div>

      {/* 3 Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        
        {/* Tier 1: Primary & Urgent Care */}
        <div className="bg-white rounded-[32px] p-6 sm:p-8 border border-slate-200/90 shadow-xs flex flex-col justify-between luxury-hover-card">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
              On-Demand Visit
            </div>
            <h3 className="text-xl font-bold text-[#030b1e] mb-3">Primary &amp; Urgent Care</h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-6">
              Same-day in-person or virtual consultation with a senior physician for acute symptoms, infections, and refills.
            </p>

            <div className="mb-6 pb-6 border-b border-slate-100">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-[#030b1e]">
                  {billingMode === 'insurance' ? '$20' : '$125'}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {billingMode === 'insurance' ? 'Typical In-Network Copay' : 'flat self-pay fee'}
                </span>
              </div>
            </div>

            <ul className="space-y-3 text-xs text-slate-600 mb-8">
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>30-Minute comprehensive physician exam</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>On-site rapid diagnostic testing</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Instant electronic prescription routing</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>7-Day post-visit physician messaging</span>
              </li>
            </ul>
          </div>

          <button 
            onClick={onOpenBooking}
            className="w-full py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors cursor-pointer"
          >
            Book Standard Visit
          </button>
        </div>

        {/* Tier 2: Executive Annual Longevity Assessment (Featured) */}
        <div className="bg-[#030b1e] text-white rounded-[32px] p-6 sm:p-8 border border-slate-800 shadow-xl flex flex-col justify-between relative overflow-hidden luxury-hover-card">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl pointer-events-none"></div>
          
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                Flagship Program
              </span>
              <span className="text-[10px] font-extrabold uppercase tracking-wider bg-blue-500 text-white px-2.5 py-0.5 rounded-full">
                Most Popular
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-3">Executive Health Physical</h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-6">
              Complete full-body longevity assessment, advanced biomarker panel, resting ECG, and AI cardiovascular risk mapping.
            </p>

            <div className="mb-6 pb-6 border-b border-white/10">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-white">
                  {billingMode === 'insurance' ? '$0 – $50' : '$295'}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {billingMode === 'insurance' ? 'Covered under Annual Wellness' : 'one-time complete'}
                </span>
              </div>
            </div>

            <ul className="space-y-3 text-xs text-slate-300 mb-8">
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>60-Minute 1-on-1 Senior Physician Deep-Dive</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>12-Lead ECG &amp; 40+ Biomarker Blood Panel</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Metabolic health &amp; biological age analysis</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Personalized 12-month preventive health roadmap</span>
              </li>
            </ul>
          </div>

          <button 
            onClick={onOpenBooking}
            className="w-full py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold text-xs shadow-lg shadow-blue-500/30 transition-all cursor-pointer"
          >
            Schedule Executive Physical
          </button>
        </div>

        {/* Tier 3: All-Inclusive Concierge Membership */}
        <div className="bg-white rounded-[32px] p-6 sm:p-8 border border-slate-200/90 shadow-xs flex flex-col justify-between luxury-hover-card">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-purple-600 mb-1">
              Dedicated Physician
            </div>
            <h3 className="text-xl font-bold text-[#030b1e] mb-3">SalvaMedic Concierge</h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-6">
              Year-round continuous primary care with zero waiting times, priority 24/7 telehealth, and dedicated doctor direct-line.
            </p>

            <div className="mb-6 pb-6 border-b border-slate-100">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-[#030b1e]">$99</span>
                <span className="text-xs text-slate-400 font-medium">/ month</span>
              </div>
            </div>

            <ul className="space-y-3 text-xs text-slate-600 mb-8">
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Unlimited 24/7 video telehealth &amp; messaging</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Guaranteed same-day in-person clinic slots</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Included Annual Executive Comprehensive Assessment</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Direct private WhatsApp line to lead doctor</span>
              </li>
            </ul>
          </div>

          <button 
            onClick={onOpenBooking}
            className="w-full py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors cursor-pointer"
          >
            Apply for Concierge Care
          </button>
        </div>

      </div>

    </section>
  );
};
