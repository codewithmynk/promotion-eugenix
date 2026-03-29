'use client';

import React from 'react';

const Footer = ({ data }) => {
    return (
        <footer id="Footer" className="footer">
            <div className="footer-bottom relative bg1">
                <div className="container">
                    <div className="f-bottom-inner text-center ptb-40">
                        <p className="mb-0 text-white">© {new Date().getFullYear()} Eugenix Hair Sciences&nbsp;Pvt&nbsp;Ltd.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
