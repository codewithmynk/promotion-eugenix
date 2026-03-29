'use client';

import React, { useState } from 'react';

const FAQS = [
    { question: "How do I choose the right clinic in Bhubaneswar?", answer: "Choose a reputable clinic with certified, experienced doctors or surgeons. Look for positive patient reviews on platforms like Google and ensure the clinic offers a clear, detailed explanation of their hair restoration treatments. It’s crucial to schedule an in-person consultation to discuss your specific needs and understand the clinic’s approach." },
    { question: "How do I find the best hair transplant surgeon in Bhubaneswar?", answer: "Research several surgeons by reviewing their credentials, experience, and genuine patient testimonials. It’s also important to examine before-and-after photos of their recent procedures to assess their expertise and results." },
    { question: "What is the cost of a hair transplant in Bhubaneswar?", answer: "The cost varies based on the technology used, the number of grafts required, and the clinic’s reputation. For an accurate quote, consult directly with the clinic." },
    { question: "What services are offered at your clinic in Bhubaneswar?", answer: "Our clinic provides a variety of services, including hair transplants, PRP (Platelet-Rich Plasma) therapy, hair loss consultations, and scalp treatments. We offer comprehensive hair care solutions using both surgical and non-surgical methods." },
    { question: "How do I book an appointment at your clinic in Bhubaneswar?", answer: "To book an appointment, contact us via phone, WhatsApp, email, or through our website. Our team will help you schedule a consultation at your convenience." }
];

const FAQ = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const displayFaqs = data?.list && data.list.length > 0 ? data.list : FAQS;
    const title = data?.title || "FAQs";

    return (
        <section className="faq-section ptb-60">
            <div className="container relative">
                <div className="block-title row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 left-block wow fadeInLeft text-center py-4" data-wow-delay="0.2s">
                        <div className="small-title mt-5 uppercase">{title}</div>
                    </div>
                </div>

                <div id="faqAccordion" className="faq-list ptb-20 pb-0">
                    {displayFaqs.map((faq, idx) => (
                        <div key={idx} className="faq-card wow fadeInUp" data-wow-delay="0.3s">
                            <h4
                                className={`acc_trigger ${activeIndex === idx ? '' : 'collapsed'}`}
                                onClick={() => toggleFAQ(idx)}
                                style={{ cursor: 'pointer' }}
                            >
                                {faq.question}
                            </h4>
                            <div className={`collapse ${activeIndex === idx ? 'show' : ''}`} style={{ display: activeIndex === idx ? 'block' : 'none' }}>
                                <div className="content-box entry-content p-4 bg-gray-50 rounded-b-lg">
                                    <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
