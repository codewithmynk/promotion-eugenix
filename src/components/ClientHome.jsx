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
  const lastScrollY = useRef(0);

  useEffect(() => {
    console.log("ClientHome mounted with initialData:", initialData);
    console.log("Current pageData state:", pageData);
    const handleGlobalScroll = () => {
      const scrollY = window.scrollY;
      const directionUp = scrollY < lastScrollY.current;
      const pastThreshold = scrollY > 700;

      if (typeof document !== 'undefined') {
        // Toggle class directly on body to avoid component state re-renders where possible
        if (pastThreshold && directionUp) {
          document.body.classList.add('darkHeader-sticky');
        } else {
          document.body.classList.remove('darkHeader-sticky');
        }
      }
      lastScrollY.current = scrollY;
    };

    window.addEventListener('scroll', handleGlobalScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleGlobalScroll);
      if (typeof document !== 'undefined') {
        document.body.classList.remove('darkHeader-sticky');
      }
    };
  }, []);

  useEffect(() => {
    // Strategy A: Stale-While-Revalidate
    // We intentionally removed the `if (initialData) return;` so that even if SSG provides initialData,
    // the client fetches fresh data from the API in the background and updates the UI.
    const fetchPageData = async () => {
      console.log("Next.js: Fetching live data from WordPress...");
      try {
        // 1. Try to get slug from URL query params (e.g. ?slug=gurugram)
        const params = new URLSearchParams(window.location.search);
        let slug = params.get('slug');

        // 2. If no query param, try to extract from pathname (e.g. /bhubaneswar/react/gurugram)
        if (!slug) {
            const pathSegments = window.location.pathname.split('/').filter(Boolean);
            const reactIndex = pathSegments.indexOf('react');
            if (reactIndex !== -1 && pathSegments.length > reactIndex + 1) {
                // The segment immediately following 'react' is our slug
                slug = pathSegments[reactIndex + 1];
            }
        }

        const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://promotion.eugenixhairsciences.com/bhubaneswar/wp-json/eugenix/v1/landing-page';
        const url = slug ? `${API_BASE}?slug=${slug}` : `${API_BASE}?id=9`;

        console.log(`Next.js API Requesting URL: ${url}`);
        const response = await fetch(url);
        
        console.log("Next.js API Response Status:", response.status);
        
        if (response.ok) {
          const liveData = await response.json();
          console.log("Next.js: Successfully loaded live data:", liveData);
          setPageData(liveData);
          
          // Re-sync WOW.js after new data is injected into the DOM
          if (typeof window !== 'undefined' && window.WOW) {
              setTimeout(() => {
                  new window.WOW({ live: true }).init();
              }, 500);
          }
        } else {
          console.error("Next.js: API returned an error:", response.statusText);
        }
      } catch (error) {
        console.error("Next.js: Fetch error (CORS or Network):", error);
      }
    };

    fetchPageData();
  }, []);

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
        <Hero data={safeData.hero} />
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
