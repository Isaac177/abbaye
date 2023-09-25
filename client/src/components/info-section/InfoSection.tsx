import SectionHeader from "../general/SectionHeader.tsx";
import React from "react";
import abbaye from "../../assets/images/abbaye.png";
import InfoPost from "./InfoPost.tsx";


interface PostType {
    id: number;
    title: string;
    href: string;
    description: string;
    date: string;
    datetime: string;
    category: { title: string; href: string };
    author: AuthorType;
    image: string;
}

interface AuthorType {
    name: string;
    imageUrl: string;
}

const posts: PostType[] = [
    {
        id: 1,
        title: 'Déces de Dom Godefroy',
        href: '#',
        description:
            'Nous apprenons le décès tragique de Dom Godefroy le nouvel abbé d’Acey. Nous portons la communauté dans notre prière. Et jeudi 10, Père Abbé ira nous représenter aux funérailles qui auront lieu le vendredi 11. Retour le 12.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Nouvelles', href: '#' },
        author: {
            name: 'Mont des Cats',
            imageUrl:
            abbaye,
        },
        image:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXR5JTIwY2F0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 2,
        title: 'La vie monastique',
        href: '#',
        description:
            'En cette fête de la Transfiguration, nous regardons, en guise de video divina, comment la vie monastique est vécue au monastère de Vanves, tout simplement.',
        date: 'Mar 10, 2020',
        datetime: '2020-03-10',
        category: { title: 'Vie monastique', href: '#' },
        author: {
            name: 'Mont des Cats',
            imageUrl:
            abbaye,
        },
        image:
            'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhdXR5JTIwY2F0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 3,
        title: 'Les travaux',
        href: '#',
        description:
            'C’est avec joie que nous revoyons Petre et Florin arrivés tout droit de leur Roumanie natale via Charleroi…. « comme il se doit ». Ils passeront quelques semaines parmi nous comme d’habitude jusqu’au 30 septembre précisément.',
        date: 'Feb 12, 2020',
        datetime: '2020-02-12',
        category: { title: 'Vie monastique', href: '#' },
        author: {
            name: 'Mont des Cats',
            imageUrl:
            abbaye,
        },
        image:
            'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhdXR5JTIwY2F0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    }
]
const InfoSection: React.FC = () => {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <SectionHeader
                    sectionTitle="Dernières informations"
                    sectionSmallText="« Qu'ils sont beaux les pieds des messagers de bonnes nouvelles. » (Rm 10, 15)"
                />
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => <InfoPost key={post.id} post={post} />)}
                </div>
            </div>
        </div>
    );
};

export default InfoSection;