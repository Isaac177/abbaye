import HeroSection from "../hero-section/HeroSection.tsx";
import React from "react";
import InfoSection from "../info-section/InfoSection.tsx";

const Home:React.FC = () => {
    return (
        <div className="bg-white">
            <HeroSection />
            <InfoSection />
        </div>
    )
};

export default Home;