'use client';

import React, { useState } from 'react';
import Slider from 'react-slick';
import { useResponsiveSlider } from '../hooks/useResponsiveSlider';

const VideoItem = ({ video, delay }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className="items wow fadeInLeft" data-wow-delay={delay}>
            <div className="video-box" style={{ 
                cursor: 'pointer', 
                position: 'relative', 
                width: '100%',
                paddingBottom: '56.25%',
                height: 0,
                overflow: 'hidden',
                backgroundColor: '#000',
                borderRadius: '8px'
            }}>
                {!isLoaded ? (
                    <div onClick={() => setIsLoaded(true)} className="video-placeholder" style={{ 
                        position: 'absolute', 
                        top: 0,
                        left: 0,
                        width: '100%', 
                        height: '100%' 
                    }}>
                        <img 
                            src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} 
                            alt="YouTube Video Thumbnail" 
                            style={{ 
                                width: '100%', 
                                height: '100%', 
                                objectFit: 'cover',
                                display: 'block' 
                            }}
                        />
                        <div className="play-button" style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '60px',
                            height: '42px',
                            backgroundColor: 'rgba(255, 0, 0, 0.9)',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: '20px',
                            transition: 'background-color 0.3s'
                        }}>
                            <i className="la la-play"></i>
                        </div>
                    </div>
                ) : (
                    <iframe
                        width="560"
                        height="315"
                        src={video.src}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        style={{ 
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%', 
                            height: '100%' 
                        }}
                    ></iframe>
                )}
            </div>
        </div>
    );
};

const VideoTestimonials = ({ data }) => {
    const { mounted, slidesToShow } = useResponsiveSlider(
        [
            { breakpoint: 1024, slidesToShow: 2 },
            { breakpoint: 768, slidesToShow: 1 },
        ],
        3
    );

    // Support both new structured data and old array fallback
    const videoList = data?.items || (Array.isArray(data) ? data : []);
    const sectionTitle = data?.title || "Watch Videos";

    const settings = {
        infinite: videoList.length > slidesToShow,
        dots: false,
        arrows: true,
        slidesToShow,
        slidesToScroll: 1,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2, slidesToScroll: 1 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1, slidesToScroll: 1, dots: true, arrows: false }
            }
        ]
    };

    if (!mounted) return null;

    return (
        <section className="journey-section results-section results-section-video video-landing-page ptb-60">
            <div className="container relative">
                <div className="block-title text-center wow fadeInUp" data-wow-delay="0.2s">
                    <div className="small-title uppercase" style={{ color: '#800040', fontWeight: 'normal', fontSize: '22px' }}>{sectionTitle}</div>
                </div>

                <Slider {...settings} className="video-test-list video-test-list-slider ptb-20 px-2 md:px-0">
                    {videoList.map((video, idx) => {
                        const videoWithSrc = { ...video, src: `https://www.youtube.com/embed/${video.id}?autoplay=1` };
                        return (
                            <div key={idx} className="px-2">
                                <VideoItem 
                                    video={videoWithSrc} 
                                    delay={`${0.1 * ((idx % 3) + 1)}s`} 
                                />
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </section>
    );
};

export default VideoTestimonials;