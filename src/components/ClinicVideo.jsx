'use client';

import React, { useState } from 'react';

const ClinicVideo = ({ data }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    if (!data || (!data.videoUrl && !data.url && !data.iframeLink)) return null;

    // Live API: url, heading, points[]; new schema: videoUrl/iframeLink, sectionTitle, description
    const videoType = data.videoType || 'video-file';
    const videoUrl = data.videoUrl || data.url;
    const iframeLink = data.iframeLink;
    const posterImage = data.posterImage || "https://promotion.eugenixhairsciences.com/bhubaneswar/wp-content/themes/eugenix/assets/images/video-thumb.jpg";
    const sectionTitle = data.sectionTitle || data.heading;
    // Convert points[] array to description HTML, or use existing HTML description
    let description = data.description;
    if (!description && Array.isArray(data.points) && data.points.length > 0) {
        description = '<ul>' + data.points.map(p => `<li>${p}</li>`).join('') + '</ul>';
    }

    // Robust check for file extension
    const videoUrlStr = (videoUrl || "").split('?')[0].toLowerCase();
    const isVideoFile = videoUrlStr.endsWith('.mp4');
    const isImageFile = videoUrlStr.endsWith('.jpg') || 
                       videoUrlStr.endsWith('.jpeg') || 
                       videoUrlStr.endsWith('.png') || 
                       videoUrlStr.endsWith('.webp') ||
                       videoUrlStr.endsWith('.avif');

    return (
        <section id="clinicVideo" className="clinicvideo-section ptb-80">
            <div className="container relative">
                <div className="row v-center clinicvideo-inner">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 left-block wow fadeInLeft" data-wow-delay="0.2s">
                        
                        {/* 1. Priority: Direct MP4 Video */}
                        {isVideoFile ? (
                            <div className="video-box1" style={{ position: 'relative', width: '100%', borderRadius: '15px', overflow: 'hidden', backgroundColor: '#000' }}>
                                <video 
                                    key={videoUrl}
                                    width="100%" 
                                    height="auto" 
                                    controls 
                                    poster={posterImage} 
                                    playsInline
                                    style={{ display: 'block', width: '100%', height: 'auto', borderRadius: '15px' }}
                                >
                                    <source src={videoUrl} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        ) : 
                        /* 2. Priority: Direct Image */
                        isImageFile ? (
                            <div className="imgbox shine" style={{ borderRadius: '15px', overflow: 'hidden' }}>
                                <img src={videoUrl} alt="Clinic Section" style={{ width: '100%', height: 'auto' }} />
                            </div>
                        ) : 
                        /* 3. Priority: Iframe (YouTube/Vimeo) */
                        iframeLink ? (
                            <div className={`videobox ${isPlaying ? 'active' : 'active1'}`}>
                                <div className="video-list" onClick={() => setIsPlaying(true)} style={{ cursor: 'pointer', display: isPlaying ? 'none' : 'block' }}>
                                    <img src={posterImage} alt="Clinic Video" style={{ borderRadius: '15px' }} />
                                    <a className="play-btn video-btn"><i className="las la-play-circle"></i></a>
                                </div>

                                <div className="v-big-list" style={{ display: isPlaying ? 'block' : 'none', borderRadius: '15px', overflow: 'hidden' }}>
                                    <div id="videoBox_1" className="items active">
                                        <div dangerouslySetInnerHTML={{ __html: iframeLink }} />
                                    </div>
                                </div>
                            </div>
                        ) : 
                        /* 4. Fallback */
                        videoUrl ? (
                            <div className="video-box">
                                <video width="100%" height="auto" controls poster={posterImage} style={{ borderRadius: '15px' }}>
                                    <source src={videoUrl} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        ) : null}
                    </div>

                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 right-block wow fadeInRight" data-wow-delay="0.2s">
                        <div className="textarea">
                            {sectionTitle && (
                                <div className="block-title">
                                    <h2 dangerouslySetInnerHTML={{ __html: sectionTitle }} />
                                </div>
                            )}

                            <div className="textbox entry-content">
                                {description && (
                                    <div dangerouslySetInnerHTML={{ __html: description }} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClinicVideo;
