import React from 'react';
import { Video, Clock, Shield, MessageSquare, Pill, CheckCircle2, ArrowRight, Zap } from 'lucide-react';

interface TelehealthSectionProps {
  onOpenBooking: () => void;
}

export const TelehealthSection: React.FC<TelehealthSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto py-12 sm:py-16">
      <div className="bg-white rounded-[36px] border border-slate-200/90 p-6 sm:p-10 lg:p-14 shadow-sm relative overflow-hidden">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Telehealth Details */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-3.5 py-1 text-xs font-bold text-blue-700">
              <Video className="w-3.5 h-3.5" />
              <span>24/7 Virtual Concierge Telehealth</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#030b1e] tracking-tight leading-tight">
              See a Board-Certified Doctor in Minutes &mdash; From Anywhere.
            </h2>

            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              No waiting rooms, no traffic. Connect securely with senior physicians via encrypted HD video for urgent care, lab reviews, mental health, and prescription refills.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Under 5 Min Wait</h4>
                  <p className="text-[11px] text-slate-500">Immediate on-demand physician connection.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <Pill className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Instant e-Prescriptions</h4>
                  <p className="text-[11px] text-slate-500">Sent directly to your nearest local pharmacy.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">HIPAA Compliant</h4>
                  <p className="text-[11px] text-slate-500">256-bit encrypted end-to-end video stream.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Unlimited Follow-up</h4>
                  <p className="text-[11px] text-slate-500">Direct doctor messaging for 7 days post-visit.</p>
                </div>
              </div>
            </div>

            {/* Launch Action */}
            <div className="pt-2">
              <button 
                onClick={onOpenBooking}
                className="py-3.5 px-7 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer"
              >
                <Video className="w-4 h-4" />
                <span>Start Instant Telehealth Visit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Video Call Device Mockup */}
          <div className="lg:col-span-6 relative flex justify-center">
            
            {/* iPad / Telehealth Console Mockup */}
            <div className="relative w-full max-w-md bg-slate-950 rounded-[32px] p-3 shadow-2xl border border-slate-800">
              
              {/* Screen Area */}
              <div className="relative rounded-[24px] overflow-hidden bg-slate-900 aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80" 
                  alt="Doctor on Video Call" 
                  className="w-full h-full object-cover"
                />

                {/* Call Header Overlay */}
                <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10">
                  <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-[11px] font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Live Secure Consultation</span>
                  </div>
                  <span className="text-[10px] text-slate-200 bg-black/50 backdrop-blur-md px-2 py-0.5 rounded-full">
                    HD 1080p
                  </span>
                </div>

                {/* Patient Picture-in-Picture Mini Box */}
                <div className="absolute bottom-3 right-3 w-24 h-28 rounded-2xl overflow-hidden border-2 border-white/80 shadow-lg z-10">
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80" 
                    alt="Patient PiP" 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Doctor Bio Overlay */}
                <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md p-2.5 rounded-2xl text-white text-left z-10">
                  <div className="text-xs font-bold">Dr. Maria Kovalenko, MD</div>
                  <div className="text-[10px] text-blue-300">Lead Attending Physician &bull; Online</div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
