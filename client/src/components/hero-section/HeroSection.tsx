import React, {useState} from "react";
import Header from "./Header.tsx";
import MobileMenuDialog from "./MobileMenuDialog.tsx";
import HeroMainContent from "./HeroMainContent.tsx";


const HeroSection: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

    return (
        <div className="bg-white">
            <Header setMobileMenuOpen={setMobileMenuOpen} />
            <MobileMenuDialog mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
            <HeroMainContent />
        </div>
    );
};

export default HeroSection;

