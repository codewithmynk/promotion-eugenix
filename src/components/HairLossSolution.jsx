'use client';

import React from 'react';

const HairLossSolution = ({ data }) => {
    if (!data || (!data.blocks || data.blocks.length === 0)) return null;

    // Live API: title, blocks[].content, button_label, button_link
    // New schema: sectionTitle, blocks[].description, buttonLabel, buttonLink
    const title = data.sectionTitle || data.title;
    const blocks = data.blocks || [];
    const buttonLabel = data.buttonLabel || data.button_label;
    const buttonLink = data.buttonLink || data.button_link || "#contact-section";

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
                            <h2 className="text-white mb-0">{title}</h2>
                        </div>
                    )}
                    
                    <div className="hair-ls-block">
                        {blocks.map((item, index) => (
                            <div className="row v-center" key={index}>
                                <div className="col-lg-7 col-md-6 col-sm-12 col-xs-12 left-block">
                                    {item.title && <h4>{item.title}</h4>}
                                    <div dangerouslySetInnerHTML={{ __html: item.description || item.content }} />
                                </div>
                                <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12 right-block">
                                    <div className="imgbox">
                                        <img 
                                            src={item.image} 
                                            alt={item.title || "Hair Loss Solution"}
                                            style={{ height: 'auto', width: 'auto', maxWidth: '100%' }}
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
