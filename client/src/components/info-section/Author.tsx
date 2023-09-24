import React from "react";
import {AuthorType} from "../interfaces/infor-section";

interface AuthorProps {
    author: AuthorType;
}
const Author: React.FC<AuthorProps> = ({author}) => {
    return (
        <div className="relative mt-8 flex items-center gap-x-4">
            <img src={author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
            <div className="text-sm leading-6">
                <p className="font-semibold text-gray-900">
                    <span className="absolute inset-0" />
                    {author.name}
                </p>
            </div>
        </div>
    );
};

export default Author;