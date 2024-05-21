import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react";

export default function ArticlePreview({ title, image, prevText, keywords, articleId }) {
    const [layoutConfig, setLayoutConfig] = useState('grid') //3 estados: column, grid, masonry
    const [layoutView, setLayoutView] = useState('')
    const [orderView, setOrderView] = useState('')
    const fileStorage = '/images/'
    useEffect(() => {
        if (layoutConfig === 'grid') {
            setLayoutView('flex items-center bg-blue-800')
            setOrderView('grid grid-cols-3 text-center justify-center')
        }
        if (layoutConfig === 'column') {
            setLayoutView('flex flex-row')
            setOrderView('flex justify-end pt-3 sm:pt-0 text-center')
        }
        if (layoutConfig === 'masonry'){
            setLayoutView('')
            setOrderView('')
        }
    }, [layoutConfig])

    return (
        <>

            <div className="border relative rounded-xl dark:border-indigo-950 border-blue-800 shadow-lg p-5">
                <Link href={`/articles/${articleId}`}>
                    <h2 className="text-2xl mb-5">{title}</h2>
                    <div className={`${layoutView}`}>
                        <Image src={`${fileStorage}${image}`} alt={`${title} - image preview`} width={75} height={75} className="m-5 mr-10"></Image>
                        <p className="italic text-sm">{prevText}</p>
                    </div>
                </Link>
                <div className={`${orderView}`}>
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

        </>
    )
}