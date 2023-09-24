import React, { ReactNode } from 'react';

interface SubtitleProps {
    children: ReactNode;
}

const Subtitle: React.FC<SubtitleProps> = ({ children }) => {
    return <h2 className="text-2xl text-center italic text-white font-serif text-shadow">
        {children}</h2>;
};

export default Subtitle;
