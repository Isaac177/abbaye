import React, { ReactNode } from 'react';

interface WrapperProps {
    children: ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
    return <div
        className="wrapper h-full flex flex-col justify-end items-start px-4 w-4/5 mx-auto pb-24">
        {children}
    </div>;
};

export default Wrapper;
