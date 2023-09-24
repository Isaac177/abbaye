import React from "react";
import abbaye from "../../assets/images/abbaye.png";

const posts = [
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
const NewSection: React.FC = () => {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-dark-text sm:text-4xl">Dernières informations</h2>
                    <p className="mt-2 italic text-lg leading-8 text-gray-500">
                        « Qu'ils sont beaux les pieds des messagers de bonnes nouvelles. » (Rm 10, 15)
                    </p>
                </div>
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200
                pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => {
                        return (
                            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between p-6
                       hover:shadow-lg transition duration-150 ease-in-out rounded-lg overflow-hidden">
                            <div className="h-64 w-full rounded-lg overflow-hidden mb-6">
                                <img
                                    src={post.image}
                                    alt=""
                                    className="inset-0 w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex items-center gap-x-4 text-xs">
                                <time dateTime={post.datetime} className="text-gray-500">
                                    {post.date}
                                </time>
                                <a
                                    href={post.category.href}
                                    className="relative z-10 rounded-full bg-complementary px-3 py-1.5
                                    font-medium text-gray-600 hover:bg-gray-100"
                                >
                                    {post.category.title}
                                </a>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    <a href={post.href}>
                                        <span className="absolute inset-0" />
                                        {post.title}
                                    </a>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                                <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                <div className="text-sm leading-6">
                                    <p className="font-semibold text-gray-900">
                                        <span className="absolute inset-0" />
                                        {post.author.name}
                                    </p>
                                </div>
                            </div>
                        </article>
                        )}
                    )}
                </div>
            </div>
        </div>
    )
};

export default NewSection;