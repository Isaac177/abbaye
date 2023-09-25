import React from "react";
import inside from "../../assets/images/inside.jpg";
import AOS from "aos";
import "aos/dist/aos.css";


const AboutSection: React.FC = () => {

    React.useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4"
                         data-aos="slide-right"
                         data-aos-offset="200"
                         data-aos-delay="50"
                         data-aos-duration="1000"
                         data-aos-easing="ease-in-out"
                    >
                        <div className="lg:max-w-lg">
                            <p className="mt-2 text-3xl font-bold tracking-tight text-dark-text sm:text-4xl">À propose de nous…</p>
                            <blockquote className="mt-4 text-lg font-serif italic leading-8 text-gray-600">
                                &ldquo;Voici que j’ai fui loin du monde et que j’ai établi ma demeure dans la solitude&rdquo;
                                <br />
                                <span className="text-sm font-sans font-bold">— Saint Antoine le Grand</span>
                            </blockquote>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Depuis sa fondation à la fin du XVIème siècle, l’abbaye du Mont des Cats a connu deux grandes
                                périodes de 1650 date de l’installation des Antonins jusqu’à la révolution
                                française puis de 1826 à nos jours où il fut occupé sans interruption y compris
                                après la loi d’expulsion des congrégations.
                            </p>
                            <div className="mt-10">
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center px-5 py-3
                                    text-base font-medium rounded-lg bg-more-lighter-shade text-white hover:bg-darker-shade"
                                >
                                    En savoir plus
                                </a>
                            </div>
                        </div>
                    </div>
                    <img
                        src={inside}
                        alt="Product screenshot"
                        className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                        width={2432}
                        height={1442}
                    />
                </div>
            </div>
        </div>
    )
};

export default AboutSection;
