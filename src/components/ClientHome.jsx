'use client';

import React, { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import Header from './Header';
import Hero from './Hero';
import FeaturedOn from './FeaturedOn';
import ClinicVideo from './ClinicVideo';
import HairLossSolution from './HairLossSolution';
import Services from './Services';
import Procedure from './Procedure';
import Stats from './Stats';
import Doctors from './Doctors';
import Contact from './Contact';
import Footer from './Footer';

// Defer heavy components that require browser APIs
const Results = dynamic(() => import('./Results'), { 
    ssr: false, 
    loading: () => <div className="p-10 text-center">Loading Results...</div> 
});
const VideoTestimonials = dynamic(() => import('./VideoTestimonials'), { 
    ssr: false,
    loading: () => <div className="p-10 text-center">Loading Videos...</div>
});
const TextTestimonials = dynamic(() => import('./TextTestimonials'), { ssr: false });
const FAQ = dynamic(() => import('./FAQ'), { ssr: false });
const GoogleReviews = dynamic(() => import('./GoogleReviews'), { ssr: false });
const Journey = dynamic(() => import('./Journey'), { ssr: false });
const IndiaSection = dynamic(() => import('./IndiaSection'), { ssr: false });
const IdealSection = dynamic(() => import('./IdealSection'), { ssr: false });
const ConsultationForm = dynamic(() => import('./ConsultationForm'), { ssr: false });
const Endorsements = dynamic(() => import('./Endorsements'), { ssr: false });

import FloatingActions from './FloatingActions';

export default function ClientHome({ initialData }) {
  const [pageData, setPageData] = useState(initialData || null);
  useEffect(() => {
    // Re-sync WOW.js after new data is injected into the DOM
    if (pageData && typeof window !== 'undefined' && window.WOW) {
        setTimeout(() => {
            new window.WOW({ live: true }).init();
        }, 800);
    }
  }, [pageData]);

  // Ensure all sections are ready for mapping even if API keys are missing
  const safeData = {
    config: pageData?.config || {},
    hero: pageData?.hero || {},
    stats: pageData?.stats || {},
    videos: pageData?.videos || {},
    procedure: pageData?.procedure || {},
    services: pageData?.services || {},
    doctors: pageData?.doctors || {},
    results: pageData?.results || {},
    textTestimonials: pageData?.textTestimonials || {},
    clinicVideo: pageData?.clinicVideo || {},
    featuredOn: pageData?.featuredOn || {},
    hairLossSolution: pageData?.hairLossSolution || {},
    faq: pageData?.faq || {}, // Matched to PHP faqSection
    endorsements: pageData?.endorsements || {},
    consultation: pageData?.consultation || {},
    contact: pageData?.contact || {},
    reviewsGoogle: pageData?.reviewsGoogle || {},
    journey: pageData?.journey || {},
    india: pageData?.india || {},
    ideal: pageData?.ideal || {}
  };

  return (
    <>
      <Header data={safeData.config} />
      <main>
        <Hero data={safeData.hero} isHomePage={pageData?.id === 9} />
        <FeaturedOn data={safeData.featuredOn} />
        <ClinicVideo data={safeData.clinicVideo} />
        <Results data={safeData.results} />
        <Journey data={safeData.journey} />
        <HairLossSolution data={safeData.hairLossSolution} />
        <Services data={safeData.services} />
        <IdealSection data={safeData.ideal} />
        <Procedure data={safeData.procedure} />
        <Stats data={safeData.stats} />
        <Doctors data={safeData.doctors} />
        <IndiaSection data={safeData.india} />
        <VideoTestimonials data={safeData.videos} />
        <TextTestimonials data={safeData.textTestimonials} />
        <GoogleReviews data={safeData.reviewsGoogle} />
        <FAQ data={safeData.faq} />
        <Contact data={safeData.contact} config={safeData.config} />
        <ConsultationForm data={safeData.consultation} />
        <Endorsements data={safeData.endorsements} />
      </main>
      <Footer data={safeData.config} />
      <FloatingActions config={safeData.config} />
    </>
  );
}
