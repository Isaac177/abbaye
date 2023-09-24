import React from "react";


const LoginButton: React.FC = () => {
    return (
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Log in <span aria-hidden="true">&rarr;</span>
            </a>
        </div>
    );
};

export default LoginButton;
