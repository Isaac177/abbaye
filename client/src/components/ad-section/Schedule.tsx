import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react";


interface SolemnityProps {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    scheduleType: 'solemnity' | 'week';
}

interface ScheduleItem {
    time: string;
    text: string;
}

const SolemnitySchedule: ScheduleItem[] = [
    { time: '04 h 00', text: 'Lever' },
    { time: '04 h 15', text: 'Vigiles (office de nuit)' },
    { time: '05 h 30', text: 'Temps personnel pour la Lectio Divina et la prière silencieuse (temps également pour le petit déjeuner et la toilette)' },
    { time: '07 h 00', text: 'Laudes' },
    { time: '07 h 45', text: 'Temps personnel pour la Lectio Divina et la prière silencieuse' },
    { time: '08 h 45', text: 'Tierce' },
    { time: '09 h 00', text: 'Temps personnel pour la lecture, la prière, etc.' },
    { time: '11 h 00', text: 'Sexte et Eucharistie' },
    { time: '12 h 30', text: 'Déjeuner' },
    { time: '13 h 15', text: 'Sieste pour ceux qui le souhaitent' },
    { time: '14 h 15', text: 'None' },
    { time: '14 h 30', text: 'Temps personnel' },
    { time: '16 h 00', text: 'Vêpres' },
    { time: '16 h 45', text: 'Temps personnel' },
    { time: '17 h 45', text: 'Salut du Saint Sacrement' },
    { time: '18 h 15', text: 'Souper' },
    { time: '19 h 30', text: 'Chapitre communautaire' },
    { time: '20 h 00', text: 'Complies' },
    { time: '20 h 30', text: 'Repos' },
];

const WeekSchedule: ScheduleItem[] = [
    { time: '04 h 00', text: 'Lever' },
    { time: '04 h 15', text: 'Vigiles (office de nuit)' },
    { time: '05 h 45', text: 'Temps personnel pour la Lectio Divina et la prière silencieuse' },
    { time: '06 h 30', text: 'Laudes' },
    { time: '07 h 10', text: 'Temps personnel pour la Lectio Divina et la prière silencieuse (pour certains frères, le travail commence : fromagerie, cuisine, infirmerie)' },
    { time: '08 h 30', text: 'Tierce et Eucharistie (mardi, mercredi, vendredi, samedi)' },
    { time: '08 h 30', text: 'Tierce (lundi et jeudi)' },
    { time: '08 h 45 (ou 09 h 15)', text: 'Travail' },
    { time: '12 h 00', text: 'Sexte' },
    { time: '12 h 15', text: 'Déjeuner' },
    { time: '13 h 00', text: 'Sieste pour ceux qui le souhaitent' },
    { time: '14 h 00', text: 'None' },
    { time: '14 h 15', text: 'Travail' },
    { time: '16 h 15', text: 'Fin du travail : début d’un temps de lecture personnelle et de prière, pour rassembler sa journée sous le regard de Dieu' },
    { time: '17 h 15', text: 'Vêpres (mardi, mercredi, vendredi, samedi)' },
    { time: '17 h 15', text: 'Vêpres et Eucharistie (lundi, jeudi)' },
    { time: '18 h 00', text: 'Souper (mardi, mercredi, vendredi, samedi)' },
    { time: '18 h 30', text: 'Souper (lundi, jeudi)' },
    { time: '19 h 30', text: 'Chapitre communautaire (mardi, mercredi, vendredi, samedi)' },
    { time: '20 h 00', text: 'Complies' },
    { time: '20 h 30', text: 'Repos' },
];


const Schedule: React.FC<SolemnityProps> = ({isOpen, scheduleType, onClose}) => {
    const scheduleData = scheduleType === 'solemnity' ? SolemnitySchedule : WeekSchedule;
    const modalTitle = scheduleType === 'solemnity' ? 'Dimanches Solennités chômées' : 'Semaine (du lundi au samedi)';

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            backdrop="blur"
            size="5xl"
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 text-3xl">{modalTitle}</ModalHeader>
                        <ModalBody>
                            {scheduleData.map((item, index) => (
                                <div key={index} className="flex items-center space-x-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#f67474" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <span className="font-semibold">{item.time}:</span>
                                    <span>{item.text}</span>
                                </div>
                            ))}
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose}>
                                Fermer
                            </Button>
                            <Button
                                onPress={onClose}
                                className='bg-main-color hover:bg-analogous-1 text-white'
                            >
                                Action
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};


export default Schedule;
