'use client';

import React, { useEffect, useRef } from 'react';

const GoogleReviews = ({ data }) => {
    // Standard Visibility Guard: Hide if script/data is missing
    if (!data || !data.reviewScript) return null;

    const containerRef = useRef(null);

    // Extract the script content or iframe if necessary
    const sectionTitle = data.sectionTitle || "Google Reviews";
    const scriptContent = data.reviewScript;

    useEffect(() => {
        // If the script contains <script> tags, we might need to manually re-inject them 
        // to ensure they execute in React.
        if (typeof window !== 'undefined' && containerRef.current) {
            const scripts = containerRef.current.getElementsByTagName('script');
            for (let i = 0; i < scripts.length; i++) {
                const oldScript = scripts[i];
                const newScript = document.createElement('script');
                
                // Copy all attributes
                for (let j = 0; j < oldScript.attributes.length; j++) {
                    const attr = oldScript.attributes[j];
                    newScript.setAttribute(attr.name, attr.value);
                }
                
                // Copy internal content
                newScript.appendChild(document.createTextNode(oldScript.innerHTML));
                
                // Replace
                oldScript.parentNode.replaceChild(newScript, oldScript);
            }
        }
    }, [scriptContent]);

    return (
        <section className="testimonial-section google-reviews-section ptb-60 bg4 relative">
            <div className="parallelogram_shape">
                <span className="shape_1"></span>
                <span className="shape_2"></span>
                <span className="shape_3"></span>
            </div>
            <div className="container">
                <div className="block-title text-center mb-40 wow fadeInUp">
                    <div className="small-title text-uppercase mb-0" dangerouslySetInnerHTML={{ __html: sectionTitle }} />
                </div>
                
                <div 
                    ref={containerRef}
                    className="google-reviews-container wow fadeInUp" 
                    data-wow-delay="0.3s"
                    dangerouslySetInnerHTML={{ __html: scriptContent }}
                />
            </div>
        </section>
    );
};

export default GoogleReviews;
