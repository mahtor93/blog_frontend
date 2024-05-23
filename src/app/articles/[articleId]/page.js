'use client'
import { posts } from "@/example_data/posts"
import Image from "next/image";


export default function ArticleLayout({ params }) {
    const fileStorage = '/images/'
    const { articleId } = params
    const article = posts.find(article => article.articleId === articleId);
    console.log(article.title)
    if (!article) {
        return <p>Article Not Found.</p>
    }
    return (
        <>
            <div className="flex flex-col m-5 items-center">
                <div className=" flex flex-col items-center space-y-5 max-w-[750px]">
                    <h2 className="text-4xl">{article.title}</h2>
                    <img src={`${fileStorage}${article.image}`} alt={`${article.title} - image preview`} className="w-full h-[350px] rounded-xl rounded2xl object-cover"></img>
                    <p>{article.content}</p>
                </div>
            </div>
        </>
    )

};
