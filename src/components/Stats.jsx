'use client';

import React from 'react';

const Stats = ({ data }) => {
    if (!data || (!data.items || data.items.length === 0)) return null;
    // Strict mapping to PHP API (eugenix-headless-api.php)
    const statsList = data.items || [];
    const bgImage = data.backgroundImage || "https://promotion.eugenixhairsciences.com/bhubaneswar/wp-content/themes/eugenix/assets/images/pattern-bg.png";

    return (
        <section className="counter-section counter-block ptb-40" style={{ position: 'relative' }}>
            <div 
                className="bg-img" 
                style={{ 
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `url('${bgImage}') no-repeat center`,
                    backgroundSize: 'cover',
                    zIndex: 0
                }}
            ></div>

            <div className="container relative">
                {data.sectionTitle && (
                    <div className="block-title text-center mb-40 wow fadeInUp">
                        <h2 dangerouslySetInnerHTML={{ __html: data.sectionTitle }} />
                    </div>
                )}
                <div className="counter-list d-flex">
                    {statsList.map((stat, index) => {
                        // Based on front-page.php logic where index '5' (which is the 5th item, i.e., index 4) gets standard span
                        const isStaticSpan = (index === 4);
                        
                        return (
                            <div key={index} className="items">
                                <div className="card-counter d-flex v-center">
                                    {stat.icon && (
                                        <i className="iconbox d-flex v-center j-center">
                                            <img src={stat.icon} alt={stat.label} />
                                        </i>
                                    )}

                                    <div className="textbox">
                                        <strong>
                                            {isStaticSpan ? (
                                                <span>{stat.count}</span>
                                            ) : (
                                                <span className="timer" data-to={stat.count} data-speed="1500">{stat.count}</span>
                                            )}
                                            {stat.symbol && (
                                                <span className="count-symbol">{stat.symbol}</span>
                                            )}
                                        </strong>

                                        {stat.label && (
                                            <p>{stat.label}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Stats;
