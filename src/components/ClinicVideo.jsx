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
