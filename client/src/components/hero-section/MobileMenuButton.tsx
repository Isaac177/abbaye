import {Bars3Icon} from "@heroicons/react/24/outline";
import React from "react";

interface MobileMenuButtonProps {
    setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({setMobileMenuOpen}) => {
    return (
        <div className="flex lg:hidden">
            <button
                type="button"
                className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-expanded="false"
                onClick={() => setMobileMenuOpen(true)}
            >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            </button>
        </div>
    );
};

export default MobileMenuButton;