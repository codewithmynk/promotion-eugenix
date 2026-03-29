'use client';

import React from 'react';

const Stats = ({ data }) => {
    const statsList = data?.items || (Array.isArray(data) ? data : []);
    
    // Default background fallback
    const bgImage = data?.background_image || "/bhubaneswar/react/assets/images/funfact-img.jpg";

    return (
        <section className="counter-section counter-block ptb-40">
            <div 
                className="bg-img" 
                style={{ 
                    background: `url('${bgImage}') no-repeat center`,
                    backgroundSize: 'cover' 
                }}
            ></div>

            <div className="container relative">
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
