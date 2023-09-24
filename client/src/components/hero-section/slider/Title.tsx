import React, {ReactNode} from "react";

interface TitleProps {
    children: ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
    return <h1 className="text-6xl font-bold text-center mb-4 text-white font-serif text-shadow animate-fade-up">
                {children}
    </h1>
};

export default Title;
