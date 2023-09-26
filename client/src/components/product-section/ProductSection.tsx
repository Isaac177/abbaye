import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import beer from '../../assets/images/beer.jpeg';
import bgImg from '../../assets/images/bg-shape.svg';
const AboutSection = () => {
    React.useEffect(() => {
        AOS.init();
    }, []);

    const abstract = bgImg;
    return (
        <div className="overflow-hidden sm:py-16 relative">
            <div className="absolute inset-0 filter brightness-10 opacity-125" style={{backgroundImage: `url(${abstract})`, backgroundSize: 'cover', backgroundPosition: 'center'}} aria-hidden="true">
{/*
                <div className="absolute inset-0 bg-gradient-to-r from-more-lighter-shade to-darker-shade mix-blend-multiply" aria-hidden="true" />
*/}
            </div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="absolute text-3xl font-bold tracking-tight text-dark-text sm:text-4xl z-10">Nos produits</h1>
            </div>
            <div className="mx-auto max-w-7xl py-32 px-6 lg:px-8">
                <div className="flex flex-wrap justify-between lg:mx-0 relative">
                    <div className="lg:w-1/2">
                        <img
                            src={beer}
                            alt="Product screenshot"
                            className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 z-10"
                            width={2432}
                            height={1442}
                        />
                    </div>
                    <div className="lg:w-1/2 lg:pr-8 lg:pt-4 z-10 mt-20"
                         data-aos="fade-left"
                         data-aos-offset="200"
                         data-aos-delay="50"
                         data-aos-duration="1000"
                         data-aos-easing="ease-in-out"
                    >
                        <div className="lg:max-w-lg backdrop-blur-xl bg-opacity-50 p-4 border border-gray-300 rounded-lg shadow-amber-950-3xl bg-white">
                            <div className="bg-dark-div p-4 rounded">

                                <p className="mt-6 text-lg font-bold leading-8">
                                    Le travail permet à la communauté de vivre du travail de ses mains.
                                    Une fromagerie est la principale ressource de la communauté.
                                    Outre ce travail de type industriel, il y a encore le Magasin et la vente de la Bière.
                                    Mais il faut également assurer tous les services de la communauté : cuisine, entretien, lessive.
                                </p>
                                <div className="mt-10">

                                    <a
                                        href="#"
                                        className="inline-flex font-bold items-center justify-center px-5 py-3 text-base rounded-lg bg-more-lighter-shade text-white hover:bg-darker-shade"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                        </svg>
                                        Visiter notre magasin
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutSection;
