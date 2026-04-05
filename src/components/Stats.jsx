'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useInView, useSpring, useTransform, animate } from 'framer-motion';

const Counter = ({ value, duration = 2 }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const count = useSpring(0, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [display, setDisplay] = useState(0);

    useEffect(() => {
        if (inView) {
            count.set(parseFloat(value) || 0);
        }
    }, [inView, value, count]);

    useEffect(() => {
        return count.on("change", (latest) => {
            const valStr = String(value);
            if (valStr.includes('.')) {
                setDisplay(latest.toFixed(1));
            } else {
                setDisplay(Math.round(latest));
            }
        });
    }, [count, value]);

    return <span ref={ref}>{display}</span>;
};

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
                        <div className="small-title text-uppercase mb-0" dangerouslySetInnerHTML={{ __html: data.sectionTitle }} />
                    </div>
                )}
                <div className="counter-list d-flex">
                    {statsList.map((stat, index) => {
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
                                            <Counter value={stat.count} speed={1500} />
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
