import {Overlay} from "hero-slider";
import React from "react";


interface OverlayProps {
    children: React.ReactNode;
    className: string;
}
const CustomOverlay: React.FC<OverlayProps> = ({ children, className }) => {
    return (
        <Overlay className={`${className} bg-black bg-opacity-50`}>
            {children}
        </Overlay>
    );
};

export default CustomOverlay;