import React from "react";
import Logo from "./Logo.tsx";
import MobileMenuButton from "./MobileMenuButton.tsx";
import DesktopNavigation from "./DesktopNavigation.tsx";
import LoginButton from "./LoginButton.tsx";

interface HeaderProps {
    setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Header: React.FC<HeaderProps> = ({setMobileMenuOpen}) => {
    const [isSticky, setIsSticky] = React.useState(false);
    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <header className={`animated-header ${isSticky ? 'fixed shadow-md w-full' : 'absolute w-4/5'} inset-x-0 top-0 z-50 mx-auto bg-white`}>
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