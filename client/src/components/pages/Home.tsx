import HeroSection from "../hero-section/HeroSection.tsx";
import React from "react";
import InfoSection from "../info-section/InfoSection.tsx";
import AboutSection from "../about-section/AboutSection.tsx";
import ProductSection from "../product-section/ProductSection.tsx";
import AdSection from "../ad-section/AdSection.tsx";
import Footer from "../footer/Footer.tsx";

const Home:React.FC = () => {
    return (
        <div className="bg-white">
            <HeroSection />
            <InfoSection />
            <AboutSection />
            <ProductSection />
            <AdSection/>
            <Footer />
        </div>
    )
};

export default Home;