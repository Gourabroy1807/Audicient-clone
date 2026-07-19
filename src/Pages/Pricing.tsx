import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import PricingCards from "../Components/PricingCards";
import Hero from "../Components/Hero";

const Pricing = () => {
    return (
        <div className="relative min-h-screen bg-black pt-28">
            <Navbar />
            <Hero />
            <PricingCards />
            <Footer />
        </div>
    );
};

export default Pricing;