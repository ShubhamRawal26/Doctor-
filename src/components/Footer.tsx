import React from 'react';
import { Stethoscope, MapPin, Phone, Mail, Clock, ArrowUp, Zap, ShieldCheck, Award } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="w-full bg-white border-t border-slate-200/90 mt-16 pt-16 pb-10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compliance & Accreditations Banner */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-slate-50 rounded-3xl border border-slate-200/80 mb-12 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-blue-600 shrink-0" />
            <div>
              <div className="text-xs font-bold text-slate-900">HIPAA Compliant</div>
              <div className="text-[10px] text-slate-500">256-Bit Data Encryption</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Award className="w-6 h-6 text-emerald-600 shrink-0" />
            <div>
              <div className="text-xs font-bold text-slate-900">CLIA Certified Lab</div>
              <div className="text-[10px] text-slate-500">Federal Clinical Standard</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-purple-600 shrink-0" />
            <div>
              <div className="text-xs font-bold text-slate-900">FDA Cleared Suite</div>
              <div className="text-[10px] text-slate-500">Certified Diagnostic Gear</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Award className="w-6 h-6 text-amber-600 shrink-0" />
            <div>
              <div className="text-xs font-bold text-slate-900">Top Rated 2026</div>
              <div className="text-[10px] text-slate-500">4.98/5 Patient Trust</div>
            </div>
          </div>
        </div>

        {/* Main Footer Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-100">
          
          {/* Col 1: SalvaMedic Brand + NexGen Creator Badge */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-sm">
                <Stethoscope className="w-5 h-5" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-[#030b1e] flex items-center">
                Salva<span className="text-blue-600">Medic</span>
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-500 max-w-sm leading-relaxed mb-5">
              Premier luxury healthcare and precision longevity network. Comprehensive preventive medicine, immediate diagnostics, and dedicated board-certified physicians nationwide.
            </p>

            {/* NexGen Digital Creator Attribution Badge */}
            <div className="mb-6">
              <a 
                href="https://nexgendigital.tech" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-3 p-2.5 px-4 bg-slate-50 hover:bg-slate-100 border border-slate-200/80 rounded-2xl transition-all group"
                title="Built by NexGen Digital"
              >
                <img 
                  src="https://res.cloudinary.com/sahbncq8/image/upload/v1786081222/NexG1en_alefcv.png" 
                  alt="NexGen Digital Logo" 
                  className="h-8 w-auto object-contain group-hover:scale-105 transition-transform" 
                />
                <div className="text-left">
                  <div className="text-[11px] text-slate-400 font-medium">Digital Product Architecture</div>
                  <div className="text-xs font-bold text-slate-800 flex items-center gap-1 group-hover:text-blue-600 transition-colors">
                    <span>Built by NexGen Digital</span>
                    <Zap className="w-3 h-3 text-[#FF6B00] fill-[#FF6B00]" />
                  </div>
                </div>
              </a>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-50 p-3 rounded-2xl border border-slate-200/60 w-fit">
              <Clock className="w-4 h-4 text-blue-600" />
              <span>In-Clinic: Mon &ndash; Sat 8 AM &ndash; 8 PM | Telehealth: 24/7 Unlimited</span>
            </div>
          </div>

          {/* Col 2: Care Programs */}
          <div>
            <h4 className="text-sm font-bold text-[#030b1e] mb-4">Care Programs</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-500">
              <li><a href="#services" className="hover:text-blue-600 transition-colors">Primary &amp; Urgent Care</a></li>
              <li><a href="#services" className="hover:text-blue-600 transition-colors">Cardiology &amp; 12-Lead ECG</a></li>
              <li><a href="#services" className="hover:text-blue-600 transition-colors">Pediatrics &amp; Adolescent</a></li>
              <li><a href="#services" className="hover:text-blue-600 transition-colors">Women's Longevity</a></li>
              <li><a href="#services" className="hover:text-blue-600 transition-colors">3T MRI &amp; Ultrasound</a></li>
              <li><a href="#services" className="hover:text-blue-600 transition-colors">Executive Annual Physical</a></li>
            </ul>
          </div>

          {/* Col 3: Patient Resources */}
          <div>
            <h4 className="text-sm font-bold text-[#030b1e] mb-4">Patient Portal</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-500">
              <li><a href="#insurance" className="hover:text-blue-600 transition-colors">Insurance Coverage Checker</a></li>
              <li><a href="#specialists" className="hover:text-blue-600 transition-colors">Find a Specialist</a></li>
              <li><a href="#tech" className="hover:text-blue-600 transition-colors">Diagnostic Equipment</a></li>
              <li><a href="#reviews" className="hover:text-blue-600 transition-colors">Patient Stories</a></li>
              <li><a href="#faq" className="hover:text-blue-600 transition-colors">Clinical FAQ</a></li>
              <li><a href="https://wa.me/380987654321" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">WhatsApp Concierge</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Hotlines */}
          <div>
            <h4 className="text-sm font-bold text-[#030b1e] mb-4">Concierge Desk</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>Medychnyi Avenue, 8-A, Lviv &bull; USA Partner Clinics</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                <a href="tel:+18007258263" className="hover:text-blue-600 font-bold">+1 (800) 725-8263</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                <a href="mailto:concierge@salvamedic.com" className="hover:text-blue-600">concierge@salvamedic.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: NexGen Digital Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-center sm:text-left">
            <span className="font-semibold text-slate-600">&copy; 2026 NexGen Digital. All Rights Reserved.</span>
            <span className="hidden sm:inline">&bull;</span>
            <span>Crafted for simplicity and performance.</span>
            <span className="hidden sm:inline">&bull;</span>
            <a 
              href="https://nexgendigital.tech" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 font-bold hover:underline"
            >
              nexgendigital.tech
            </a>
          </div>

          <button 
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-blue-600 font-bold transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
