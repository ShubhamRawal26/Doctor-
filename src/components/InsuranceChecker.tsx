import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, ChevronRight, HelpCircle, ArrowRight, Zap, Building } from 'lucide-react';

interface InsuranceCheckerProps {
  onOpenBooking: () => void;
}

export const InsuranceChecker: React.FC<InsuranceCheckerProps> = ({ onOpenBooking }) => {
  const [selectedPlan, setSelectedPlan] = useState('Blue Cross Blue Shield');
  const [verified, setVerified] = useState(true);

  const insurers = [
    { name: 'Blue Cross Blue Shield', tier: 'Tier 1 In-Network', copay: '$20 – $35', desc: '100% covered for preventative & annual executive checkups.' },
    { name: 'Aetna PPO & POS', tier: 'Tier 1 Preferred In-Network', copay: '$25 – $40', desc: 'Full diagnostic lab, 3T MRI, and specialist visits covered.' },
    { name: 'UnitedHealthcare', tier: 'Choice Plus In-Network', copay: '$20 – $30', desc: 'Same-day urgent care and video telehealth pre-authorized.' },
    { name: 'Cigna Open Access', tier: 'National Preferred In-Network', copay: '$25 – $35', desc: 'Comprehensive cardiology, pediatrics, and preventive screening.' },
    { name: 'Medicare Part B & Advantage', tier: 'Full Participating Provider', copay: '$0 – $20', desc: 'Annual wellness exams, digital labs, and chronic care management.' },
    { name: 'Humana Premier', tier: 'In-Network Tier 1', copay: '$20 – $40', desc: 'Diagnostic sonography and specialist consults approved.' },
    { name: 'Direct Concierge Self-Pay', tier: 'Transparent HSA/FSA Eligible', copay: 'No Surprise Fees', desc: 'Flat transparent upfront rates with instant itemized reimbursement receipts.' }
  ];

  const currentInfo = insurers.find(i => i.name === selectedPlan) || insurers[0];

  return (
    <section id="insurance" className="w-full px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto py-10 sm:py-16">
      <div className="bg-gradient-to-r from-blue-900 via-[#0a1936] to-[#030b1e] rounded-[36px] p-6 sm:p-10 lg:p-14 text-white relative overflow-hidden shadow-2xl">
        
        {/* Subtle Ambient Cones */}
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-blue-500/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Heading & Explanation */}
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-3.5 py-1 text-xs font-bold text-blue-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% In-Network Transparency &bull; Zero Surprise Bills</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
              We Accept Most Major <br className="hidden sm:inline" />
              USA Health Insurance Plans
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg">
              SalvaMedic is directly partnered with leading health insurance providers nationwide. Select your carrier below to verify your in-network copay and coverage benefits instantly.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>HSA / FSA Direct Accepted</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Immediate Digital Claim Filing</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Checker Box */}
          <div className="lg:col-span-6 bg-white/10 backdrop-blur-xl border border-white/15 rounded-3xl p-6 sm:p-8 space-y-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-blue-200 mb-2">
                Select Your Insurance Carrier
              </label>
              <select 
                value={selectedPlan}
                onChange={(e) => setSelectedPlan(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-white text-[#030b1e] text-sm font-bold shadow-md outline-none focus:ring-4 focus:ring-blue-400/30 transition-all cursor-pointer"
              >
                {insurers.map((ins, idx) => (
                  <option key={idx} value={ins.name} className="text-slate-900 font-medium">
                    {ins.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Instant Verification Result Card */}
            <div className="bg-white/10 border border-white/20 rounded-2xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-300">Network Verification:</span>
                <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-emerald-300 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/30">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  {currentInfo.tier}
                </span>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs">
                <span className="text-slate-300">Estimated Specialist Copay:</span>
                <span className="font-extrabold text-white text-sm">{currentInfo.copay}</span>
              </div>

              <p className="text-[11px] text-slate-300 leading-relaxed pt-1">
                {currentInfo.desc}
              </p>
            </div>

            {/* Direct Booking with Verified Insurance */}
            <button 
              onClick={onOpenBooking}
              className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold text-xs shadow-lg shadow-blue-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01]"
            >
              <span>Book Appointment With {selectedPlan}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
