import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import { useInView } from 'framer-motion';
import { useResponsiveSlider } from '../hooks/useResponsiveSlider';

const Results = ({ data }) => {
    const sliderRef = useRef(null);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { amount: 0.1 });
    const [currentSlide, setCurrentSlide] = useState(0);
    let sectionTitle = data?.sectionTitle || "LIFE-CHANGING RESULTS";
    const RESULTS = data?.items || [];

    React.useEffect(() => {
        if (isInView) {
            sliderRef.current?.slickPlay();
        } else {
            sliderRef.current?.slickPause();
        }
    }, [isInView]);

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
        autoplay: isInView,
        autoplaySpeed: 3000,
        afterChange: (current) => setCurrentSlide(current),
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
        <section className="results-section bg4" ref={sectionRef} id="results-slider-de">
            <div className="container">
                <div className="row results-inner">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 right-block">
                        <div className="results-right-inn">
                            <div className="block-title text-center mb-5 wow fadeInUp">
                                <div
                                    className="small-title text-uppercase mb-0"
                                    dangerouslySetInnerHTML={{ __html: sectionTitle }}
                                />
                            </div>

                            <Slider
                                key={`${slidesToShow}-${isInView}`}
                                ref={sliderRef}
                                {...settings}
                                className="results-slider wow fadeInUp"
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

                            <div className="results-custom-arrows flex v-center j-center mt-20" style={{ gap: '20px' }}>
                                <button className="custom-arrow prev" onClick={() => sliderRef.current?.slickPrev()}>
                                    <i className="las la-arrow-left"></i>
                                </button>

                                <div className="slide-numb">
                                    <span id="cpnt">{currentSlide + 1}</span> / <span id="tpnt">{RESULTS.length}</span>
                                </div>

                                <button className="custom-arrow next" onClick={() => sliderRef.current?.slickNext()}>
                                    <i className="las la-arrow-right"></i>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Results;
