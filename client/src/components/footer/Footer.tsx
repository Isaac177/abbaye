import React from 'react';

const Footer: React.FC = () => {


    const liStyles = 'text-sm font-light hover:text-main-color hover:cursor-pointer m-2 transition-colors duration-200';



        return (
            <footer className="h-full text-white p-8 flex flex-col justify-end z-0 bg-darker-shade"
                    aria-hidden="true">
                <div className="container mx-auto p-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 ">
                        <div>
                            <h3 className="font-bold mb-5">Spiritualité</h3>
                            <ul>
                                <li className={liStyles}>Les constitutions de l’Ordre</li>
                                <li className={liStyles}>La Liturgie des Heures</li>
                                <li className={liStyles}>Les offices monastiques</li>
                                <li className={liStyles}>La vocation</li>
                                <li className={liStyles}>La règle de Saint Benoît</li>
                                <li className={liStyles}>Le travail</li>
                                <li className={liStyles}>Bibliothèque monastique sur Internet</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-5">Histoire</h3>
                            <ul>
                                <li className={liStyles}>Ecce Elongavi…</li>
                                <li className={liStyles}>Chronologie détaillée</li>
                                <li className={liStyles}>Chronologie succincte</li>
                                <li className={liStyles}>Constructions et reconstructions</li>
                                <li className={liStyles}>Les constructions autour de l’Abbaye</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-5">Les abbés</h3>
                            <ul>
                                <li className={liStyles}>Dom Dominique Lacaes</li>
                                <li className={liStyles}>Dom Sébastien Wyart</li>
                                <li className={liStyles}>Dom Jérome Parent</li>
                                <li className={liStyles}>Dom Bernard Richebe</li>
                                <li className={liStyles}>Dom Sébastien Vandermalière</li>
                                <li className={liStyles}>Dom Achille Nivesse</li>
                                <li className={liStyles}>Dom André Louf</li>
                                <li className={liStyles}>Dom Guillaume Jedrzecjzak</li>
                                <li className={liStyles}>Dom Jacques Delesalle, 9ème abbé</li>
                                <li className={liStyles}>Dom Marc-André Di Péa, 10ème abbé</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-5">Pour se rendre au Mont des Cats</h3>
                            <ul>
                                <li className={liStyles}>Visiteurs d’une heure</li>
                                <li className={liStyles}>Hôtellerie</li>
                                <li className={liStyles}>Contact – Communauté</li>
                                <li className={liStyles}>Pastorale du tourisme</li>
                                <li className={liStyles}>Lieux d’accueil</li>
                                <li className={liStyles}>Plus loin</li>
                                <li className={liStyles}>Liens d’amis sur Internet</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex lg:flex-row justify-between items-center mt-20 flex-col space-y-4">
                    <div className="flex flex-row items-center">
                        <p className="text-sm font-light">© Tous droits réservés - Abbaye du Mont des Cats</p>
                        <p className="text-sm font-light mx-2">|</p>
                        <p className="text-sm font-light">Mentions légales</p>
                    </div>
                    <div className="flex flex-row items-center">
                        <p className="text-sm font-light">Suivez-nous sur</p>
                        <div className="flex flex-row items-center mx-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" className="w-4 h-4">
                                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.716-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                            </svg>
                            <p className="text-sm font-light mx-2">Facebook</p>
                        </div>
                        <div className="flex flex-row items-center mx-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" className="w-4 h-4">
                                <path d="M23.498 6.186a2.834 2.834 0 0 0-1.992-1.981C18.52 3.54 12 3.54 12 3.54s-6.52 0-9.507.664A2.834 2.834 0 0 0 .502 6.186C0 8.155 0 12 0 12s0 3.845.502 5.815a2.834 2.834 0 0 0 1.991 1.98c2.986.665 9.507.665 9.507.665s6.52 0 9.506-.665a2.834 2.834 0 0 0 1.993-1.98C24 15.845 24 12 24 12s0-3.845-.502-5.814zM9.545 15.568V8.432l6.05 3.568-6.05 3.568z"/>
                            </svg>
                            <p className="text-sm font-light mx-2">YouTube</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
export default Footer;
