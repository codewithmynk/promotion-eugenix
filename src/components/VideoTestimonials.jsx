import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import { useInView } from 'framer-motion';
import { useResponsiveSlider } from '../hooks/useResponsiveSlider';

const VideoItem = ({ video }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // Detection logic
    const isIframe = typeof video?.id === 'string' && video.id.includes('<iframe');
    const isAttachmentObj = typeof video?.id === 'object' && video.id !== null;
    const isUrlString = typeof video?.id === 'string' && (video.id.startsWith('http') || video.id.includes('.mp4'));

    if (!video?.id) return null;

    const isMP4 = isAttachmentObj || isUrlString;
    const videoUrl = isMP4
        ? (isAttachmentObj ? video.id.url : video.id)
        : (isIframe ? "" : `https://www.youtube.com/embed/${video.id}?autoplay=1`);

    const thumbnailUrl = (isMP4 || isIframe) ? "" : `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;

    const shouldShowPlaceholder = (!isMP4 && !isIframe) && !isLoaded;

    return (
        <div className="card-video-item px-2">
            <div className="testimonial-video-box shadow-sm">
                <div className="video-container-ratio">
                    {isIframe ? (
                        <div
                            dangerouslySetInnerHTML={{ __html: video.id }}
                            className="absolute-full-iframe"
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                        />
                    ) : isMP4 ? (
                        <video
                            controls
                            preload="metadata"
                            src={videoUrl}
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    ) : shouldShowPlaceholder ? (
                        <div
                            onClick={() => setIsLoaded(true)}
                            className="video-placeholder"
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', cursor: 'pointer' }}
                        >
                            <img
                                src={thumbnailUrl}
                                alt="Video Thumbnail"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            <div className="play-overlay" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                <i className="las la-play-circle" style={{ fontSize: '60px', color: '#fff' }}></i>
                            </div>
                        </div>
                    ) : (
                        <iframe
                            width="100%"
                            height="100%"
                            src={videoUrl}
                            title="YouTube Player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            style={{ position: 'absolute', top: 0, left: 0 }}
                            allowFullScreen
                        ></iframe>
                    )}
                </div>
            </div>

            <style jsx>{`
                .testimonial-video-box {
                    border-radius: 12px;
                    overflow: hidden;
                    background: #000;
                    width: 100%;
                    position: relative;
                }
                .video-container-ratio {
                    position: relative;
                    width: 100%;
                    aspect-ratio: 16 / 9;
                    overflow: hidden;
                    display: block;
                }
                .video-container-ratio iframe,
                .video-container-ratio video,
                .video-container-ratio :global(iframe),
                .video-container-ratio :global(video) {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100% !important;
                    height: 100% !important;
                    border: 0;
                }
                @supports not (aspect-ratio: 16/9) {
                    .video-container-ratio {
                        padding-bottom: 56.25%;
                        height: 0;
                    }
                }
            `}</style>
        </div>
    );
};

const VideoTestimonials = ({ data }) => {
    const sliderRef = useRef(null);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { amount: 0.1 });
    const [currentSlide, setCurrentSlide] = useState(0);
    const videoList = data?.items || (Array.isArray(data) ? data : []);
    const sectionTitle = data?.sectionTitle || "Watch Videos";
    const buttonLabel = data?.buttonLabel;
    const buttonLink = data?.buttonLink || "#contact-section";

    const { mounted, slidesToShow: currentSlidesToShow } = useResponsiveSlider(
        [
            { breakpoint: 1100, slidesToShow: 2 },
            { breakpoint: 991, slidesToShow: 1 },
        ],
        3 // Desktop default
    );

    if (!mounted || !videoList || videoList.length === 0) return null;

    const settings = {
        dots: false,
        infinite: videoList.length > currentSlidesToShow,
        speed: 500,
        slidesToShow: currentSlidesToShow,
        slidesToScroll: 1,
        autoplay: isInView,
        autoplaySpeed: 3000,
        arrows: false,
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: videoList.length > 2
                }
            },
            {
                breakpoint: 991, // Standard mobile/tablet breakpoint
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: videoList.length > 1
                }
            }
        ]
    };

    return (
        <section className="video-testimonial-section ptb-60" ref={sectionRef}>
            <div className="container relative">
                <div className="block-title text-center mb-4 wow fadeInUp">
                    <div
                        className="small-title text-uppercase mb-0"
                        dangerouslySetInnerHTML={{ __html: sectionTitle }}
                    />
                </div>

                <div className="slider-wrapper">
                    <Slider key={`${currentSlidesToShow}-${isInView}`} ref={sliderRef} {...settings} className="video-test-list mx-n2">
                        {videoList.map((video, idx) => (
                            <VideoItem key={idx} video={video} />
                        ))}
                    </Slider>
                </div>

                {/* Counter and Navigation Row - Hidden based on desktop/mobile logic */}
                {((currentSlidesToShow === 1 && videoList.length > 1) ||
                    (currentSlidesToShow > 1 && videoList.length > 4)) && (
                        <div
                            className="controls-footer flex-center-between mt-4 wow fadeInUp"
                            style={{ maxWidth: '400px', margin: '30px auto 0' }}
                        >
                            <button
                                className="btn-nav"
                                onClick={() => sliderRef.current?.slickPrev()}
                            >
                                <i className="las la-long-arrow-alt-left"></i>
                            </button>

                            <div className="slide-numb">
                                <span id="cpnt">{currentSlide + 1}</span> / <span id="tpnt">{videoList.length}</span>
                            </div>

                            <button
                                className="btn-nav"
                                onClick={() => sliderRef.current?.slickNext()}
                            >
                                <i className="las la-long-arrow-alt-right"></i>
                            </button>
                        </div>
                    )}

                {buttonLabel && (
                    <div className="btnbox text-center mt-4 wow fadeInUp">
                        <a className="btn primary big shadow-lg" href={buttonLink}>
                            <span>{buttonLabel} <i className="las la-arrow-right"></i></span>
                        </a>
                    </div>
                )}
            </div>

            <style jsx>{`
                .video-testimonial-section {
                    position: relative;
                }
                .video-testimonial-section .small-title {
                    font-size: 26px;
                }
                .flex-center-between {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .btn-nav {
                    color: #800040;
                    border: none;
                    width: 45px;
                    height: 45px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 24px;
                    cursor: pointer;
                    transition: all 0.3s;
                }
                .slider-wrapper {
                    position: relative;
                }
            `}</style>
        </section>
    );
};

export default VideoTestimonials;