import React from "react";

const DesktopNavigation: React.FC = () => {
    return (
        <div className="hidden lg:min-w-0 lg:flex items-center space-x-8">
            <a href="#" className="font-medium text-gray-500 hover:text-gray-900">
                Spiritualité
            </a>
            <a href="#" className="font-medium text-gray-500 hover:text-gray-900 cursor-pointer">
                Histoire
            </a>
            <a href="#" className="font-medium text-gray-500 hover:text-gray-900 whitespace-nowrap cursor-pointer">
                Les abbés
            </a>
            <a href="#" className="font-medium text-gray-500 hover:text-gray-900 whitespace-nowrap cursor-pointer">
                Le travail
            </a>
            <a href="#" className="font-medium text-gray-500 hover:text-gray-900 whitespace-nowrap cursor-pointer">
                Diaporamas
            </a>
            <a href="#" className="font-medium text-gray-500 hover:text-gray-900 whitespace-nowrap cursor-pointer">
                Nous contacter
            </a>

            <div className="font-medium text-gray-500 hover:text-gray-900 flex flex-row gap-1 items-center
            whitespace-nowrap hover:cursor-pointer bg-analogous-2 rounded-lg px-4 py-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:cursor-pointe">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                </svg>
                Hotêllerie
            </div>
            <div className="font-medium text-gray-500 hover:text-gray-900 flex flex-row gap-1 hover:cursor-pointer bg-analogous-2 rounded-lg px-4 py-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:cursor-pointe">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                Magasin
            </div>
        </div>
    );
};

export default DesktopNavigation;