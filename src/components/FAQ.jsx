'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = ({ data }) => {
    // Default open first item like in WP theme if not specified otherwise
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    // Live API returns 'list' + 'title'; newer schema uses 'items' + 'sectionTitle'
    const displayFaqs = data?.items || data?.list || [];
    const title = data?.sectionTitle || data?.title || "Frequently Asked Questions";

    if (!displayFaqs || displayFaqs.length === 0) return null;

    return (
        <section className="faq-section ptb-60">
            <div className="container relative">
                
                {title && (
                    <div className="block-title text-center">
                        <div className="small-title text-uppercase mb-0" dangerouslySetInnerHTML={{ __html: title }} />
                    </div>
                )}

                <div id="faqAccordion" className="faq-list ptb-20 pb-0">
                    {displayFaqs.map((faq, idx) => {
                        const isExpanded = activeIndex === idx;
                        return (
                            <div key={idx} className="faq-card wow fadeInUp" data-wow-delay="0.3s">
                                <h4
                                    className={`acc_trigger ${isExpanded ? '' : 'collapsed'}`}
                                    onClick={() => toggleFAQ(idx)}
                                    aria-expanded={isExpanded}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {faq.question}
                                </h4>
                                <AnimatePresence initial={false}>
                                    {isExpanded && (
                                        <motion.div 
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                                            style={{ overflow: 'hidden' }}
                                        >
                                            <div className="content-box entry-content">
                                                <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
