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
                <div className=" flex flex-col items-center max-w-[750px]">
                    <h2 className="text-2xl">{article.title}</h2>
                    <Image src={`${fileStorage}${article.image}`} alt={`${article.title} - image preview`} width={250} height={250} className="m-5 mr-10"></Image>
                    <p>{article.content}</p>
                </div>
            </div>
        </>
    )

};
