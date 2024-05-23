import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react";
import configBlog from "@/example_data/config";

export default function ArticlePreview({ title, image, prevText, keywords, articleId, author }) {
    const [layoutConfig, setLayoutConfig] = useState(configBlog.mainLayout) //3 estados: column, grid, masonry
    const [layoutView, setLayoutView] = useState('')
    const [hashtagView, setHashtagView] = useState('')
    const fileStorage = '/images/'
    useEffect(() => {
        if (layoutConfig === 'grid') {
            setLayoutView('flex flex-col items-center justify-center ')
            setHashtagView('flex flex-col items-end w-full mt-5 justify-end align-end mb-5 pt-5')
        }
        if (layoutConfig === 'column') {
            setLayoutView('flex flex-col items-center  justify-center')
            setHashtagView('flex justify-end items-end pt-3 sm:mt-5 text-center')
        }
        if (layoutConfig === 'masonry') {
            setLayoutView('break-after-all overflow-hidden')
            setHashtagView('flex pt-3 sm:mt-5 text-center')
        }
    }, [layoutConfig])

    return (
        <>
            <div className="">
                <div className="border transition ease-in-out duration-300 rounded-xl dark:border-blue-600 border-blue-800 delay-50  mb-2 hover:shadow-blue-400 hover:shadow-lg p-5">
                    <div className={`${layoutView}`}>
                        <Link href={`/articles/${articleId}`}>
                            <div className="object-none w-150 place-items-center rounded-2xl mb-5">
                                <img src={`${fileStorage}${image}`} alt={`${title} - image preview`} className="w-full h-[175px] rounded-2xl rounded2xl object-cover"></img>
                            </div>
                            <h2 className="text-2xl">{title}</h2>
                            <p className="italic mt-3 mb-3">by {author}</p>
                            <p className="italic text-sm">{prevText}</p>
                        </Link>
                        <div className={`${hashtagView}`}>
                            <div className={layoutConfig==='column'?"flex flex-wrap justify-center":"flex flex-wrap justify-end"}>
                            {keywords.length > 0 ? (
                                keywords.map((keyword, index) => (
                                    <Link href={`/hashtags/${keyword}`} className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 mb-2  duration-300" key={index}>
                                        <p className="border border-blue-600 bg-slate-950 hover:border-blue-600 hover:text-blue-600 dark:text-blue-600 text-slate-100 ml-1 mr-1 pl-3 pr-3 rounded-xl" key={index}>{keyword}</p>
                                    </Link>
                                ))
                            ) : (
                                <>
                                    <p className="border border-blue-600 dark:text-blue-600 ml-1 mr-1 pl-3 pr-3 rounded-xl"> No Keywords </p>
                                </>
                            )
                            }</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}