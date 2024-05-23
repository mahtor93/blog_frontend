'use client'
import { posts } from "@/example_data/posts"
import Paginator from "@/components/paginator"
import configBlog from "@/example_data/config"
import ArticlePreview from "@/components/blogPreview"
import { IoSadOutline } from "react-icons/io5";
import { useState, useEffect } from "react";

export default function HashtagArticles({ params }) {
  const [layoutConfig, setLayoutConfig] = useState(configBlog.mainLayout)
  const [hashtag, setHashtag] = useState("")
  const [layoutView, setLayoutView] = useState('')
  const [orderView, setOrderView] = useState('')
  const fileStorage = '/images/'
  const filteredArticles = posts.filter(article => article.keywords.includes(hashtag))
  console.log(params)
  useEffect(() => {
    setHashtag(params.articleHashtag)
    if (layoutConfig === 'grid') {
      setLayoutView('lg:mx-[250px]')
      setOrderView('grid h-screen lg:grid-cols-3 md:grid-cols-2 grid-cols-1 sm:gap-4 md:gap-5 md:ml-5 md:mr-5 gap-5 ml-5 mr-5')
    }
    if (layoutConfig === 'column') {
      setLayoutView('flex justify-center items-center min-h-screen')
      setOrderView('max-w-[750px] space-y-7 m-2 overflow-auto')
    }
    if (layoutConfig === 'masonry') {
      setLayoutView('')
      setOrderView('')
    }
  }, [layoutConfig, params.articleHashtag])


  return (
    <>

      {filteredArticles.length > 0 ? (
        <div className={`${layoutView}`}>
          <div className={`${orderView}`}>
            {filteredArticles.map((post, index) => (
              <ArticlePreview
                key={index}
                articleId={post.articleId}
                title={post.title}
                prevText={post.prevText}
                image={post.image}
                keywords={post.keywords}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen w-full">
          <div className="mb-3 text-9xl">
            <IoSadOutline />
          </div>
          <div className="flex items-center justify-center w-full text-2xl">
            {`No Posts for hashtag #${hashtag}`}
          </div>
        </div>
      )}



    </>
  )
}