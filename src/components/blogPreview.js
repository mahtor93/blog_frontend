import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react";
import configBlog from "@/example_data/config";

export default function ArticlePreview({ title, image, prevText, keywords, articleId }) {
    const [layoutConfig, setLayoutConfig] = useState(configBlog.mainLayout) //3 estados: column, grid, masonry
    const [layoutView, setLayoutView] = useState('')
    const [hashtagView, setHashtagView] = useState('')
    const fileStorage = '/images/'
    useEffect(() => {
        if (layoutConfig === 'grid') {
            setLayoutView('flex flex-col items-center justify-center ')
            setHashtagView('flex flex-row items-end w-full mt-5 justify-end align-end mb-5 pt-5')
        }
        if (layoutConfig === 'column') {
            setLayoutView('flex flex-col items-center  justify-center')
            setHashtagView('flex justify-end items-end pt-3 sm:mt-5 text-center')
        }
        if (layoutConfig === 'masonry') {
            setLayoutView('')
            setHashtagView('')
        }
    }, [layoutConfig])

    return (
        <>

            <div className="border transition ease-in-out duration-300 relative rounded-xl dark:border-indigo-950  border-blue-800 hover:border-blue-600  shadow-lg p-5">
                <div className={`${layoutView}`}>
                    <Link href={`/articles/${articleId}`}>
                        
                        <div className="object-none w-150 place-items-center rounded-2xl mb-5">
                        <img src={`${fileStorage}${image}`} alt={`${title} - image preview`} className="w-full h-[175px] rounded-2xl rounded2xl object-cover"></img>
                        </div>
                        <h2 className="text-2xl">{title}</h2>
                        <p className="italic text-sm">{prevText}</p>
                    </Link>

                    <div className={`${hashtagView}`}>
                        {keywords.length > 0 ? (
                            keywords.map((keyword, index) => (
                                <p className="dark:bg-slate-100 bg-slate-950 dark:text-slate-950 text-slate-100 ml-1 mr-1 pl-3 pr-3 rounded-xl" key={index}>{keyword}</p>
                            ))
                        ) : (
                            <>
                                <p className="dark:bg-slate-100 dark:text-slate-950 ml-1 mr-1 pl-3 pr-3 rounded-xl"> No Keywords </p>
                            </>
                        )
                        }
                    </div>
                </div>
            </div>

        </>
    )
}