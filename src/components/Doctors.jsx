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
            <div className="three-line top-0"></div>
            <div className="three-line"></div>
            <div className="container relative">
                <div className="row team-list">
                    <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 left-block wow fadeInLeft" data-wow-delay="0.2s">
                        <div className="expert-block d-flex h-100">
                            <div className="block-title">
                                <h2>{sectionTitle}</h2>
                            </div>
                            <p>{sectionDesc}</p>
                        </div>
                    </div>

                    {docList.map((doc, idx) => (
                        <div key={idx} className="col-lg-4 col-md-6 col-sm-12 col-xs-12 items wow fadeInLeft" data-wow-delay={idx === 0 ? "0.1s" : "0.2s"}>
                            <div className="card-team d-flex">
                                <i className="imgbox">
                                    <Image src={doc.img} alt={doc.name} width={300} height={300} />
                                </i>
                                <div className="textbox">
                                    <h4><strong>{doc.name}</strong></h4>
                                    <p dangerouslySetInnerHTML={{ __html: doc.qualifications }}></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Doctors;
