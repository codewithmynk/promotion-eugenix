'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '../assets/images/imgi_1_sitelogo.png';

const Header = ({ data }) => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0 && window.scrollY < 800) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Clean up
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Dynamic values with fallbacks
    const logoUrl = data?.header_logo || logo;
    const whatsAppNumber = data?.whatsapp_number || '919998199981';
    const mobileNumber = data?.mobile_number || '+91 9998199981';
    // Fallback texts
    const default_message = "Hello! Can you provide me more information on this?";
    const encoded_message = encodeURIComponent(default_message);
    const btnLabel = data?.header_button_label || 'FREE Consultation';
    const btnLink = data?.header_button_link || '#consultation';

    return (
        <header id="Header" className={`header trans ${isSticky ? 'darkHeader-sticky fadeInDown animated' : ''}`}>
            <div className="container">
                <div className="header-inner d-flex v-center trans">
                    <div className="header-left d-flex v-center mr-auto">
                        <h1 className="site-logo trans">
                            <a href="/" title="Eugenix Hair Sciences Pvt Ltd.">
                                <Image 
                                    src={logoUrl} 
                                    alt="Eugenix Hair Sciences Pvt Ltd." 
                                    title="Eugenix Hair Sciences Pvt Ltd." 
                                    priority={true} 
                                    width={240} 
                                    height={60} 
                                    id="header-logo"
                                />
                            </a>
                        </h1>
                    </div>

                    <div className="header-right ml-auto d-flex v-center">
                        <div className="head-right-top trans mr-3">
                            <ul className="head-links d-flex v-center">
                                <li>
                                    <a href={`https://api.whatsapp.com/send?phone=${whatsAppNumber}&text=${encoded_message}`} target="_blank" rel="noopener noreferrer">
                                        <i className="lab la-whatsapp"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href={`tel:${mobileNumber.replace(/\s+/g, '')}`}>
                                        <i className="las la-phone-volume"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="head-right-inn d-flex v-center">
                            <div className="nav-main">
                                <nav></nav>
                            </div>

                            <div className="head-btnbox">
                                <a className="btn primary small" href={btnLink}>
                                    <span>
                                        <span dangerouslySetInnerHTML={{ __html: btnLabel }} /> 
                                        <i className="las la-arrow-right"></i>
                                    </span>
                                </a>
                            </div>
                        </div>

                        <div className="mobi-head-links">
                            <ul className="head-icon-link d-flex v-center list-unstyled mb-0">
                                <li>
                                    <a href={`https://api.whatsapp.com/send?phone=${whatsAppNumber}&text=${encoded_message}`} target="_blank" rel="noopener noreferrer">
                                        <i className="lab la-whatsapp"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href={`tel:${mobileNumber.replace(/\s+/g, '')}`}>
                                        <i className="las la-phone-volume"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Menu Icon */}
                        <div className="mobi-iconbox mobilemenuicon" style={{ display: 'none' }}>
                            <div className="menuicon d-flex">
                                <i className="icon-bar top-icon-bar">
                                   <span className="line"></span> 
                                </i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
