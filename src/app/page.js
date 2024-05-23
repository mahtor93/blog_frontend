'use client'
import Image from "next/image";
import { posts } from "@/example_data/posts";
import ArticlePreview from "@/components/blogPreview.js";
import Paginator from "@/components/paginator";
import configBlog from "@/example_data/config";
import { useState, useEffect } from "react";
import { PiSpinnerBallBold } from "react-icons/pi";
export default function Home() {
  const [layoutConfig, setLayoutConfig] = useState(configBlog.mainLayout) //3 estados: column, grid, masonry
  const [layoutView, setLayoutView] = useState('')
  const [orderView, setOrderView] = useState('')
  const [loading, setLoading] = useState(true)
  const fileStorage = '/images/'

  useEffect(() => {
    // Simulación de carga asincrónica de los posts
    setTimeout(() => {
      setLoading(false); // Indicar que se ha cargado
    }, 1000);
  }, []);

  useEffect(() => {
    if (layoutConfig==='grid') {
      setLayoutView('lg:px-[250px] lg:py-[50px]')
      setOrderView('grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 sm:gap-4 md:gap-5 md:ml-5 md:mr-5 gap-5 ml-5 mr-5')
    }
    if (layoutConfig === 'column') {
      setLayoutView('flex justify-center items-center min-h-screen')
      setOrderView('max-w-[750px] space-y-7 m-2 overflow-auto')
    }
    if (layoutConfig === 'masonry'){
      setLayoutView('lg:px-[250px] lg:py-[50px] overflow-hidden lg:columns-3 md:columns-2 columns-1 mx-5')
      setOrderView('space-y-5 break-after-column')
    }
  }, [layoutConfig])

  return (
    <>
      {loading ? ( // Mostrar spinner si está cargando
        <div className="flex items-center justify-center h-screen">
          <PiSpinnerBallBold className="text-5xl text-gray-500 animate-spin" />
        </div>
      ) : (
        <div className={`${layoutView}`}>
          <div className={`${orderView}`}>
            {posts.length > 0 ? (
              posts.map((post, index) => (
                <ArticlePreview
                  key={index}
                  articleId={post.articleId}
                  author={post.author}
                  title={post.title}
                  prevText={post.prevText}
                  image={post.image}
                  keywords={post.keywords}
                />
              ))
            ) : (
              <div>No Posts available</div>
            )}
          </div>
        </div>
      )}
      <div className="flex justify-center items-center">
        <div className="max-w-[750px] space-y-7 m-2 overflow-auto">
          <Paginator />
        </div>
      </div>
    </>
  );
}
