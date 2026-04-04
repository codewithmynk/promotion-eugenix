'use client';

import React from 'react';

const IndiaSection = ({ data }) => {
    if (!data || !data.items || data.items.length === 0) return null;

    return (
        <section className="india-section ptb-80 relative overflow-hidden">
            {/* Background Accent */}
            <div className="section-accent" style={{ position: 'absolute', top: '-100px', right: '-100px', width: '300px', height: '300px', background: 'rgba(128, 0, 64, 0.03)', borderRadius: '50%' }}></div>
            
            <div className="container relative">
                <div className="block-title text-center mb-60 wow fadeInUp">
                    <h2 dangerouslySetInnerHTML={{ __html: data.sectionTitle || "Hair Transplant in India" }} className="text-uppercase" />
                    <div className="title-sep mx-auto mt-20" style={{ width: '70px', height: '3px', background: '#800040' }}></div>
                </div>

                <div className="india-content-list">
                    {data.items.map((item, index) => (
                        <div key={index} className="india-item mb-60 wow fadeInUp" data-wow-delay={`${index * 0.1}s`}>
                            <div className="row v-center">
                                <div className={`col-lg-6 mb-30 ${index % 2 !== 0 ? 'order-lg-2' : ''}`}>
                                    <div className="india-img shadow-lg" style={{ borderRadius: '20px', overflow: 'hidden' }}>
                                        <img src={item.image} alt={item.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
                                    </div>
                                </div>
                                <div className={`col-lg-6 mb-30 ${index % 2 !== 0 ? 'order-lg-1' : ''}`}>
                                    <div className="india-text pl-lg-4 pr-lg-4">
                                        <h3 className="mb-20 color-primary" dangerouslySetInnerHTML={{ __html: item.title }} />
                                        <div className="mb-30 text-content" dangerouslySetInnerHTML={{ __html: item.description }} />
                                        
                                        {/* Dynamic Contact info per item if available */}
                                        {(item.email || item.mobile) && (
                                            <div className="contact-info-minimal mb-30 p-20 bg-light" style={{ borderRadius: '10px' }}>
                                                {item.email && <p className="mb-10"><strong>Email:</strong> <a href={`mailto:${item.email}`} className="text-dark">{item.email}</a></p>}
                                                {item.mobile && <p className="mb-0"><strong>Mobile:</strong> <a href={`tel:${item.mobile}`} className="text-dark">{item.mobile}</a></p>}
                                            </div>
                                        )}

                                        {item.buttonLabel && item.buttonLink && (
                                            <a href={item.buttonLink} className="btn primary big">
                                                <span>{item.buttonLabel} <i className="las la-arrow-right"></i></span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <style jsx>{`
                .color-primary { color: #800040; }
                .text-content :global(p) { line-height: 1.8; color: #555; font-size: 1.05rem; }
            `}</style>
        </section>
    );
};

export default IndiaSection;
