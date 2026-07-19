import React, { useState } from 'react';
import { ChevronDown, CheckCircle2 } from 'lucide-react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const PlatformDemo = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        email: '',
        countryCode: '+1',
        phoneNumber: '',
        region: '',
        websiteUrl: '',
        services: '',
        catalogAssets: '',
        managedUsers: '',
        monthlyReleases: '',
        currentDistributor: '',
        monthlyRevenue: '',
        planLookingFor: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <div className="relative min-h-screen bg-black pt-28">
            <Navbar />

            <section className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-6xl mx-auto">
                    
                    {/* Form Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                            Request a Platform Demo
                        </h1>
                        <p className="mt-4 text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
                            Fill out the details below and our team will prepare a custom demonstration tailored for your label or distribution platform.
                        </p>
                    </div>

                    {/* Form Card Container */}
                    <div className="bg-[#090a0d] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
                        {isSubmitted ? (
                            <div className="text-center py-16 space-y-4">
                                <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto" />
                                <h2 className="text-2xl sm:text-3xl font-bold text-white">Demo Request Received!</h2>
                                <p className="text-slate-400 text-base max-w-lg mx-auto">
                                    Thank you, {formData.firstName}! Our platform specialist will contact you shortly at {formData.email} to schedule your personalized demo.
                                </p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="mt-6 px-6 py-2.5 bg-white text-black font-semibold rounded-lg hover:bg-slate-200 transition-colors cursor-pointer"
                                >
                                    Submit Another Request
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                
                                {/* Row 1: FIRST NAME & LAST NAME */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                                            FIRST NAME <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            required
                                            placeholder="Enter your first name"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className="w-full bg-[#121316] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500/60 transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                                            LAST NAME <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            required
                                            placeholder="Enter your last name"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className="w-full bg-[#121316] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500/60 transition-colors"
                                        />
                                    </div>
                                </div>

                                {/* Row 2: COMPANY NAME & EMAIL */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                                            COMPANY NAME <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="companyName"
                                            required
                                            placeholder="Enter your company name"
                                            value={formData.companyName}
                                            onChange={handleChange}
                                            className="w-full bg-[#121316] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500/60 transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                                            EMAIL <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            placeholder="Enter your email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-[#121316] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500/60 transition-colors"
                                        />
                                    </div>
                                </div>

                                {/* Row 3: PHONE NUMBER, REGION & WEBSITE URL */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                                            PHONE NUMBER <span className="text-red-500">*</span>
                                        </label>
                                        <div className="flex items-center bg-[#121316] border border-white/10 rounded-xl overflow-hidden focus-within:border-blue-500/60 transition-colors">
                                            <div className="flex items-center gap-1 px-3 py-3 border-r border-white/10 text-slate-400 bg-slate-900/40 text-xs font-medium">
                                                <span className="w-4 h-2.5 bg-slate-700 rounded-xs inline-block" />
                                                <select
                                                    name="countryCode"
                                                    value={formData.countryCode}
                                                    onChange={handleChange}
                                                    className="bg-transparent text-white outline-none cursor-pointer"
                                                >
                                                    <option value="+1" className="bg-[#121316]">+1</option>
                                                    <option value="+44" className="bg-[#121316]">+44</option>
                                                    <option value="+91" className="bg-[#121316]">+91</option>
                                                    <option value="+49" className="bg-[#121316]">+49</option>
                                                    <option value="+33" className="bg-[#121316]">+33</option>
                                                </select>
                                            </div>
                                            <input
                                                type="tel"
                                                name="phoneNumber"
                                                required
                                                placeholder="Enter a phone number"
                                                value={formData.phoneNumber}
                                                onChange={handleChange}
                                                className="w-full bg-transparent px-3 py-3 text-white text-sm placeholder:text-slate-500 focus:outline-none"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                                            REGION <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <select
                                                name="region"
                                                required
                                                value={formData.region}
                                                onChange={handleChange}
                                                className="w-full bg-[#121316] border border-white/10 rounded-xl px-4 py-3 text-white text-sm appearance-none focus:outline-none focus:border-blue-500/60 transition-colors cursor-pointer"
                                            >
                                                <option value="" disabled className="text-slate-500">-- Please select --</option>
                                                <option value="North America" className="bg-[#121316]">North America</option>
                                                <option value="Europe" className="bg-[#121316]">Europe</option>
                                                <option value="Asia-Pacific" className="bg-[#121316]">Asia-Pacific</option>
                                                <option value="Latin America" className="bg-[#121316]">Latin America</option>
                                                <option value="Middle East & Africa" className="bg-[#121316]">Middle East & Africa</option>
                                            </select>
                                            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                                            WEBSITE URL / SOCIAL MEDIA <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="url"
                                            name="websiteUrl"
                                            required
                                            placeholder="https://example.com"
                                            value={formData.websiteUrl}
                                            onChange={handleChange}
                                            className="w-full bg-[#121316] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500/60 transition-colors"
                                        />
                                    </div>
                                </div>

                                {/* Row 4: SERVICES & CATALOG ASSETS */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                                            WHAT SERVICES ARE YOU LOOKING FOR? <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <select
                                                name="services"
                                                required
                                                value={formData.services}
                                                onChange={handleChange}
                                                className="w-full bg-[#121316] border border-white/10 rounded-xl px-4 py-3 text-white text-sm appearance-none focus:outline-none focus:border-blue-500/60 transition-colors cursor-pointer"
                                            >
                                                <option value="" disabled className="text-slate-500">-- Please select --</option>
                                                <option value="White Label Distribution" className="bg-[#121316]">White Label Distribution</option>
                                                <option value="REST API Access" className="bg-[#121316]">REST API Access</option>
                                                <option value="Royalty Accounting & Payouts" className="bg-[#121316]">Royalty Accounting & Payouts</option>
                                                <option value="Full Music Operation System" className="bg-[#121316]">Full Music Operation System</option>
                                            </select>
                                            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                                            HOW MANY ASSETS IN YOUR CATALOG? <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <select
                                                name="catalogAssets"
                                                required
                                                value={formData.catalogAssets}
                                                onChange={handleChange}
                                                className="w-full bg-[#121316] border border-white/10 rounded-xl px-4 py-3 text-white text-sm appearance-none focus:outline-none focus:border-blue-500/60 transition-colors cursor-pointer"
                                            >
                                                <option value="" disabled className="text-slate-500">-- Please select --</option>
                                                <option value="1 - 500" className="bg-[#121316]">1 - 500</option>
                                                <option value="500 - 2,500" className="bg-[#121316]">500 - 2,500</option>
                                                <option value="2,500 - 10,000" className="bg-[#121316]">2,500 - 10,000</option>
                                                <option value="10,000+" className="bg-[#121316]">10,000+</option>
                                            </select>
                                            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                                        </div>
                                    </div>
                                </div>

                                {/* Row 5: USERS & MONTHLY RELEASES */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                                            HOW MANY USERS DO YOU MANAGE? <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <select
                                                name="managedUsers"
                                                required
                                                value={formData.managedUsers}
                                                onChange={handleChange}
                                                className="w-full bg-[#121316] border border-white/10 rounded-xl px-4 py-3 text-white text-sm appearance-none focus:outline-none focus:border-blue-500/60 transition-colors cursor-pointer"
                                            >
                                                <option value="" disabled className="text-slate-500">-- Please select --</option>
                                                <option value="1 - 50" className="bg-[#121316]">1 - 50</option>
                                                <option value="50 - 250" className="bg-[#121316]">50 - 250</option>
                                                <option value="250 - 1,000" className="bg-[#121316]">250 - 1,000</option>
                                                <option value="1,000+" className="bg-[#121316]">1,000+</option>
                                            </select>
                                            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                                            HOW MANY RELEASES DO YOU DELIVER EVERY MONTH? <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <select
                                                name="monthlyReleases"
                                                required
                                                value={formData.monthlyReleases}
                                                onChange={handleChange}
                                                className="w-full bg-[#121316] border border-white/10 rounded-xl px-4 py-3 text-white text-sm appearance-none focus:outline-none focus:border-blue-500/60 transition-colors cursor-pointer"
                                            >
                                                <option value="" disabled className="text-slate-500">-- Please select --</option>
                                                <option value="1 - 50" className="bg-[#121316]">1 - 50</option>
                                                <option value="50 - 200" className="bg-[#121316]">50 - 200</option>
                                                <option value="200 - 1,000" className="bg-[#121316]">200 - 1,000</option>
                                                <option value="1,000+" className="bg-[#121316]">1,000+</option>
                                            </select>
                                            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                                        </div>
                                    </div>
                                </div>

                                {/* Row 6: CURRENT DISTRIBUTOR & MONTHLY REVENUE */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                                            WHICH DISTRIBUTOR DO YOU CURRENTLY USE? <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <select
                                                name="currentDistributor"
                                                required
                                                value={formData.currentDistributor}
                                                onChange={handleChange}
                                                className="w-full bg-[#121316] border border-white/10 rounded-xl px-4 py-3 text-white text-sm appearance-none focus:outline-none focus:border-blue-500/60 transition-colors cursor-pointer"
                                            >
                                                <option value="" disabled className="text-slate-500">-- Please select --</option>
                                                <option value="DistroKid" className="bg-[#121316]">DistroKid</option>
                                                <option value="TuneCore" className="bg-[#121316]">TuneCore</option>
                                                <option value="CD Baby" className="bg-[#121316]">CD Baby</option>
                                                <option value="Revelator" className="bg-[#121316]">Revelator</option>
                                                <option value="SonoSuite" className="bg-[#121316]">SonoSuite</option>
                                                <option value="FUGA" className="bg-[#121316]">FUGA</option>
                                                <option value="In-house System" className="bg-[#121316]">In-house System</option>
                                                <option value="None / Starting New" className="bg-[#121316]">None / Starting New</option>
                                            </select>
                                            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                                            WHAT IS YOUR MONTHLY AVERAGE REVENUE? <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <select
                                                name="monthlyRevenue"
                                                required
                                                value={formData.monthlyRevenue}
                                                onChange={handleChange}
                                                className="w-full bg-[#121316] border border-white/10 rounded-xl px-4 py-3 text-white text-sm appearance-none focus:outline-none focus:border-blue-500/60 transition-colors cursor-pointer"
                                            >
                                                <option value="" disabled className="text-slate-500">-- Please select --</option>
                                                <option value="Under $1,000" className="bg-[#121316]">Under $1,000</option>
                                                <option value="$1,000 - $5,000" className="bg-[#121316]">$1,000 - $5,000</option>
                                                <option value="$5,000 - $25,000" className="bg-[#121316]">$5,000 - $25,000</option>
                                                <option value="$25,000 - $100,000" className="bg-[#121316]">$25,000 - $100,000</option>
                                                <option value="$100,000+" className="bg-[#121316]">$100,000+</option>
                                            </select>
                                            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                                        </div>
                                    </div>
                                </div>

                                {/* Row 7: PLAN LOOKING FOR */}
                                <div>
                                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                                        WHAT PLAN ARE YOU LOOKING FOR? <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <select
                                            name="planLookingFor"
                                            required
                                            value={formData.planLookingFor}
                                            onChange={handleChange}
                                            className="w-full bg-[#121316] border border-white/10 rounded-xl px-4 py-3 text-white text-sm appearance-none focus:outline-none focus:border-blue-500/60 transition-colors cursor-pointer"
                                        >
                                            <option value="" disabled className="text-slate-500">-- Please select --</option>
                                            <option value="Starter Plan ($59/mo)" className="bg-[#121316]">Starter Plan ($59/mo)</option>
                                            <option value="Ignite Plan ($199/mo)" className="bg-[#121316]">Ignite Plan ($199/mo)</option>
                                            <option value="Accelerate Plan (Contact Sales)" className="bg-[#121316]">Accelerate Plan (Contact Sales)</option>
                                        </select>
                                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                                    </div>
                                </div>

                                {/* Row 8: MESSAGE */}
                                <div>
                                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                                        MESSAGE
                                    </label>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        placeholder="Any other information which could be useful to us"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full bg-[#121316] border border-white/10 rounded-xl p-4 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500/60 transition-colors resize-none"
                                    />
                                </div>

                                {/* Submit Button */}
                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        className="bg-white hover:bg-slate-200 text-black font-semibold text-sm px-6 py-2.5 rounded-lg shadow-md transition-colors cursor-pointer"
                                    >
                                        Submit
                                    </button>
                                </div>

                            </form>
                        )}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default PlatformDemo;