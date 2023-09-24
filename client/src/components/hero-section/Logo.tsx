import React from "react";
import mdc from "../../assets/images/abbaye.png";


const Logo: React.FC = () => {
    return (
        <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5">
                <span className="sr-only">Your Company</span>
                <img
                    className="h-16 w-24"
                    src={mdc}
                    alt="Mont des Cats"
                />
            </a>
        </div>
    );
};

export default Logo;