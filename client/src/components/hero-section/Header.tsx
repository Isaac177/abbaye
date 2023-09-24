import React from "react";
import Logo from "./Logo.tsx";
import MobileMenuButton from "./MobileMenuButton.tsx";
import DesktopNavigation from "./DesktopNavigation.tsx";
import LoginButton from "./LoginButton.tsx";

interface HeaderProps {
    setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Header: React.FC<HeaderProps> = ({setMobileMenuOpen}) => {
    return (
        <header className="absolute inset-x-0 top-0 z-50 w-4/5 mx-auto bg-white">
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <Logo />
                <MobileMenuButton setMobileMenuOpen={setMobileMenuOpen} />
                <DesktopNavigation />
                <LoginButton />
            </nav>
        </header>
    );
};

export default Header;