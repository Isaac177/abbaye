import React from "react";
import Author from "./Author";
import {PostProps} from "../interfaces/infor-section";
import AOS from 'aos';
import 'aos/dist/aos.css';




const InfoPost: React.FC<PostProps> = ({post}) => {
    React.useEffect(() => {
        AOS.init();
    }, []);

    return (
        <article className="flex max-w-xl flex-col items-start justify-between p-6"
                 data-aos="fade-up"
                 data-aos-offset="200"
                 data-aos-delay={post.id * 300}
                 data-aos-duration="1000"
                 data-aos-easing="ease-in-out">
            <div className="h-64 w-full rounded-lg overflow-hidden mb-6">
                <img
                    src={post.image} alt=""
                    className="inset-0 w-full h-full object-cover hover:scale-125 hover:cursor-pointer transition duration-150 ease-in-out"
                />
            </div>
            <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                </time>
                <div className="flex flex-row items-center gap-x-2 hover:text-red-600 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                    </svg>
                    <span className="text-gray-500 hover:text-red-600 cursor-pointer">{post.likes}</span>
                </div>
                <div className="flex flex-row items-center gap-x-2 hover:text-red-600 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                    </svg>
                    <span className="text-gray-500 hover:text-red-600 cursor-pointer">{post.comments}</span>
                </div>
                    <a href={post.category.href}
                   className="relative z-10 rounded-full bg-complementary px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                    {post.category.title}
                </a>
            </div>
            <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-red-600">
                    <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                    </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
            </div>
            <Author author={post.author} />
        </article>
    );
};

export default InfoPost;
