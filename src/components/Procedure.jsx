'use client';

import React from 'react';
import Slider from 'react-slick';
import { useResponsiveSlider } from '../hooks/useResponsiveSlider';

const Procedure = ({ data }) => {
    const { mounted, slidesToShow } = useResponsiveSlider(
        [
            { breakpoint: 1199, slidesToShow: 3 },
            { breakpoint: 991, slidesToShow: 2 },
            { breakpoint: 768, slidesToShow: 1 },
        ],
        4
    );

    const PROCEDURES = data?.items || [];
    const sectionTitle = data?.sectionTitle || "Hair Transplant Process";
    const btnLabel = data?.buttonLabel || "Get Free Consultation";
    const btnLink = data?.buttonLink || "#consultation";
    
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: Math.max(1, slidesToShow || 4),
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false
                }
            }
        ]
    };

    if (!mounted || PROCEDURES.length === 0) return null;

    return (
        <section className="procedure-section ptb-60 bg4">
            <div className="shape_star bounce-y"></div>
            <div className="container relative">
                <div className="sigma_dots"></div>

                <div className="block-title row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 left-block wow fadeInLeft" data-wow-delay="0.2s">
                        <h2 dangerouslySetInnerHTML={{ __html: sectionTitle }} />
                    </div>
                </div>

                <Slider key={slidesToShow} {...settings} className="procedure-list procedure-slider ptb-20 pb-0">
                    {PROCEDURES.map((item, idx) => (
                        <div key={idx} className="items wow fadeInLeft" data-wow-delay={`${0.1 * (idx + 1)}s`}>
                            <div className="card-procedure">
                                <i className="iconbox">
                                    <img src={item.icon} alt={item.title} style={{ width: 60, height: 60 }} />
                                </i>
                                <h4>{item.title}</h4>
                                <div dangerouslySetInnerHTML={{ __html: item.description }}></div>
                            </div>
                        </div>
                    ))}
                </Slider>

                {(data?.buttonLabel && data?.buttonLink) && (
                    <div className="text-center mt-40 wow fadeInUp">
                        <a href={data.buttonLink} className="btn primary big">
                            <span>{data.buttonLabel} <i className="las la-arrow-right"></i></span>
                        </a>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Procedure;
