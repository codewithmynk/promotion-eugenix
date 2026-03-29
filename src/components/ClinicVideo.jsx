'use client';

import React from 'react';
import Image from 'next/image';
import whatsappImg from '../assets/images/imgi_10_WhatsApp-Image-2025-01-11-at-10.44.03-AM.png';

const ClinicVideo = ({ data }) => {
    if (!data) return null;

    return (
        <section id="clinicVideo" className="clinicvideo-section ptb-80 _mPS2id-t">
            <div className="container relative">
                <div className="block-title row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 left-block wow fadeInLeft" data-wow-delay="0.2s">
                        <div className="small-title uppercase">{data.heading}</div>
                    </div>
                </div>
                <div className="row v-center clinicvideo-inner">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 left-block wow fadeInLeft" data-wow-delay="0.2s">
                        <div className="video-box">
                             <video width="100%" height="auto" controls poster="/bhubaneswar/react/assets/images/imgi_10_WhatsApp-Image-2025-01-11-at-10.44.03-AM.png">
                              <source src={data.url} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 right-block wow fadeInRight" data-wow-delay="0.2s">
                        <div className="textarea">
                            <div className="block-title">
                                <h2>{data.heading}</h2>
                            </div>

                            <div className="textbox entry-content">
                                <ul>
                                    {data.points.map((point, index) => (
                                        <li key={index}><span style={{ fontWeight: 400 }}>{point}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClinicVideo;
