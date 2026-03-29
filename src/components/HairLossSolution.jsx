'use client';

import React from 'react';
import Image from 'next/image';

const HairLossSolution = ({ data }) => {
    if (!data) return null;

    // Support both new API structure and old JSON structure
    const title = data.title || data.heading;
    const blocks = data.blocks || data.items || [];
    const buttonLabel = data.button_label;
    const buttonLink = data.button_link;

    return (
        <section className="hair-ls-section bg1 ptb-60">
            <div className="container relative">
                <div className="block-title text-center ptb-20 pt-0 wow fadeInUp" data-wow-delay="0.2s">
                    <h2 className="text-white">{title}</h2>
                </div>
                
                <div className="hair-ls-block">
                    {blocks.map((item, index) => (
                        <div className="row v-center mb-12 last:mb-0" key={index}>
                            <div className="col-lg-7 col-md-6 col-sm-12 col-xs-12 left-block">
                                <h4 className="text-white text-2xl font-bold mb-4">{item.title}</h4>
                                <div className="text-white/80 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.content || item.text }} />
                            </div>
                            <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12 right-block">
                                <div className="imgbox rounded-2xl overflow-hidden shadow-2xl transition-transform hover:scale-105 duration-500">
                                    <img 
                                        src={item.image || item.img} 
                                        alt={item.title} 
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {buttonLabel && buttonLink && (
                    <div className="text-center mt-12">
                        <a href={buttonLink} className="theme-btn btn-style-one">
                            <span className="btn-title">{buttonLabel}</span>
                        </a>
                    </div>
                )}
            </div>
        </section>
    );
};

export default HairLossSolution;
