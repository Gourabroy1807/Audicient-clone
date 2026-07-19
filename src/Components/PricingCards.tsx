import React from 'react';
import { Link } from 'react-router-dom';

const CheckIcon: React.FC = () => (
    <svg className="w-4 h-4 text-white flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 6L7 17l-5-5" />
        <path d="M22 10l-7.5 7.5L13 16" />
    </svg>
);

const PricingCards: React.FC = () => {
    return (
        <section className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                
                {/* Starter Plan */}
                <div className="bg-[#09090b] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-300 shadow-2xl">
                    <div>
                        <h2 className="text-white text-xl sm:text-2xl font-bold">Starter Plan</h2>
                        <div className="flex items-baseline mt-3">
                            <span className="text-white text-4xl sm:text-5xl font-extrabold tracking-tight">$59</span>
                            <span className="text-slate-400 text-sm sm:text-base font-normal ml-1">/monthly</span>
                        </div>
                        <p className="text-slate-400 text-sm font-medium mt-2 pb-6 border-b border-white/5">
                            $250 Setup Fee
                        </p>

                        <ul className="space-y-4 my-6 text-slate-200 text-sm sm:text-base font-medium">
                            <li className="flex items-start gap-3">
                                <CheckIcon />
                                <span>Delivery to all supported DSPs</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckIcon />
                                <span>Own Deal / Audicient Deal / Merlin Deal</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckIcon />
                                <span>Rights Holder Portal</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckIcon />
                                <span>Up to 1,000 track</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckIcon />
                                <span>No user account</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckIcon />
                                <span>1 admin account</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckIcon />
                                <span>100 Rights Holder account</span>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-8 pt-4">
                        <Link
                            to="/PlatformDemo"
                            onClick={() => window.scrollTo(0, 0)}
                            className="w-full text-center block bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-medium text-base sm:text-lg py-3 px-4 rounded-xl shadow-lg shadow-blue-600/30 transition-all duration-200 cursor-pointer no-underline"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>

                {/* Ignite Plan */}
                <div className="bg-[#09090b] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-300 shadow-2xl">
                    <div>
                        <h2 className="text-white text-xl sm:text-2xl font-bold">Ignite Plan</h2>
                        <div className="flex items-baseline mt-3">
                            <span className="text-white text-4xl sm:text-5xl font-extrabold tracking-tight">$199</span>
                            <span className="text-slate-400 text-sm sm:text-base font-normal ml-1">/monthly</span>
                        </div>
                        <p className="text-slate-400 text-sm font-medium mt-2 pb-6 border-b border-white/5">
                            $250 Setup Fee
                        </p>

                        <ul className="space-y-4 my-6 text-slate-200 text-sm sm:text-base font-medium">
                            <li className="flex items-start gap-3">
                                <CheckIcon />
                                <span>All Starter Plan features</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckIcon />
                                <span>Up to 6,000 tracks</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckIcon />
                                <span>300 user account</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckIcon />
                                <span>3 admin account</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckIcon />
                                <span>500 Rights Holder account</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckIcon />
                                <span>Custom Subscription Plans</span>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-8 pt-4">
                        <Link
                            to="/PlatformDemo"
                            onClick={() => window.scrollTo(0, 0)}
                            className="w-full text-center block bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-medium text-base sm:text-lg py-3 px-4 rounded-xl shadow-lg shadow-blue-600/30 transition-all duration-200 cursor-pointer no-underline"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>

                {/* Accelerate Plan */}
                <div className="bg-[#09090b] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-300 shadow-2xl">
                    <div>
                        <h2 className="text-white text-xl sm:text-2xl font-bold">Accelerate Plan</h2>
                        <div className="mt-3">
                            <p className="text-slate-400 text-sm sm:text-base font-medium pb-6 border-b border-white/5">
                                Contact Sales
                            </p>
                        </div>

                        <ul className="space-y-4 my-6 text-slate-200 text-sm sm:text-base font-medium">
                            <li className="flex items-start gap-3">
                                <CheckIcon />
                                <span>All Ignite Plan features</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckIcon />
                                <span>Up to 20,000 tracks</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckIcon />
                                <span>1500 user account</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckIcon />
                                <span>5 admin account</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckIcon />
                                <span>3000 Rights Holder account</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckIcon />
                                <span>Helpdesk Feature</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckIcon />
                                <span>DIY login & signup</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckIcon />
                                <span>Payouts (Trolley / Wise)</span>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-8 pt-4">
                        <Link
                            to="/PlatformDemo"
                            onClick={() => window.scrollTo(0, 0)}
                            className="w-full text-center block bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-medium text-base sm:text-lg py-3 px-4 rounded-xl shadow-lg shadow-blue-600/30 transition-all duration-200 cursor-pointer no-underline"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default PricingCards;