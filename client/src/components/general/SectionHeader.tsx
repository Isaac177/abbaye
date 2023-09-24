import React from "react";



interface sectionHeaderProps {
    sectionTitle: string;
    sectionSmallText: string;
}
const SectionHeader: React.FC<sectionHeaderProps> = ({sectionTitle, sectionSmallText}) => {
    return (
        <div className="mx-auto max-w-2xl lg:mx-0"
             data-aos="fade-up"
             data-aos-offset="200"
             data-aos-delay="50"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out"
        >
            <h2 className="text-3xl font-bold tracking-tight text-dark-text sm:text-4xl">{sectionTitle}</h2>
            <p className="mt-2 italic text-lg leading-8 text-gray-500">
                {sectionSmallText}
            </p>
        </div>

    );
};

export default SectionHeader;


