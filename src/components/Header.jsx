'use client';

import React from 'react';
import Image from 'next/image';
import logo from '../assets/images/imgi_1_sitelogo.png';

const Header = ({ data }) => {
    // Dynamic values with fallbacks
    const logoUrl = data?.header_logo || logo;
    const topBarText = data?.top_bar_text || "World's Best Hair Transplant Clinic for Repair & NW7 Cases";
    const whatsAppNumber = data?.whatsapp_number || '919998199981';
    const mobileNumber = data?.mobile_number || '+91 9998199981';
    const btnLabel = data?.header_button_label || 'FREE Consultation';
    const btnLink = data?.header_button_link || '#consultation';
    const mobileBtnLabel = data?.mobile_header_button_label || 'Get Free Consultation';
    const mobileBtnLink = data?.mobile_header_button_link || '#consultation';

    return (
        <header id="Header" className="header trans fadeInDown sticky top-0 bg-white z-[9999] shadow-sm">
            <div className="header-top bg-[#800040] py-2 hidden md:block">
                <div className="container text-center">
                    <p className="text-white text-sm font-medium mb-0">{topBarText}</p>
                </div>
            </div>
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
                                    width={180} 
                                    height={60} 
                                    style={{ height: 'auto', width: 'auto' }}
                                />
                            </a>
                        </h1>
                    </div>

                    <div className="header-right ml-auto d-flex">
                        <div className="head-right-top ml-auto trans">
                            <ul className="head-links d-flex v-center">
                                <li>
                                    <a href={`https://api.whatsapp.com/send?phone=${whatsAppNumber}&text=Hello%21+Can+you+share+more+information+on+this%3F`} target="_blank" rel="noopener noreferrer">
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

                        <div className="head-right-inn ml-auto d-flex v-center">
                            <div className="nav-main">
                                <nav></nav>
                            </div>

                            <div className="head-btnbox">
                                <a className="btn primary small __mPS2id _mPS2id-h" href={btnLink}>
                                    <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                                        <span dangerouslySetInnerHTML={{ __html: btnLabel }} />
                                        <i className="las la-arrow-right" style={{ marginLeft: "4px" }}></i>
                                    </span>
                                </a>
                            </div>
                        </div>

                        <div className="mobi-head-links md:hidden">
                            <div className="head-icon-link d-flex v-center">
                                <a href={`https://api.whatsapp.com/send?phone=${whatsAppNumber}&text=Hello%21+Can+you+share+more+information+on+this%3F`} target="_blank" rel="noopener noreferrer" className="mr-3">
                                    <i className="lab la-whatsapp text-2xl text-green-500"></i>
                                </a>
                                <a href={`tel:${mobileNumber.replace(/\s+/g, '')}`}>
                                    <i className="las la-phone-volume text-2xl text-blue-900"></i>
                                </a>
                            </div>
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
