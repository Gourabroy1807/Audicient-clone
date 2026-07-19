import React, { useState } from 'react';

interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        id: 'what-is-audicient',
        question: 'What is Audicient?',
        answer: 'Audicient is a white label music distribution platform for record labels, distributors, and music companies. Built on the technology of Armus Digital (a distribution company operating since 2020), Audicient lets you launch a fully branded distribution service under your own name, with DSP delivery to 100+ stores, royalty accounting, global payouts, analytics, smartlinks, and REST API access.'
    },
    {
        id: 'white-label-meaning',
        question: 'What does white label mean in music distribution?',
        answer: 'White label music distribution allows you to run your own distribution company under your own brand name, logo, custom domain, and color palette. Your artists interact directly with your branded portal, while Audicient operates behind the scenes managing DSP ingestions, catalog delivery, royalty calculations, and cloud infrastructure.'
    },
    {
        id: 'audicient-vs-others',
        question: 'How is Audicient different from Revelator, FUGA, or SonoSuite?',
        answer: 'Audicient offers a modern, turn-key operating system with fast deployment, transparent pricing, and zero complex setup contracts. Unlike legacy platforms, Audicient natively integrates AI mastering, automated global payouts, smartlink creation, and a developer-friendly REST API out of the box.'
    },
    {
        id: 'dsps-supported',
        question: 'Which digital streaming platforms (DSPs) does Audicient deliver to?',
        answer: 'We deliver music to 100+ major DSPs worldwide, including Spotify, Apple Music, Amazon Music, YouTube Music, Deezer, Tidal, TikTok, Instagram/Facebook Meta library, Shazam, Tencent, NetEase, and key regional streaming services across Latin America, Asia, and Africa.'
    },
    {
        id: 'royalty-accounting',
        question: 'How does automated royalty accounting and global payouts work?',
        answer: 'Audicient automatically parses monthly DSP consumption statements, calculates custom royalty splits for labels and artists, and updates real-time balances. Account holders can request automated global payouts via direct bank transfers, PayPal, or local wire methods with full statement audit trails.'
    },
    {
        id: 'custom-branding',
        question: 'Can I use my own custom domain and branding?',
        answer: 'Yes! You can point your custom domain (e.g. catalog.yourcompany.com), upload your custom logo, customize system notification emails, and adjust interface colors so your artists receive a 100% branded experience.'
    },
    {
        id: 'rest-api-access',
        question: 'Does Audicient provide REST API access for custom integrations?',
        answer: 'Yes, Audicient features a robust REST API. Developers can programmatically create releases, upload high-res audio & artwork, retrieve distribution status updates, query stream analytics, and trigger automated payouts directly from external applications.'
    },
    {
        id: 'marketing-tools',
        question: 'What marketing and promotion tools are included?',
        answer: 'Audicient equips your platform with automated smart link generation (pre-save campaigns, multi-store landing pages), social media preview generators, AI audio mastering, and detailed playlist tracking analytics to help fuel track growth.'
    }
];

const Query: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };

    return (
        <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-[#A3A3A3] font-sans">
            <h1 className="text-white text-2xl font-semibold pb-20">Frequently Asked Questions</h1>
            <div className="w-full space-y-2">
                {faqData.map((faq, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <div key={faq.id} className="group border-b border-[#262626]">
                            <button
                                type="button"
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex items-center justify-between py-6 cursor-pointer list-none text-white font-medium hover:text-gray-300 transition-colors text-left focus:outline-none"
                                aria-expanded={isOpen}
                            >
                                <span className="pr-4">{faq.question}</span>
                                {/* Custom Up/Down Chevron SVG */}
                                <svg
                                    className={`w-4 h-4 transition-transform duration-200 text-neutral-400 flex-shrink-0 ${isOpen ? 'rotate-180' : ''
                                        }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                            <div
                                className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0'
                                    }`}
                            >
                                <div className="overflow-hidden text-sm leading-relaxed text-[#A3A3A3]">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Query;