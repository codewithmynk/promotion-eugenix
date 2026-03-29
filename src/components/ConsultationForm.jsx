'use client';
import React, { useState, useEffect, useRef } from 'react';

const ConsultationForm = ({ data }) => {
    const sectionTitle = data?.section_title || "Get Free Consultation";
    const sectionText = data?.section_text || "";
    const sectionImage = data?.section_image || "/bhubaneswar/react/assets/images/imgi_52_iStock-951021682.png";
    const formScript = data?.form_script || "";

    const formRef = useRef(null);
    const [formData, setFormData] = useState({ name: '', phone: '', email: '' });

    // Handle dynamic script execution for Bitrix24 or similar forms
    useEffect(() => {
        if (formScript && formRef.current) {
            // Clear existing form in the container if we have a script
            formRef.current.innerHTML = formScript;
            
            // Re-execute scripts found in the injected HTML
            const scripts = formRef.current.getElementsByTagName('script');
            for (let i = 0; i < scripts.length; i++) {
                const script = document.createElement('script');
                if (scripts[i].src) {
                    script.src = scripts[i].src;
                    script.async = true;
                } else {
                    script.textContent = scripts[i].textContent;
                }
                document.body.appendChild(script);
            }
        }
    }, [formScript]);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you! Your request has been submitted.');
    };

    return (
        <section className="contact-section map-bg ptb-60" id="contact-section">
            <div className="contact-imgbox wow fadeInLeft" data-wow-delay="0.4s">
                <img src={sectionImage} alt="Free Consultation" />
            </div>

            <div className="container relative">
                <div className="row contact-inner">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ml-auto wow fadeInRight" data-wow-delay="0.4s">
                        <div className="contact-block relative">
                            <div className="sigma_dots"></div>
                            <div className="shape_star"></div>

                            <div className="block-title">
                                <h2><strong dangerouslySetInnerHTML={{ __html: sectionTitle }}></strong></h2>
                                {sectionText && <p>{sectionText}</p>}
                            </div>

                            <div className="form-block ptb-20 pb-0">
                                <div id="int_form" ref={formRef}>
                                    {!formScript && (
                                        <div className="b24-form consult-form">
                                            <form onSubmit={handleSubmit}>
                                                <div className="b24-form-field b24-form-control-string">
                                                    <div className="b24-form-control-container">
                                                        <input
                                                            name="name"
                                                            type="text"
                                                            className="b24-form-control form-control"
                                                            placeholder="Name *"
                                                            onChange={handleChange}
                                                            required
                                                        />
                                                    </div>
                                                </div>

                                                <div className="b24-form-field b24-form-control-string">
                                                    <div className="b24-form-control-container">
                                                        <input
                                                            name="phone"
                                                            type="tel"
                                                            className="b24-form-control form-control"
                                                            placeholder="Phone Number *"
                                                            onChange={handleChange}
                                                            required
                                                        />
                                                    </div>
                                                </div>

                                                <div className="b24-form-field b24-form-control-string">
                                                    <div className="b24-form-control-container">
                                                        <input
                                                            name="email"
                                                            type="email"
                                                            className="b24-form-control form-control"
                                                            placeholder="E-mail *"
                                                            onChange={handleChange}
                                                            required
                                                        />
                                                    </div>
                                                </div>

                                                <div className="b24-form-field b24-form-control-file">
                                                    <div className="b24-form-control-container">
                                                        <label className="b24-form-control-label">Scalp Images</label>
                                                        <input type="file" className="form-control" />
                                                        <div className="b24-form-control-comment small text-muted">Please share your pictures showcasing the front, sides and back of the scalp</div>
                                                    </div>
                                                </div>

                                                <div className="b24-form-btn-container">
                                                    <div className="b24-form-btn-block">
                                                        <button type="submit" className="btn primary b24-form-btn">
                                                            Book Now
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default ConsultationForm;
