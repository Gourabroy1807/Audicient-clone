import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import FeaturesCard from "../Components/FeaturesCard"
import InfoSection from "../Components/InfoSection";
import Query from "../Components/Query";
const Home = () => {
    return (
        <div className="relative min-h-screen">
            <Navbar />
            <Hero />
            <FeaturesCard />
            <InfoSection />
            <Query />
            <Footer />
        </div>
    )
}

export default Home