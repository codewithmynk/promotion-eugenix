'use client';

import React from 'react';
import Image from 'next/image';

const Doctors = ({ data }) => {
    const docList = data?.items || (Array.isArray(data) ? data : []);
    const sectionTitle = data?.section_title || "Meet Our Doctors";
    const sectionDesc = data?.description || "After pioneering Direct Hair Transplant (DHT) technology and introducing stem cell research, Eugenix has become the leading Hair Restoration clinic in the world.";

    return (
        <section className="team-section bg4 ptb-60">
            <div className="bg-img pattern-bg before-none" style={{ background: "url('/bhubaneswar/react/assets/images/speckle.jpg') repeat center" }}></div>
            <div className="three-line top"></div>
            <div className="three-line"></div>
            <div className="container relative">
                <div className="row team-list">
                    {(sectionTitle || sectionDesc) && (
                        <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 left-block wow fadeInLeft" data-wow-delay="0.2s">
                            <div className="expert-block d-flex h-100">
                                {sectionTitle && (
                                    <div className="block-title">
                                        <h2>{sectionTitle}</h2>
                                    </div>
                                )}
                                <div dangerouslySetInnerHTML={{ __html: sectionDesc }}></div>
                            </div>
                        </div>
                    )}

                    {docList.map((doc, idx) => (
                        <div key={idx} className={`col-lg-4 col-md-6 col-sm-12 col-xs-12 items wow fadeInUp`} data-wow-delay={`${0.2 + (idx * 0.1)}s`}>
                            <div className="card-team d-flex">
                                {doc.img && (
                                    <i className="imgbox">
                                        <Image src={doc.img} alt={doc.name} width={300} height={300} style={{ height: 'auto', width: 'auto' }} />
                                    </i>
                                )}
                                <div className="textbox">
                                    {doc.name && <h4>{doc.name}</h4>}
                                    {doc.qualifications && <p dangerouslySetInnerHTML={{ __html: doc.qualifications }}></p>}
                                </div>
                                {doc.button_label && doc.button_link && (
                                    <div className="btnbox mt-auto">
                                        <a className="appointment-button" href={doc.button_link}>
                                            <i className="las la-headset"></i><span>{doc.button_label}</span>
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Doctors;
