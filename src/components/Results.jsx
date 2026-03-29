'use client';

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { useResponsiveSlider } from '../hooks/useResponsiveSlider';

const Results = ({ data }) => {
    const sectionTitle = data?.section_title || "LIFE-CHANGING RESULTS";
    const RESULTS = data?.items || (Array.isArray(data) ? data : []);

    const { mounted, slidesToShow } = useResponsiveSlider(
        [
            { breakpoint: 1024, slidesToShow: 2 },
            { breakpoint: 768, slidesToShow: 1 },
        ],
        3
    );

    const settings = {
        dots: false,
        infinite: RESULTS.length > slidesToShow,
        speed: 500,
        slidesToShow,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1, slidesToScroll: 1, dots: false, arrows: false, autoplay: true }
            }
        ]
    };

    if (!mounted) return null;

    return (
        <section className="results-section bg4" id="results-slider-de">
            <div className="container">
                <div className="results-inner">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 right-block">
                        <div className="results-right-inn">
                            <div className="block-title wow fadeInRight text-center" data-wow-delay="0.2s">
                                <div className="small-title">{sectionTitle}</div>
                            </div>

                            <Slider key={slidesToShow} {...settings} className="results-list results-slider ptb-20 wow fadeInRight" data-wow-delay="0.3s">
                                {RESULTS.map((result, idx) => (
                                    <div key={idx} className="px-2">
                                        <div className="card-result shine rounded-lg overflow-hidden shadow-sm border border-gray-100">
                                            <div className="imgbox bg-gray-100">
                                                <Image
                                                    src={result.before}
                                                    alt={result.name || "Patient Result"}
                                                    className="w-full h-auto object-cover"
                                                    width={500}
                                                    height={300}
                                                />
                                            </div>
                                            <h4 className="flex justify-between items-center px-6 py-4 bg-white text-sm md:text-base font-semibold border-t border-gray-50">
                                                <div className="flex flex-col items-start">
                                                    <span className="text-gray-400 uppercase tracking-widest text-[9px] md:text-xs leading-tight">Before</span>
                                                    <span className="text-gray-800 font-bold">Standard</span>
                                                </div>
                                                <div className="flex flex-col items-end">
                                                    <span className="text-gray-400 uppercase tracking-widest text-[9px] md:text-xs leading-tight">After</span>
                                                    <span className="text-[#800040] font-bold">Excellent</span>
                                                </div>
                                            </h4>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Results;
