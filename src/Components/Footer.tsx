import whitelogo from "../assets/whitelogo.png"

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-black to-gray-900/80 relative w-full border-t border-slate-800/80  pt-20 overflow-hidden pb-16">
            <div className="flex flex-wrap justify-between max-w-7xl mx-auto px-5 sm:px-0 relative z-10">
                <div className="flex flex-col items-start gap-4">
                    <div className="flex items-center gap-3 cursor-pointer">
                        <img src={whitelogo} alt="Audicient Logo" className="w-13 h-13 object-contain" />
                        <span className="text-5xl text-white tracking-tight pb-3">audicient</span>
                    </div>
                    <p className="text-slate-400 text-md leading-relaxed max-w-sm">
                        Next-generation white label music distribution platform. Empowering labels, distributors, and music entrepreneurs to build and scale their brand globally.
                    </p>
                </div>

                {/* Navigation Columns */}
                <div className="mb-10">
                    <h4 className="text-white text-2xl font-semibold tracking-wider uppercase pb-4">Products</h4>
                    <ul className="space-y-2.5 text-lg text-slate-400">
                        <li><a href="#whitelabel" className="hover:text-white transition-colors">White Label Engine</a></li>
                        <li><a href="#distribution" className="hover:text-white transition-colors">Global Distribution</a></li>
                        <li><a href="#royalties" className="hover:text-white transition-colors">Royalty Accounting</a></li>
                        <li><a href="#analytics" className="hover:text-white transition-colors">Analytics & Insights</a></li>
                        <li><a href="#content-id" className="hover:text-white transition-colors">YouTube Content ID</a></li>
                    </ul>
                </div>

                <div className="mb-10">
                    <h4 className="text-white text-2xl font-semibold tracking-wider uppercase pb-4">Company</h4>
                    <ul className="space-y-2.5 text-lg text-slate-400">
                        <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                        <li><a href="#blog" className="hover:text-white transition-colors">Blog & News</a></li>
                        <li><a href="#careers" className="hover:text-white transition-colors">Careers</a></li>
                        <li><a href="#contact" className="hover:text-white transition-colors">Contact Sales</a></li>
                        <li><a href="#press" className="hover:text-white transition-colors">Press Kit</a></li>
                    </ul>
                </div>

                <div className="mb-10">
                    <h4 className="text-white text-2xl font-semibold tracking-wider uppercase pb-4">Legal & Support</h4>
                    <ul className="space-y-2.5 text-lg text-slate-400">
                        <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                        <li><a href="#terms" className="hover:text-white transition-colors">Terms of Service</a></li>
                        <li><a href="#cookies" className="hover:text-white transition-colors">Cookie Policy</a></li>
                        <li><a href="#support" className="hover:text-white transition-colors">Help Center</a></li>
                        <li><a href="#security" className="hover:text-white transition-colors">Security & Trust</a></li>
                    </ul>
                </div>

                <div className="mb-10">
                    <h4 className="text-white text-2xl font-semibold tracking-wider uppercase pb-4">Legal & Support</h4>
                    <ul className="space-y-2.5 text-lg text-slate-400">
                        <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                        <li><a href="#terms" className="hover:text-white transition-colors">Terms of Service</a></li>
                        <li><a href="#cookies" className="hover:text-white transition-colors">Cookie Policy</a></li>
                        <li><a href="#support" className="hover:text-white transition-colors">Help Center</a></li>
                        <li><a href="#security" className="hover:text-white transition-colors">Security & Trust</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer