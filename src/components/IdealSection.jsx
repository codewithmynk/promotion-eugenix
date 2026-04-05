'use client';

import React from 'react';

const IdealSection = ({ data }) => {
    // Hide if no core content
    if (!data || (!data.sectionTitle && !data.description)) return null;

    return (
        <section className="ideal-section ptb-60 shadow-none">
            <div className="container relative">
                <div className="row ideal-inner d-flex v-center">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 left-block wow fadeInLeft" data-wow-delay="0.2s">
                        <div className="ideal-imgbox">
                            <img src={data.image} alt={data.sectionTitle} className="img-fluid" />
                        </div>
                    </div>
                    
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 right-block wow fadeInRight" data-wow-delay="0.4s">
                        <div className="ideal-text">
                            <div className="block-title">
                                <h2 dangerouslySetInnerHTML={{ __html: data.sectionTitle || "The Ideal Candidate" }} />
                            </div>
                            <div className="entry-content" dangerouslySetInnerHTML={{ __html: data.description }} />
                            
                            {(data.buttonLabel && data.buttonLink) && (
                                <div className="btnbox pt-20">
                                    <a href={data.buttonLink} className="btn primary big">
                                        <span>{data.buttonLabel} <i className="las la-arrow-right"></i></span>
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IdealSection;
