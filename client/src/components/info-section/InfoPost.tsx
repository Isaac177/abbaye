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
