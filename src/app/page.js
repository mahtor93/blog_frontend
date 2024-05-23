'use client'
import Image from "next/image";
import { posts } from "@/example_data/posts";
import ArticlePreview from "@/components/blogPreview.js";
import Paginator from "@/components/paginator";
import configBlog from "@/example_data/config";
import { useState, useEffect } from "react";
export default function Home() {
  const [layoutConfig, setLayoutConfig] = useState(configBlog.mainLayout) //3 estados: column, grid, masonry
  const [layoutView, setLayoutView] = useState('')
  const [orderView, setOrderView] = useState('')
  const fileStorage = '/images/'
  useEffect(() => {
    if (layoutConfig==='grid') {
      setLayoutView('mx-[250px]')
      setOrderView('grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 sm:gap-4 md:gap-5 md:ml-5 md:mr-5 gap-5 ml-5 mr-5')
    }
    if (layoutConfig === 'column') {
      setLayoutView('flex justify-center items-center min-h-screen')
      setOrderView('max-w-[750px] space-y-7 m-2 overflow-auto')
    }
    if (layoutConfig === 'masonry'){
      setLayoutView('')
      setOrderView('')
    }
  }, [layoutConfig])

  return (
    <>
      <div className={`${layoutView}`}>
        <div className={`${orderView}`}>
          {posts.length > 0 ? (
            posts.map((post, index) => (
              <ArticlePreview
                key={index}
                articleId={post.articleId}
                title={post.title}
                prevText={post.prevText}
                image={post.image}
                keywords={post.keywords}
              />
            ))
          ) : (
            <div>No Posts avaliable</div>
          )}

        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="max-w-[750px] space-y-7 m-2 overflow-auto">
          <Paginator />
        </div>
      </div>
        

    </>
  );
}
