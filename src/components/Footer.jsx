'use client';

import React from 'react';

const Footer = ({ data }) => {
    // Dynamic values with fallbacks
    const mobileNumber = data?.mobile_number || '+91 9998199981';
    const email = data?.email || 'info@eugenix.in';
    const officeTime = data?.office_time || 'Mon-Sun: 9:00 AM TO 9:00 PM';
    const officeAddress = data?.office_address || 'M -37, Baramunda Housing Colony, Nayapalli, Bhubaneswar, Odisha, India';

    return (
        <>
            {/* Contact Section (Address & Map) */}
            <section className="contact-section ptb-100 pt-0">
                <div className="address-block">
                    <div className="container d-flex h-100 relative">
                        <div className="address-block-inner ml-auto h-100 relative wow fadeInRight" data-wow-delay="0.4s">
                            <h4>Contact Us</h4>

                             <div className="cont-items address d-flex">
                                 <span className="iconbox"><i className="las la-street-view"></i></span>
                                 <div className="location">
                                     <a href="https://maps.app.goo.gl/yYvS6A9oE1Z6a9u2a" target="_blank" rel="noopener noreferrer">
                                        <p><strong>Primary Office:</strong><br />{officeAddress}</p>
                                     </a>
                                 </div>
                             </div>

                            <div className="cont-items email d-flex">
                                <span className="iconbox"><i className="las la-tty"></i></span>
                                <p><strong>Phone Number:</strong><br /><a href={`tel:${mobileNumber.replace(/\s+/g, '')}`}>{mobileNumber}</a></p>
                            </div>

                            <div className="cont-items phone d-flex">
                                <span className="iconbox"><i className="las la-envelope"></i></span>
                                <p><strong>Email:</strong><br /><a href={`mailto:${email}`}>{email}</a></p>
                            </div>

                            <div className="cont-items hours d-flex">
                                <span className="iconbox"><i className="las la-clock"></i></span>
                                <p><strong>Working Hours:</strong><br />{officeTime}</p>
                            </div>

                            <div className="shape_star"></div>
                            <div className="three-line"></div>
                        </div>
                    </div>
                </div>

                <div className="mapbox">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.464265834729!2d85.79540067523641!3d20.28104158118769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909c3bf212aef%3A0x3307461a8df9638e!2sEugenix%20Hair%20Sciences!5e0!3m2!1sen!2sin!4v1761373958111!5m2!1sen!2sin"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>

            {/* Actual Footer */}
            <footer id="Footer" className="footer">
                <div className="footer-bottom relative bg1">
                    <div className="container">
                        <div className="f-bottom-inner text-center ptb-40">
                            <p className="mb-0 text-white">© {new Date().getFullYear()} Eugenix Hair Sciences&nbsp;Pvt&nbsp;Ltd.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
