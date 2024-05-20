import Image from "next/image"
import Link from "next/link"

export default function ArticlePreview({ title, image, prevText, keywords, articleId }) {
    const fileStorage = '/images/'
    return (
        <>

            <div className="border rounded-xl hover:border-2 p-5">
                <Link  href={`/articles/${articleId}`}>
                    <h2 className="text-2xl mb-5">{title}</h2>
                    <div className="flex flex-row">
                        <Image src={`${fileStorage}${image}`} alt={`${title} - image preview`} width={75} height={75} className="m-5 mr-10"></Image>
                        <p className="italic text-sm">{prevText}</p>
                    </div>
                </Link>
                <div className="flex justify-end pt-3 sm:pt-0 text-center">
                    {keywords.length > 0 ? (
                        keywords.map((keyword, index) => (
                            <p className="bg-slate-100 text-slate-950 ml-1 mr-1 pl-3 pr-3 rounded-xl" key={index}>{keyword}</p>
                        ))

                    ) : (
                        <>
                            <p className="bg-slate-100 text-slate-950 ml-1 mr-1 pl-3 pr-3 rounded-xl"> No Keywords </p>
                        </>
                    )
                    }
                </div>
            </div>

        </>
    )
}