export interface AuthorType {
    name: string;
    imageUrl: string;
}

export interface PostType {
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

export interface PostProps {
    post: PostType;
}


