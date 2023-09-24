import HeroSection from "../hero-section/HeroSection.tsx";
import React from "react";
import NewSection from "../news-section/NewSection.tsx";

const Home:React.FC = () => {
    return (
        <div className="bg-white">
            <HeroSection />
            <NewSection />
        </div>
    )
};

export default Home;