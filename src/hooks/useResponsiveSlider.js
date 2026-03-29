'use client';
import { useState, useEffect } from 'react';

/**
 * Hook that determines the correct slidesToShow based on window width.
 * Solves the SSR hydration issue where react-slick initializes with desktop
 * settings on a fresh mobile page load.
 *
 * @param {Array} breakpoints - Array of { breakpoint, slidesToShow } objects,
 *   sorted in descending order of breakpoint (same as Slick's responsive format).
 * @param {number} defaultSlides - Default slidesToShow for desktop.
 * @returns {{ mounted: boolean, slidesToShow: number }}
 */
export function useResponsiveSlider(breakpoints, defaultSlides) {
    const [mounted, setMounted] = useState(false);
    const [slidesToShow, setSlidesToShow] = useState(defaultSlides);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            let slides = defaultSlides;
            for (const bp of breakpoints) {
                if (width < bp.breakpoint) {
                    slides = bp.slidesToShow;
                }
            }
            setSlidesToShow(slides);
        };

        handleResize();
        setMounted(true);

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [breakpoints, defaultSlides]);

    return { mounted, slidesToShow };
}
