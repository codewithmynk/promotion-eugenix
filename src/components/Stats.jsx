'use client';

import React from 'react';
import Image from 'next/image';

const Stats = ({ data }) => {
    const statsList = data?.items || (Array.isArray(data) ? data : []);
    const sectionTitle = data?.section_title || "";
    
    return (
        <section 
            id="custom-stats-section"
            className="counter-section" 
            style={{ position: 'relative', padding: '80px 0', overflow: 'hidden', backgroundColor: '#000' }}
        >
            <style dangerouslySetInnerHTML={{ __html: `
                #custom-stats-section { color: white !important; }
                #custom-stats-section .stat-item { flex: 1; }
                #custom-stats-section .block-title .small-title { color: #fff !important; }
                @media (max-width: 767px) {
                    #custom-stats-section .stats-container { flex-direction: column !important; gap: 40px !important; align-items: flex-start !important; padding-left: 20px; }
                    #custom-stats-section .stat-item-inner { flex-direction: row !important; text-align: left !important; gap: 24px !important; }
                }
                @media (min-width: 768px) {
                    #custom-stats-section .stats-container { flex-direction: row !important; justify-content: center !important; gap: 40px !important; }
                    #custom-stats-section .stat-item-inner { flex-direction: column !important; text-align: center !important; gap: 12px !important; }
                }
            `}} />

            {/* Background Image with Dark Overlay */}
            <div 
                style={{ 
                    position: 'absolute',
                    inset: 0,
                    zIndex: 0,
                    backgroundImage: "url('/bhubaneswar/react/assets/images/funfact-img.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed'
                }}
            />
            <div style={{ position: 'absolute', inset: 0, zIndex: 1, backgroundColor: 'rgba(0,0,0,0.7)' }} />

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                {sectionTitle && (
                    <div className="block-title text-center wow fadeInUp mb-12" data-wow-delay="0.2s">
                        <div className="small-title uppercase">{sectionTitle}</div>
                    </div>
                )}
                <div className="stats-container" style={{ display: 'flex' }}>
                    {statsList.map((stat, index) => (
                        <div key={index} className="stat-item" style={{ width: '100%' }}>
                            <div className="stat-item-inner" style={{ display: 'flex', alignItems: 'center' }}>
                                <div style={{ flexShrink: 0, width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <img 
                                        src={stat.icon} 
                                        alt={stat.label} 
                                        style={{ 
                                            maxWidth: '100%', 
                                            maxHeight: '100%', 
                                            objectFit: 'contain',
                                            filter: 'brightness(0) invert(1)',
                                            opacity: 0.9
                                        }} 
                                    />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <h3 style={{ 
                                        color: 'white', 
                                        fontSize: '28px', 
                                        fontWeight: '700', 
                                        lineHeight: '1', 
                                        margin: '0 0 4px 0',
                                        textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                                    }}>
                                        {stat.count} {stat.symbol}
                                    </h3>
                                    <p style={{ 
                                        color: 'rgba(255,255,255,0.8)', 
                                        fontSize: '14px', 
                                        fontWeight: '500', 
                                        lineHeight: '1.2', 
                                        margin: 0 
                                    }}>
                                        {stat.label}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
