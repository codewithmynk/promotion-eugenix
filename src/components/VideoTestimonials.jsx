'use client';

import React, { useState } from 'react';

const VideoItem = ({ video, delay }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // Determine video type (API provides object with url, generic JSON provides YouTube ID string)
    const isMP4 = typeof video.id === 'object' && video.id !== null && video.id.url;
    const videoUrl = isMP4 ? video.id.url : `https://www.youtube.com/embed/${video.id}?autoplay=1`;
    const thumbnailUrl = isMP4 ? '' : `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;

    return (
        <div className={`col-lg-4 col-md-4 col-sm-12 col-xs-12 items wow fadeInLeft`} data-wow-delay={delay}>
            <div className="video-box">
                {isMP4 ? (
                    <video 
                        controls
                        src={videoUrl}
                        width="320"
                        height="240"
                    />
                ) : !isLoaded ? (
                    <div onClick={() => setIsLoaded(true)} className="video-placeholder" style={{ cursor: 'pointer', position: 'relative' }}>
                        <img 
                            src={thumbnailUrl} 
                            alt="YouTube Video Thumbnail" 
                            style={{ width: '100%', display: 'block' }}
                        />
                        <a className="play-btn video-btn">
                            <i className="las la-play-circle"></i>
                        </a>
                    </div>
                ) : (
                    <div dangerouslySetInnerHTML={{ __html: `<iframe width="560" height="315" src="${videoUrl}" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>` }} />
                )}
            </div>
        </div>
    );
};

const VideoTestimonials = ({ data }) => {
    // Support both new structured data and old array fallback
    const videoList = data?.items || (Array.isArray(data) ? data : []);
    const sectionTitle = data?.title || data?.section_title || "Watch Videos";
    const buttonLabel = data?.button_label;
    const buttonLink = data?.button_link || "#";

    return (
        <section className="journey-section results-section ptb-60">
            <div className="container relative">
                <div className="block-title text-center wow fadeInUp" data-wow-delay="0.2s">
                    <h2 dangerouslySetInnerHTML={{ __html: sectionTitle }} />
                </div>

                <div className="row video-test-list ptb-20">
                    {videoList.map((video, idx) => (
                        <VideoItem 
                            key={idx}
                            video={video} 
                            delay={`${0.1 * ((idx % 3) + 1)}s`} 
                        />
                    ))}
                </div>

                {buttonLabel && (
                    <div className="bottom-btnbox text-center ptb-20 pb-0">
                        <a className="btn primary" href={buttonLink}>
                            <span>{buttonLabel} <i className="las la-arrow-right"></i></span>
                        </a>
                    </div>
                )}
            </div>
        </section>
    );
};

export default VideoTestimonials;