'use client';

import React from 'react';

const Doctors = ({ data }) => {
    if (!data || (!data.items || data.items.length === 0)) return null;
    const docList = data.items || [];
    const sectionTitle = data.sectionTitle || "Meet Our Doctors";
    const sectionDesc = data.description || "At Eugenix, we have perfected the delicate art of Hair Restoration owing to two decades of research and innovation.";

    return (
        <section className="team-section bg4 ptb-60">
            <div className="bg-img pattern-bg before-none"></div>
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
                                {doc.image && (
                                    <i className="imgbox">
                                        <img src={doc.image} alt={doc.name} style={{ height: 'auto', width: 'auto', maxWidth: '100%' }} />
                                    </i>
                                )}
                                <div className="textbox">
                                    {doc.name && <h4>{doc.name}</h4>}
                                    {doc.qualifications && <p dangerouslySetInnerHTML={{ __html: doc.qualifications }}></p>}
                                </div>
                                {doc.buttonLabel && doc.buttonLink && (
                                    <div className="btnbox mt-auto">
                                        <a className="appointment-button" href={doc.buttonLink}>
                                            <i className="las la-headset"></i><span>{doc.buttonLabel}</span>
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
