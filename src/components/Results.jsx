import React, { useRef } from 'react';
import Slider from 'react-slick';
import { useResponsiveSlider } from '../hooks/useResponsiveSlider';

const Results = ({ data }) => {
    const sliderRef = useRef(null);
    const sectionTitle = data?.sectionTitle || "LIFE-CHANGING RESULTS";
    const RESULTS = data?.items || [];

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
        slidesToShow: Math.max(1, slidesToShow || 3),
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

    if (!mounted || RESULTS.length === 0) return null;

    return (
        <section className="results-section bg4" id="results-slider-de">
            <div className="container">
                <div className="row results-inner">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 right-block">
                        <div className="results-right-inn">
                            <div className="block-title wow fadeInRight" data-wow-delay="0.2s">
                                <h2 dangerouslySetInnerHTML={{ __html: sectionTitle }} />
                            </div>

                            <Slider 
                                key={slidesToShow} 
                                ref={sliderRef}
                                {...settings} 
                                className="row results-list results-slider ptb-20 wow fadeInRight" 
                                data-wow-delay="0.3s"
                            >
                                {RESULTS.map((result, idx) => (
                                    <div key={idx} className="items">
                                        <div className="card-result shine">
                                            <div className="imgbox">
                                                <img
                                                    src={result.image}
                                                    alt={result.name || "Patient Result"}
                                                    style={{ height: 'auto', width: 'auto', maxWidth: '100%' }}
                                                />
                                            </div>
                                            <h4><span>Before</span><span>After</span></h4>
                                        </div>
                                    </div>
                                ))}
                            </Slider>

                            <div className="results-custom-arrows j-center mt-20">
                                <button className="custom-arrow prev" onClick={() => sliderRef.current?.slickPrev()}>
                                    <i className="las la-arrow-left"></i>
                                </button>
                                <button className="custom-arrow next" onClick={() => sliderRef.current?.slickNext()}>
                                    <i className="las la-arrow-right"></i>
                                </button>
                            </div>

                            <div className="section-cta text-center mt-40 wow fadeInUp" data-wow-delay="0.4s">
                                <a href="#contact-section" className="btn primary big">
                                    <span>Book a Free Consultation <i className="las la-arrow-right"></i></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Results;
