import React from 'react';
import { Stethoscope, MapPin, Phone, Mail, Clock, ArrowUp, Zap, ShieldCheck, Award } from 'lucide-react';

export const CleanFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="w-full bg-white border-t border-slate-200/90 mt-16 pt-14 pb-10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compliance Trust Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-200/80 mb-12">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
            <div>
              <div className="text-xs font-bold text-[#0b152d]">HIPAA Certified</div>
              <div className="text-[10px] text-slate-500">256-Bit Data Encryption</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Award className="w-5 h-5 text-emerald-600 shrink-0" />
            <div>
              <div className="text-xs font-bold text-[#0b152d]">CLIA Certified Lab</div>
              <div className="text-[10px] text-slate-500">Federal Clinical Standard</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-purple-600 shrink-0" />
            <div>
              <div className="text-xs font-bold text-[#0b152d]">FDA Cleared Suite</div>
              <div className="text-[10px] text-slate-500">Diagnostic Precision</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Award className="w-5 h-5 text-amber-600 shrink-0" />
            <div>
              <div className="text-xs font-bold text-[#0b152d]">Top Rated 2026</div>
              <div className="text-[10px] text-slate-500">4.98/5 Patient Trust</div>
            </div>
          </div>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-100">
          
          {/* Brand Info & NexGen Creator */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-xs">
                <Stethoscope className="w-5 h-5" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-[#0b152d] flex items-center">
                Salva<span className="text-blue-600">Medic</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-500 max-w-sm leading-relaxed">
              World-class healthcare, comprehensive diagnostics, and dedicated board-certified physicians &mdash; delivering zero-wait care nationwide.
            </p>

            {/* NexGen Digital Brand Attribution */}
            <div>
              <a 
                href="https://nexgendigital.tech" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-3 p-2.5 px-4 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-2xl transition-all group"
                title="Built by NexGen Digital"
              >
                <img 
                  src="https://res.cloudinary.com/sahbncq8/image/upload/v1786081222/NexG1en_alefcv.png" 
                  alt="NexGen Digital Logo" 
                  className="h-7 w-auto object-contain group-hover:scale-105 transition-transform" 
                />
                <div className="text-left">
                  <div className="text-[10px] text-slate-400 font-medium">Digital Product Architecture</div>
                  <div className="text-xs font-bold text-slate-800 flex items-center gap-1 group-hover:text-blue-600 transition-colors">
                    <span>Built by NexGen Digital</span>
                    <Zap className="w-3 h-3 text-[#FF6B00] fill-[#FF6B00]" />
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-[#0b152d] mb-4">Specialties</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-500">
              <li><a href="#specialties" className="hover:text-blue-600 transition-colors">Primary &amp; Family Care</a></li>
              <li><a href="#specialties" className="hover:text-blue-600 transition-colors">Cardiology &amp; 12-Lead ECG</a></li>
              <li><a href="#specialties" className="hover:text-blue-600 transition-colors">Pediatrics &amp; Vaccine</a></li>
              <li><a href="#specialties" className="hover:text-blue-600 transition-colors">Women’s Health</a></li>
              <li><a href="#specialties" className="hover:text-blue-600 transition-colors">3T MRI &amp; Ultrasound</a></li>
            </ul>
          </div>

          {/* Patient Portal */}
          <div>
            <h4 className="text-sm font-bold text-[#0b152d] mb-4">Patient Care</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-500">
              <li><a href="#doctors" className="hover:text-blue-600 transition-colors">Find a Doctor</a></li>
              <li><a href="#facilities" className="hover:text-blue-600 transition-colors">Facility Tour</a></li>
              <li><a href="#why-us" className="hover:text-blue-600 transition-colors">Why Choose Us</a></li>
              <li><a href="#reviews" className="hover:text-blue-600 transition-colors">Patient Reviews</a></li>
              <li><a href="#faq" className="hover:text-blue-600 transition-colors">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-[#0b152d] mb-4">Concierge Desk</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>Medychnyi Avenue, 8-A, Lviv &bull; Partner Network</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                <a href="tel:+18007258263" className="hover:text-blue-600 font-bold">+1 (800) 725-8263</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                <a href="mailto:care@salvamedic.com" className="hover:text-blue-600">care@salvamedic.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Attribution Bar */}
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
