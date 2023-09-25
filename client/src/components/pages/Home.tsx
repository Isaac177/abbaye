import HeroSection from "../hero-section/HeroSection.tsx";
import React from "react";
import InfoSection from "../info-section/InfoSection.tsx";
import AboutSection from "../about-section/AboutSection.tsx";
import ProductSection from "../product-section/ProductSection.tsx";

const Home:React.FC = () => {
    return (
        <div className="bg-white">
            <HeroSection />
            <InfoSection />
            <AboutSection />
            <ProductSection />
        </div>
    )
};

export default Home;