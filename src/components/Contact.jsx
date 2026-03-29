'use client';

import React from 'react';

const Contact = ({ data }) => {
    if (!data) return null;

    const contactTitle = data.contact_section_title || "Contact Us";
    const addressBlock = Array.isArray(data.address_block) ? data.address_block : [];
    const phone = data.clinic_number || "+91 8826473333";
    const email = data.email || "info@eugenix.in";
    const workingHours = data.working_hours || "Mon-Sun: 09:00 AM TO 09:00 PM";
    const mapIframe = data.map_iframe_link || `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3771.095302624525!2d72.833065!3d19.059547!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c91613ec0001%3A0xa2f258def56c897f!2sEugenix%20Hair%20Sciences!5e0!3m2!1sen!2sin!4v1686207204332!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
    const socialMedia = data.social_media || [];
    const socialMediaTitle = data.social_media_section_title || "Follow Us";

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
                                        <i className={`lab la-${sm.label}`}></i>
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
};

export default Contact;
