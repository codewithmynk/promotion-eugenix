'use client';

import React from 'react';
import Image from 'next/image';

const HairLossSolution = ({ data }) => {
    if (!data) return null;

    const title = data.title || data.heading;
    const blocks = data.blocks || data.items || [];
    const buttonLabel = data.button_label;
    const buttonLink = data.button_link;

    return (
        <>
            <div className="ptb-30 xs-hide"></div>
            <section className="hair-ls-section bg1 ptb-60">
                <div className="wst-grid-particles">
                    <div className="row">
                        <div className="col-md-2 wst-grid-line d-flex"></div>
                        <div className="col-md-2 wst-grid-line d-flex"></div>
                        <div className="col-md-2 wst-grid-line d-flex"></div>
                        <div className="col-md-2 wst-grid-line d-flex"></div>
                        <div className="col-md-2 wst-grid-line d-flex"></div>
                        <div className="col-md-2 wst-grid-line d-flex"></div>
                    </div>
                </div>
                <div className="shape_star"></div>
                <div className="container relative">
                    {title && (
                        <div className="block-title text-center ptb-20 pt-0 wow fadeInUp" data-wow-delay="0.2s">
                            <h2 className="text-white">{title}</h2>
                        </div>
                    )}
                    
                    <div className="hair-ls-block">
                        {blocks.map((item, index) => (
                            <div className="row v-center" key={index}>
                                <div className="col-lg-7 col-md-6 col-sm-12 col-xs-12 left-block">
                                    {item.title && <h4>{item.title}</h4>}
                                    <div dangerouslySetInnerHTML={{ __html: item.content || item.text }} />
                                </div>
                                <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12 right-block">
                                    <div className="imgbox">
                                        <Image 
                                            src={item.image || item.img} 
                                            alt={item.title || "Hair Loss Solution"} 
                                            width={600}
                                            height={400}
                                            style={{ height: 'auto', width: 'auto' }}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {buttonLabel && buttonLink && (
                        <div className="btnbox d-flex text-center ptb-30">
                            <a href={buttonLink} className="btn white-btn big ml-auto mr-auto">
                                <span>{buttonLabel} <i className="las la-arrow-right"></i></span>
                            </a>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default HairLossSolution;
