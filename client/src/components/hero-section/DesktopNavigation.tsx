import React from "react";

const DesktopNavigation: React.FC = () => {
    return (
        <div className="hidden lg:min-w-0 lg:flex-1 lg:flex items-center justify-end space-x-8">
            <a href="#" className="font-medium text-gray-500 hover:text-gray-900">
                Product
            </a>
            <a href="#" className="font-medium text-gray-500 hover:text-gray-900">
                Features
            </a>
            <a href="#" className="font-medium text-gray-500 hover:text-gray-900">
                Marketplace
            </a>
            <a href="#" className="font-medium text-gray-500 hover:text-gray-900">
                Company
            </a>
        </div>
    );
};

export default DesktopNavigation;