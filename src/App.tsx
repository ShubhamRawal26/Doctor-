import React, { useState } from 'react';
import { CleanNavbar } from './components/CleanNavbar';
import { HeroSearchSection } from './components/HeroSearchSection';
import { QuickSpecialties } from './components/QuickSpecialties';
import { FeaturedDoctors } from './components/FeaturedDoctors';
import { FacilityTour } from './components/FacilityTour';
import { WhyChooseTrust } from './components/WhyChooseTrust';
import { PatientStories } from './components/PatientStories';
import { SimpleFAQ } from './components/SimpleFAQ';
import { CleanFooter } from './components/CleanFooter';
import { BookingModal } from './components/BookingModal';

export const App: React.FC = () => {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Primary & Family Care');
  const [selectedDoctor, setSelectedDoctor] = useState('Dr. Maria Kovalenko, MD');

  const handleOpenBooking = () => {
    setBookingOpen(true);
  };

  const handleSelectSpecialty = (specialtyName: string) => {
    setSelectedService(specialtyName);
    setBookingOpen(true);
  };

  const handleSelectDoctor = (doctorName: string) => {
    setSelectedDoctor(doctorName);
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0b152d] flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      
      {/* 1. High-Clarity Header & Hotline Bar */}
      <CleanNavbar onOpenBooking={handleOpenBooking} />

      {/* 2. Main High-Clarity Experience */}
      <main className="flex-1 flex flex-col">
        {/* Flagship Hero with Smart Patient Search Bar & 3 Action Pillars */}
        <HeroSearchSection 
          onOpenBooking={handleOpenBooking}
          onSearchSpecialty={handleSelectSpecialty}
        />

        {/* 6 Top Specialized Clinical Departments */}
        <QuickSpecialties onSelectSpecialty={handleSelectSpecialty} />

        {/* Top-Ranked Senior Attending Physicians */}
        <FeaturedDoctors onSelectDoctor={handleSelectDoctor} />

        {/* Inside the Hospital: 4K Facility Virtual Tour */}
        <FacilityTour onOpenBooking={handleOpenBooking} />

        {/* 4 Clear Trust Pillars & Zero Waiting Guarantee */}
        <WhyChooseTrust onOpenBooking={handleOpenBooking} />

        {/* Verified Patient Stories & Recovery Outcomes */}
        <PatientStories />

        {/* Practical Clinical FAQ */}
        <SimpleFAQ />
      </main>

      {/* 3. Executive Footer with NexGen Digital Attribution & Compliance */}
      <CleanFooter />

      {/* 4. Streamlined 3-Step Appointment Booking Drawer */}
      <BookingModal 
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        initialService={selectedService}
        initialDoctor={selectedDoctor}
      />

    </div>
  );
};

export default App;
