import heroImg from "../assets/hero.png"

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen pt-32 pb-16 flex flex-col items-center justify-between overflow-hidden">
            {/* Hero Main Content */}
            <div className="flex flex-col items-center text-center mx-auto mt-20 md:mt-20">

                {/* Hero Title with Semi Halo Effect */}
                <div className="relative flex flex-col items-center isolate px-4">
                    {/* Outer Semi Halo Glow Arc */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] sm:w-[150%] max-w-5xl h-[160%] bg-gradient-to-b from-blue-600/70 via-indigo-600/40 to-transparent blur-[70px] sm:blur-[95px] rounded-full pointer-events-none -z-10" />

                    {/* Inner Core Bright Halo */}
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%] max-w-3xl h-[140%] bg-blue-600/50 blur-[50px] rounded-full pointer-events-none -z-10" />

                    <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-[7.5rem] xl:text-[8.5rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400 tracking-tight leading-[1.05] drop-shadow-md max-w-7xl relative z-10">
                        White Label
                    </h1>
                    <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-[7.5rem] xl:text-[8.5rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400 tracking-tight leading-[1.05] drop-shadow-md mt-2 sm:mt-5 max-w-7xl relative z-10">
                        Music Distribution Platform
                    </h1>
                </div>

                {/* Tagline */}
                <p className="text-sm sm:text-base md:text-xl lg:text-2xl font-medium text-slate-300 tracking-wide mt-6 sm:mt-8 px-4 max-w-3xl">
                    One platform designed to amplify and grow your music business without limits.
                </p>

                {/* Primary CTA Button */}
                <div className="mt-8">
                    <button className="bg-blue-600 hover:bg-blue-500 text-white font-medium text-lg px-4 py-2 rounded-lg shadow-md shadow-blue-600/30 transition-all cursor-pointer mt-10 mb-10">
                        Get Started
                    </button>
                </div>
            </div>

            {/* Hero Image Container */}
            <div className="w-full max-w-[1400px] px-4 sm:px-6 mt-14 z-10">
                <div className="relative rounded-2xl overflow-hidden border-2 border-white/5 group transition-all duration-500 hover:border-blue-500/50">
                    <img
                        src={heroImg}
                        alt="Audicient Platform Preview"
                        className="w-full h-auto object-cover rounded-2xl shadow-2xl transition-transform duration-700 group-hover:scale-[1.01]"
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero