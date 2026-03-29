'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const ClinicVideo = ({ data }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    if (!data) return null;

    const videoType = data.video_type || 'video-file'; // fallback
    const videoUrl = data.url || '';
    const iframeLink = data.iframe_link || '';
    const posterImage = data.poster || "/bhubaneswar/react/assets/images/imgi_10_WhatsApp-Image-2025-01-11-at-10.44.03-AM.png";

    return (
        <section id="clinicVideo" className="clinicvideo-section ptb-80">
            <div className="container relative">
                <div className="row v-center clinicvideo-inner">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 left-block wow fadeInLeft" data-wow-delay="0.2s">
                        
                        {videoType === 'video-iframe' && iframeLink && (
                            <div className={`videobox ${isPlaying ? 'active' : 'active1'}`}>
                                <div className="video-list" onClick={() => setIsPlaying(true)} style={{ cursor: 'pointer', display: isPlaying ? 'none' : 'block' }}>
                                    <img src={posterImage} alt="Clinic Video" />
                                    <a className="play-btn video-btn"><i className="las la-play-circle"></i></a>
                                </div>

                                <div className="v-big-list" style={{ display: isPlaying ? 'block' : 'none' }}>
                                    <div id="videoBox_1" className="items active">
                                        <div dangerouslySetInnerHTML={{ __html: iframeLink }} />
                                    </div>
                                </div>
                            </div>
                        )}

                        {videoType === 'video-file' && videoUrl && (
                            <div className="video-box">
                                 <video width="320" height="240" controls poster={posterImage}>
                                  <source src={videoUrl} type="video/mp4" />
                                  Your browser does not support the video tag.
                                </video>
                            </div>
                        )}
                    </div>

                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 right-block wow fadeInRight" data-wow-delay="0.2s">
                        <div className="textarea">
                            {data.heading && (
                                <div className="block-title">
                                    <h2>{data.heading}</h2>
                                </div>
                            )}

                            <div className="textbox entry-content">
                                {data.content ? (
                                    <div dangerouslySetInnerHTML={{ __html: data.content }} />
                                ) : data.points ? (
                                    <ul>
                                        {data.points.map((point, index) => (
                                            <li key={index}><span>{point}</span></li>
                                        ))}
                                    </ul>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClinicVideo;
