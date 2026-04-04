'use client';

import React from 'react';

const IdealSection = ({ data }) => {
    // Hide if no core content
    if (!data || (!data.sectionTitle && !data.description)) return null;

    return (
        <section className="ideal-section ptb-100 bg-dark text-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="bg-shape" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '50%', background: 'linear-gradient(to top, rgba(128, 0, 64, 0.1), transparent)', pointerEvents: 'none' }}></div>
            
            <div className="container relative">
                <div className="row v-center">
                    <div className="col-lg-6 mb-40 wow fadeInLeft">
                        <div className="ideal-image relative p-10" style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '25px' }}>
                            <img 
                                src={data.image} 
                                alt={data.sectionTitle} 
                                style={{ width: '100%', height: 'auto', borderRadius: '20px', display: 'block' }}
                            />
                            {/* Glassmorphism Badge */}
                            <div className="accent-badge" style={{ position: 'absolute', bottom: '30px', right: '-20px', padding: '15px 25px', background: 'rgba(128, 0, 64, 0.8)', backdropFilter: 'blur(10px)', borderRadius: '10px', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
                                <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Top Rated Clinic</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-6 mb-40 wow fadeInRight">
                        <div className="ideal-content pl-lg-5">
                            <h2 className="mb-30" style={{ fontSize: '2.8rem', fontWeight: '800' }} dangerouslySetInnerHTML={{ __html: data.sectionTitle || "The Ideal Candidate" }} />
                            <div 
                                className="mb-40 ideal-description" 
                                style={{ fontSize: '1.1rem', line_height: 1.8, color: 'rgba(255,255,255,0.8)' }}
                                dangerouslySetInnerHTML={{ __html: data.description }} 
                            />
                            
                            {data.buttonLabel && data.buttonLink && (
                                <a href={data.buttonLink} className="btn white big shadow-lg">
                                    <span>{data.buttonLabel} <i className="las la-arrow-right"></i></span>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .ideal-section {
                    background: #111;
                }
                .ideal-description :global(ul) {
                    list-style: none;
                    padding: 0;
                }
                .ideal-description :global(li) {
                    position: relative;
                    padding-left: 25px;
                    margin-bottom: 10px;
                }
                .ideal-description :global(li:before) {
                    content: '✓';
                    position: absolute;
                    left: 0;
                    color: #800040;
                    font-weight: bold;
                }
            `}</style>
        </section>
    );
};

export default IdealSection;
