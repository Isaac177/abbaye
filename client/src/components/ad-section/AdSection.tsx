import React from "react";
import SectionHeader from "../general/SectionHeader.tsx";
import week from "../../assets/images/christianism.png";
import solenity from "../../assets/images/jesus.png";
import hotel from "../../assets/images/hotellerie.jpg";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { config } from '../../../config';
import {Card, CardHeader, CardFooter, Image, Button, useDisclosure} from "@nextui-org/react";
import AOS from "aos";
import 'aos/dist/aos.css';
import Schedule from "./Schedule.tsx";


interface AdSectionProps {
    onOpen: () => void;
    onClose: () => void;
    isOpen: boolean;
}


mapboxgl.accessToken = config.mapboxToken;

const AdSection: React.FC<AdSectionProps> = () => {

    const [scheduleType, setScheduleType] = React.useState<'week' | 'solemnity'>('week');

    const { isOpen, onOpen, onClose } = useDisclosure();

    const mapContainerRef = React.useRef(null);

    React.useEffect(() => {
        AOS.init();

        const map = new mapboxgl.Map({
            container: mapContainerRef.current!,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [2.7009, 50.7989],
            zoom: 9
        });

        map.addControl(new mapboxgl.NavigationControl());

        map.addControl(new mapboxgl.FullscreenControl());

        new mapboxgl.Marker()
            .setLngLat([2.7009, 50.7989])
            .addTo(map);

        return () => map.remove();
    }, []);


    return(
        <div className="mx-auto max-w-7xl py-32 px-6 lg:px-8" style={{ marginBottom: '-46rem'}}>

            <SectionHeader sectionTitle='Séjourner chez nous' sectionSmallText=''/>

            <div className="lg:flex lg:flex-row justify-between lg:mx-0 relative gap-5 mt-20 block">
                <div className="lg:w-1/3 flex flex-col gap-5"
                        data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                >
                    <div className="flex flex-col rounded-xl items-center bg-analogous-2 p-10 w-full gap-y-8
                    hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1
                    hover:scale-100 hover:bg-lighter-shade cursor-pointer"
                         onClick={() => { onOpen(); setScheduleType('week'); }}
                    >
                        <img src={week} alt="week" className='w-24 h-24 opacity-50'/>
                        <p className="text-lg hover:text-white leading-8 text-gray-500 text-center">Horaire - Semaine (du lundi au samedi)</p>
                    </div>
                    <div className="flex flex-col rounded-xl items-center bg-analogous-2 p-10 w-full gap-y-8
                    hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1
                    hover:scale-100 hover:bg-lighter-shade cursor-pointer"
                         onClick={() => { onOpen(); setScheduleType('solemnity'); }}
                    >
                        <img src={solenity} alt="solenity" className='w-24 h-24 opacity-50'/>
                        <p className="text-lg leading-8 hover:text-white text-gray-500 text-center">Horaire - Solennité (dimanche et jours chomés)</p>
                    </div>
                </div>
                <div className="lg:w-full z-10 mt-10 lg:mt-0 h-96 lg:h-auto"
                        data-aos="fade-left"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                >
                    <Card isFooterBlurred className="w-full h-full col-span-12 sm:col-span-7">
                        <CardHeader className="absolute z-10 top-1 flex-col items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">Notre hôtellerie</p>
                            <h4 className="text-white/90 font-medium text-xl">Nos chambres sont là pour vous accueillir</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Relaxing app background"
                            className="z-0 w-full h-full object-cover"
                            src={hotel}
                        />
                        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                            <div className="flex flex-grow gap-2 items-center">
                                <Image
                                    alt="Breathing app icon"
                                    className="rounded-full w-10 h-11 bg-black"
                                    src="/images/breathing-app-icon.jpeg"
                                />
                                <div className="flex flex-col">
                                    <p className="text-tiny text-white/60 sm:text-ellipsis overflow-ellipsis">Fidèles à la tradition bénédictine, nous accueillons en notre hôtellerie
                                        les personnes qui souhaitent une pause dans leur vie, une retraite spirituelle, individuelle ou en groupe, une évaluation dans leur itinéraire,
                                        une écoute fraternelle.</p>
                                </div>
                            </div>
                            <Button radius="full" size="sm">Voir plus</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
            <div className="flex flex-col h-screen justify-between lg:mx-0 relative gap-10 lg:mt-20 lg:mb-96 m-10 mb-96"
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
            >
                <div
                    ref={mapContainerRef}
                    className="w-full h-full rounded-xl z-10 mb-0"
                    style={{ height: '500px', minHeight: '400px' }}
                />
            </div>
            <Schedule isOpen={isOpen} onClose={onClose} scheduleType={scheduleType}  onOpen={onOpen}/>
        </div>
    )
};

export default AdSection;