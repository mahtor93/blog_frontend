import Image from "next/image";
import { posts } from "@/example_data/posts";
import ArticlePreview from "@/components/blogPreview.js";
export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-[750px] space-y-7 m-2 overflow-auto">
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
    </>
  );
}
