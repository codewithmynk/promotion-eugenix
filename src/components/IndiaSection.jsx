'use client';

import React from 'react';

const IndiaSection = ({ data }) => {
    if (!data || !data.items || data.items.length === 0) return null;

    return (
        <section className="india-section bg4 ptb-60 shadow-none">
            <div className="container relative">
                {data.items.map((item, index) => (
                    <div key={index} className="row india-inner d-flex v-center mb-60 last-mb-0">
                        <div className={`col-lg-6 col-md-6 col-sm-12 col-xs-12 left-block wow fadeInLeft ${index % 2 !== 0 ? 'order-lg-2' : ''}`} data-wow-delay="0.2s">
                            <div className="india-imgbox">
                                <img src={item.image} alt={item.title} className="img-fluid" />
                            </div>
                        </div>
                        <div className={`col-lg-6 col-md-6 col-sm-12 col-xs-12 right-block wow fadeInRight ${index % 2 !== 0 ? 'order-lg-1' : ''}`} data-wow-delay="0.4s">
                            <div className="india-text">
                                <div className="block-title">
                                    <h2 dangerouslySetInnerHTML={{ __html: item.title }} />
                                </div>
                                <div className="entry-content" dangerouslySetInnerHTML={{ __html: item.description }} />
                                
                                {(item.buttonLabel && item.buttonLink) && (
                                    <div className="btnbox pt-20">
                                        <a href={item.buttonLink} className="btn primary">
                                            <span>{item.buttonLabel} <i className="las la-arrow-right"></i></span>
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default IndiaSection;
