import { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
    Music,
    Sliders,
    Copyright,
    Radio,
    Receipt,
    TrendingUp,
    Megaphone,
    Link as LinkIcon,
    BarChart3,
    Globe,
    Headphones,
    Share2,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';

interface FeatureItem {
    id: string;
    title: string;
    path: string;
    icon: React.ReactNode;
}

const features: FeatureItem[] = [
    {
        id: 'whitelabel',
        title: 'White Label Platform',
        path: '/whitelabel',
        icon: (
            <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l9 5.196v10.392L12 22l-9-5.196V7.196L12 2zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
            </svg>
        )
    },
    {
        id: 'restapi',
        title: 'REST API',
        path: '/RestApi',
        icon: (
            <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 3H7a2 2 0 0 0-2 2v3a2 2 0 0 1-2 2 2 2 0 0 1 2 2v3a2 2 0 0 0 2 2h1" />
                <path d="M16 3h1a2 2 0 0 1 2 2v3a2 2 0 0 0 2 2 2 2 0 0 0-2 2v3a2 2 0 0 1-2 2h-1" />
            </svg>
        )
    },
    {
        id: 'assets',
        title: 'Assets Management',
        path: '/AssetManagement',
        icon: <Music className="w-12 h-12 text-white stroke-[1.8]" />
    },
    {
        id: 'aimastering',
        title: 'AI Mastering',
        path: '/AiMastering',
        icon: <Sliders className="w-12 h-12 text-white stroke-[1.8]" />
    },
    {
        id: 'rights',
        title: 'Rights Management',
        path: '/RightsManagement',
        icon: <Copyright className="w-12 h-12 text-white stroke-[1.8]" />
    },
    {
        id: 'distribution',
        title: 'Distribution & Delivery',
        path: '/DistributionAndDelivery',
        icon: <Radio className="w-12 h-12 text-white stroke-[1.8]" />
    },
    {
        id: 'royalty',
        title: 'Royalty Accounting',
        path: '/RoyaltyAccounting',
        icon: <Receipt className="w-12 h-12 text-white stroke-[1.8]" />
    },
    {
        id: 'income',
        title: 'Income Tracking',
        path: '/IncomeTracking',
        icon: <TrendingUp className="w-12 h-12 text-white stroke-[1.8]" />
    },
    {
        id: 'marketing',
        title: 'Marketing Tools',
        path: '/MarketingTools',
        icon: <Megaphone className="w-12 h-12 text-white stroke-[1.8]" />
    },
    {
        id: 'smartlinks',
        title: 'Smart Links',
        path: '/SmartLinks',
        icon: <LinkIcon className="w-12 h-12 text-white stroke-[1.8]" />
    },
    {
        id: 'analytics',
        title: 'Analytics & Reporting',
        path: '/AnalyticsAndReporting',
        icon: <BarChart3 className="w-12 h-12 text-white stroke-[1.8]" />
    },
    {
        id: 'payouts',
        title: 'Global Payouts',
        path: '/GlobalPayouts',
        icon: <Globe className="w-12 h-12 text-white stroke-[1.8]" />
    },
    {
        id: 'helpdesk',
        title: 'Help Desk & Support',
        path: '/HelpDeskAndSupport',
        icon: <Headphones className="w-12 h-12 text-white stroke-[1.8]" />
    },
    {
        id: 'socialmedia',
        title: 'Social Media Management',
        path: '/SocialMediaManagement',
        icon: <Share2 className="w-12 h-12 text-white stroke-[1.8]" />
    }
];

const FeaturesCard = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const handleScroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 320;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="bg-black py-24 md:py-32 px-4 md:px-8 relative overflow-hidden select-none">
            <div className="max-w-7xl mx-auto mb-10">
                <h1 className="text-2xl sm:text-4xl md:text-5xl text-white font-bold tracking-tight">
                    The Next Generation Music Operation System
                </h1>
            </div>

            <div className="relative max-w-7xl mx-auto">
                {/* Scroll Container */}
                <div
                    ref={scrollContainerRef}
                    className="flex items-center gap-6 overflow-x-auto py-10 px-4 scrollbar-none scroll-smooth"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {features.map((feature) => (
                        <Link key={feature.id} to={feature.path} className="no-underline">
                            <div className="relative group flex-shrink-0 w-60 h-90 md:w-72 md:h-110 bg-black border border-white/20 p-8 flex flex-col items-center justify-between text-center cursor-pointer transition-all duration-300 hover:border-white/60 hover:bg-neutral-950 shadow-2xl">
                                {/* Corner Crosshairs */}
                                <span className="absolute -top-2.5 -left-2.5 text-white/50 text-xs font-mono select-none pointer-events-none z-10">+</span>
                                <span className="absolute -top-2.5 -right-2.5 text-white/50 text-xs font-mono select-none pointer-events-none z-10">+</span>
                                <span className="absolute -bottom-2.5 -left-2.5 text-white/50 text-xs font-mono select-none pointer-events-none z-10">+</span>
                                <span className="absolute -bottom-2.5 -right-2.5 text-white/50 text-xs font-mono select-none pointer-events-none z-10">+</span>

                                {/* Card Icon */}
                                <div className="flex-1 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                    {feature.icon}
                                </div>

                                {/* Card Title */}
                                <h3 className="text-white font-bold text-lg md:text-xl tracking-tight leading-snug pb-4">
                                    {feature.title}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Scroll Navigation Controls */}
                <div className="flex items-center justify-center gap-4 mt-6">
                    <button
                        onClick={() => handleScroll('left')}
                        className="w-10 h-10 rounded-full bg-neutral-900 border border-white/20 text-white flex items-center justify-center hover:bg-neutral-800 transition-colors cursor-pointer"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => handleScroll('right')}
                        className="w-10 h-10 rounded-full bg-neutral-900 border border-white/20 text-white flex items-center justify-center hover:bg-neutral-800 transition-colors cursor-pointer"
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturesCard;