'use client';

import React from 'react';

const Contact = React.memo(({ data, config }) => {
    if (!data || (!data.addressBlock && !data.phone && !data.email)) return null;

    const contactTitle = data.sectionTitle || "Contact Us";
    const addressBlock = (Array.isArray(data.addressBlock) && data.addressBlock.length > 0) ? data.addressBlock : [];
    const phone = data.phone;
    const email = data.email;
    const workingHours = data.workingHours;
    const mapIframe = data.mapIframeLink;
    const socialMedia = config?.socialMedia || [];
    const socialMediaTitle = config?.socialMediaSectionTitle || "Follow Us";

    return (
        <section className="contact-section ptb-100 pt-0">
            <div className="address-block">
                <div className="container d-flex h-100 relative">
                    <div className="address-block-inner ml-auto h-100 relative wow fadeInRight" data-wow-delay="0.4s">
                        {contactTitle && <h4>{contactTitle}</h4>}

                        {addressBlock.length > 0 && addressBlock.map((item, index) => (
                            <div key={index} className="cont-items address d-flex mb-4">
                                <span className="iconbox"><i className="las la-street-view"></i></span>
                                <div className="location" dangerouslySetInnerHTML={{ __html: item.address }} />
                            </div>
                        ))}

                        {phone && (
                            <div className="cont-items email d-flex">
                                <span className="iconbox"><i className="las la-tty"></i></span>
                                <p><strong>Phone Number:</strong><br /><a href={`tel:${phone.replace(/\s+/g, '')}`}>{phone}</a></p>
                            </div>
                        )}

                        {email && (
                            <div className="cont-items phone d-flex">
                                <span className="iconbox"><i className="las la-envelope"></i></span>
                                <p><strong>Email:</strong><br /><a href={`mailto:${email}`}>{email}</a></p>
                            </div>
                        )}

                        {workingHours && (
                            <div className="cont-items hours d-flex">
                                <span className="iconbox"><i className="las la-clock"></i></span>
                                <p><strong>Working Hours:</strong><br />{workingHours}</p>
                            </div>
                        )}

                        <div className="shape_star"></div>
                        <div className="three-line"></div>
                    </div>

                    {(socialMedia && socialMedia.length > 0) && (
                        <div className="social-block ptb-30 d-flex v-center">
                            {socialMediaTitle && <h6 className="mb-0 mr-2">{socialMediaTitle}</h6>}
                            <div className="social-media d-flex v-center">
                                {socialMedia.map((sm, index) => (
                                    <a key={index} href={sm.link} target="_blank" rel="noopener noreferrer">
                                        <i className={`lab la-${sm.label?.toLowerCase()}`}></i>
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {mapIframe && (
                <div className="mapbox" dangerouslySetInnerHTML={{ __html: mapIframe }} />
            )}
        </section>
    );
});

export default Contact;
