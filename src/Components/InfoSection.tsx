import white_label from "../Assets/white-label.svg"
import ecosystem from "../Assets/ecosystem.svg"
import rest_api from "../Assets/rest-api.svg"
import technology_partner from "../Assets/technology-partner.svg"

const InfoSection = () => {
    return (
        <section className="w-full mx-auto mt-28">
            <div className="flex mr-20 mb-20">
                <div className="max-w-7xl mx-auto pl-20 pr-40 ">
                    <h1 className="text-white text-2xl font-semibold pb-10">Your Brand. Our Technology.</h1>
                    <h3 className="text-slate-400 text-lg leading-8">Launch your own global music distribution business with full branding, custom storefront, and seamless integration. Trusted by leading labels and distributors worldwide.</h3>
                    <h3 className="text-slate-400 text-lg leading-8">Automated royalty calculations, payment processing, and detailed revenue reporting for artists and labels.</h3>
                    <h3 className="text-slate-400 text-lg leading-8">Whether you’re an independent label, distributor, or artist-entrepreneur, our white-label platform provides all the tools you need to succeed in the digital music industry.</h3>
                </div>

                <img src={technology_partner} alt="vvv" className=" w-[600px] h-[500px] object-cover md:block hidden" />

            </div>

            <div className="flex ml-20 mr-20 mb-20">
                <img src={ecosystem} alt="global-distribution" className="w-[600px] h-[500px] object-cover md:block hidden" />
                <div className="pl-40">
                    <h1 className="text-white text-2xl font-semibold pb-10">Global Distribution</h1>
                    <h3 className="text-slate-400 text-lg leading-8">Deliver music to all major streaming platforms worldwide with automated metadata management and real-time sales reporting.</h3>
                    <h3 className="text-slate-400 text-lg leading-8">Our robust infrastructure ensures fast and reliable delivery to Spotify, Apple Music, Amazon Music, YouTube Music, and all other DSPs.</h3>
                    <h3 className="text-slate-400 text-lg leading-8">Maintain complete control over your catalog, pricing, and release schedules while we handle the technical complexities of global distribution.</h3>
                </div>
            </div>

            <div className="flex ml-20 mr-20 mb-20">
                <div className="pr-40 md:flex-1">
                    <h1 className="text-white text-2xl font-semibold pb-10">White Label Solution</h1>
                    <h3 className="text-slate-400 text-lg leading-8">Launch your own branded music platform with complete customization, custom domain, and white-label player.</h3>
                    <h3 className="text-slate-400 text-lg leading-8">Our platform is fully customizable to match your brand identity, with flexible APIs and integrations for a seamless user experience.</h3>
                </div>
                <img src={white_label} alt="vvv" className="w-[600px] h-[500px] object-cover md:block hidden" />
            </div>

            <div className="flex ml-20 mr-20 mb-20">
                <img src={rest_api} alt="vvv" className="w-[600px] h-[500px] object-cover md:block hidden" />
                <div className="pl-40 md:flex-1">
                    <h1 className="text-white text-2xl font-semibold pb-10">Royalty Management</h1>
                    <h3 className="text-slate-400 text-lg leading-8">Automated royalty calculations, payment processing, and detailed revenue reporting for artists and labels.</h3>
                    <h3 className="text-slate-400 text-lg leading-8">Stay compliant with global reporting standards and provide transparent statements to your artists and stakeholders.</h3>
                </div>
            </div>

        </section>
    )
}
export default InfoSection;