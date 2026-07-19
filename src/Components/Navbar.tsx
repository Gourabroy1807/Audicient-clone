import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import WhiteLogo from "../assets/whitelogo.png";

const SparkleIcon = () => (
    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L14.2 9.8L22 12L14.2 14.2L12 22L9.8 14.2L2 12L9.8 9.8L12 2Z" />
        <path d="M19 1L20.1 4.9L24 6L20.1 7.1L19 11L17.9 7.1L14 6L17.9 4.9L19 1Z" opacity="0.9" />
    </svg>
);

const Navbar: React.FC = () => {
    const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);

    return (
        <header className="fixed top-2 left-5 right-5 z-50 px-4 sm:px-6 lg:px-8 pt-4 pointer-events-none">
            <nav className="max-w-8xl mx-auto pointer-events-auto bg-[#030712]/70 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-4 flex items-center justify-between shadow-lg shadow-black/20 relative">
                {/* Left Logo */}
                <Link to="/" className="flex items-center cursor-pointer no-underline">
                    <img src={WhiteLogo} alt="Audicient Logo" className="w-10 h-10 object-contain" />
                    <span className="text-3xl pb-1 text-white tracking-tight font-bold ml-1">audicient</span>
                </Link>

                {/* Center Nav Items */}
                <ul className="hidden md:flex items-center gap-8 text-lg font-medium text-slate-300">
                    <li>
                        <Link
                            to="/"
                            onClick={() => { setIsFeaturesOpen(false); window.scrollTo(0, 0); }}
                            className="hover:text-white transition-colors no-underline text-slate-300"
                        >
                            Home
                        </Link>
                    </li>

                    {/* Features Item with Hover Popup */}
                    <li
                        className="relative group py-2"
                        onMouseEnter={() => setIsFeaturesOpen(true)}
                        onMouseLeave={() => setIsFeaturesOpen(false)}
                    >
                        <button
                            type="button"
                            className="hover:text-white transition-colors cursor-pointer flex items-center gap-1 bg-transparent text-slate-300 text-lg font-medium outline-none border-none p-0"
                        >
                            Features
                        </button>

                        {/* Features Hover Pop-up Dropdown */}
                        <div
                            className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[780px] bg-[#090a0d] border border-white/10 rounded-3xl p-6 shadow-2xl shadow-black/90 backdrop-blur-2xl transition-all duration-800 z-50 ${isFeaturesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                                }`}
                        >
                            <div className="grid grid-cols-[230px_1fr_1fr] gap-6 items-stretch">
                                {/* Left Featured Cards Column */}
                                <div className="space-y-4 flex flex-col justify-between">
                                    {/* White Label Card */}
                                    <Link
                                        to="/whitelabel"
                                        onClick={() => setIsFeaturesOpen(false)}
                                        className="no-underline group/card bg-[#141519] hover:bg-[#1c1d22] border border-white/5 hover:border-white/20 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 text-center transition-all duration-300 h-[125px]"
                                    >
                                        <div className="transition-transform duration-200 group-hover/card:scale-110">
                                            <SparkleIcon />
                                        </div>
                                        <span className="text-white font-semibold text-base tracking-wide">White Label</span>
                                    </Link>

                                    {/* REST API Card */}
                                    <Link
                                        to="/RestApi"
                                        onClick={() => setIsFeaturesOpen(false)}
                                        className="no-underline group/card bg-[#141519] hover:bg-[#1c1d22] border border-white/5 hover:border-white/20 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 text-center transition-all duration-300 h-[125px]"
                                    >
                                        <div className="transition-transform duration-200 group-hover/card:scale-110">
                                            <SparkleIcon />
                                        </div>
                                        <span className="text-white font-semibold text-base tracking-wide">REST API</span>
                                    </Link>
                                </div>

                                {/* Right Features Links Column 1 */}
                                <div className="space-y-3 flex flex-col justify-around py-1">
                                    <Link
                                        to="/AssetManagement"
                                        onClick={() => setIsFeaturesOpen(false)}
                                        className="text-slate-400 hover:text-white text-base font-medium transition-colors no-underline block"
                                    >
                                        Assets Management
                                    </Link>
                                    <Link
                                        to="/RightsManagement"
                                        onClick={() => setIsFeaturesOpen(false)}
                                        className="text-slate-400 hover:text-white text-base font-medium transition-colors no-underline block"
                                    >
                                        Rights Management
                                    </Link>
                                    <Link
                                        to="/IncomeTracking"
                                        onClick={() => setIsFeaturesOpen(false)}
                                        className="text-slate-400 hover:text-white text-base font-medium transition-colors no-underline block"
                                    >
                                        Income Tracking
                                    </Link>
                                    <Link
                                        to="/GlobalPayouts"
                                        onClick={() => setIsFeaturesOpen(false)}
                                        className="text-slate-400 hover:text-white text-base font-medium transition-colors no-underline block"
                                    >
                                        Global Payouts
                                    </Link>
                                    <Link
                                        to="/SmartLinks"
                                        onClick={() => setIsFeaturesOpen(false)}
                                        className="text-slate-400 hover:text-white text-base font-medium transition-colors no-underline block"
                                    >
                                        Smartlinks
                                    </Link>
                                    <Link
                                        to="/SocialMediaManagement"
                                        onClick={() => setIsFeaturesOpen(false)}
                                        className="text-slate-400 hover:text-white text-base font-medium transition-colors no-underline block"
                                    >
                                        Social Media Management
                                    </Link>
                                </div>

                                {/* Right Features Links Column 2 */}
                                <div className="space-y-3 flex flex-col justify-around py-1">
                                    <Link
                                        to="/AiMastering"
                                        onClick={() => setIsFeaturesOpen(false)}
                                        className="text-slate-400 hover:text-white text-base font-medium transition-colors no-underline block"
                                    >
                                        AI Mastering
                                    </Link>
                                    <Link
                                        to="/DistributionAndDelivery"
                                        onClick={() => setIsFeaturesOpen(false)}
                                        className="text-slate-400 hover:text-white text-base font-medium transition-colors no-underline block"
                                    >
                                        Distribution & Delivery
                                    </Link>
                                    <Link
                                        to="/RoyaltyAccounting"
                                        onClick={() => setIsFeaturesOpen(false)}
                                        className="text-slate-400 hover:text-white text-base font-medium transition-colors no-underline block"
                                    >
                                        Royalty Accounting
                                    </Link>
                                    <Link
                                        to="/AnalyticsAndReporting"
                                        onClick={() => setIsFeaturesOpen(false)}
                                        className="text-slate-400 hover:text-white text-base font-medium transition-colors no-underline block"
                                    >
                                        Analytics & Reporting
                                    </Link>
                                    <Link
                                        to="/HelpDeskAndSupport"
                                        onClick={() => setIsFeaturesOpen(false)}
                                        className="text-slate-400 hover:text-white text-base font-medium transition-colors no-underline block"
                                    >
                                        Helpdesk & Support
                                    </Link>
                                    <Link
                                        to="/MarketingTools"
                                        onClick={() => setIsFeaturesOpen(false)}
                                        className="text-slate-400 hover:text-white text-base font-medium transition-colors no-underline block"
                                    >
                                        Marketing Tools
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <Link
                            to="/whitelabel"
                            onClick={() => { setIsFeaturesOpen(false); window.scrollTo(0, 0); }}
                            className="hover:text-white transition-colors no-underline text-slate-300"
                        >
                            White Label
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/Pricing"
                            onClick={() => { setIsFeaturesOpen(false); window.scrollTo(0, 0); }}
                            className="hover:text-white transition-colors no-underline text-slate-300"
                        >
                            Pricing
                        </Link>
                    </li>
                </ul>

                {/* Right CTA */}
                <div>
                    <button className="bg-blue-600 hover:bg-blue-500 text-white font-medium text-lg px-4 py-2 rounded-lg shadow-md shadow-blue-600/30 transition-all cursor-pointer">
                        Get Started
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;