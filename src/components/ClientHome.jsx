'use client';

import React, { useState, useEffect } from 'react';
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
const ConsultationForm = dynamic(() => import('./ConsultationForm'), { ssr: false });
const Endorsements = dynamic(() => import('./Endorsements'), { ssr: false });

import FloatingActions from './FloatingActions';

export default function ClientHome({ initialData }) {
  const [pageData, setPageData] = useState(initialData || null);

  const [lastScrollY, setLastScrollY] = useState(0);
  useEffect(() => {
    const handleGlobalScroll = () => {
      const scrollY = window.scrollY;
      if (typeof document !== 'undefined') {
        // Only add sticky class if scrolling UP and past 700px
        if (scrollY > 700 && scrollY < lastScrollY) {
          document.body.classList.add('darkHeader-sticky');
        } else {
          document.body.classList.remove('darkHeader-sticky');
        }
      }
      setLastScrollY(scrollY);
    };

    window.addEventListener('scroll', handleGlobalScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleGlobalScroll);
      if (typeof document !== 'undefined') {
        document.body.classList.remove('darkHeader-sticky');
      }
    };
  }, [lastScrollY]);

  useEffect(() => {
    // If the Server Component provided the data (SSG), no need to fetch it again on mount!
    if (initialData) return;
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

        const API_BASE = 'https://promotion.eugenixhairsciences.com/bhubaneswar/wp-json/eugenix/v1/landing-page';
        const url = slug ? `${API_BASE}?slug=${slug}` : `${API_BASE}?id=9`;

        console.log(`Next.js API Requesting URL: ${url}`);
        const response = await fetch(url);
        
        console.log("Next.js API Response Status:", response.status);
        
        if (response.ok) {
          const liveData = await response.json();
          console.log("Next.js: Successfully loaded live data:", liveData);
          setPageData(liveData);
        } else {
          console.error("Next.js: API returned an error:", response.statusText);
        }
      } catch (error) {
        console.error("Next.js: Fetch error (CORS or Network):", error);
      }
    };

    fetchPageData();
  }, []);

  const safeData = pageData || {};

  return (
    <>
      <Header data={safeData.config} />
      <main>
        <Hero data={safeData.hero} />
        <FeaturedOn data={safeData.featuredOn} />
        <ClinicVideo data={safeData.clinicVideo} />
        <Results data={safeData.results} />
        <HairLossSolution data={safeData.hairLossSolution} />
        <Services data={safeData.services} />
        <Procedure data={safeData.procedure} />
        <Stats data={safeData.stats} />
        <Doctors data={safeData.doctors} />
        <VideoTestimonials data={safeData.videos} />
        <TextTestimonials data={safeData.textTestimonials} />
        <FAQ data={safeData.faq} />
        <Contact data={safeData.contact || safeData.config} />
        <ConsultationForm data={safeData.consultation} />
        <Endorsements data={safeData.endorsements} />
      </main>
      <Footer data={safeData.config} />
      <FloatingActions config={safeData.config} />
    </>
  );
}
