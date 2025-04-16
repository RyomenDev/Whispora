import React from "react";
import { useParams, Link } from "react-router-dom";
import { CompactCard } from "../DiscoverPage/Cards.jsx";
import { BlogDiscoverData as blogDiscover } from "../../Data";
import LikeButton from "./LikeButton";
import CommentBox from "./CommentBox";
import { MarkdownRenderer } from "../../utility";
import ViewIcon from "../../assets/svgJSX/ViewIcon.jsx"; 

const BlogPostPage = () => {
  const { id } = useParams();
  const post = blogDiscover.find((item) => String(item.id) === id);
  const likeCount = post.likes;

  const recommendedCourses = blogDiscover.filter(
    (item) => item.isRecommended && String(item.id) !== id
  );

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-10 text-center text-red-500">
        <h1 className="text-2xl font-bold">404 - Blog Post Not Found</h1>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-green-50 to-white min-h-screen py-10 px-4 lg:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-10">
        <main className="lg:col-span-3 space-y-8">
          <h1 className="text-4xl font-bold text-emerald-900 leading-snug font-serif">
            {post.title}
          </h1>

          <img
            src={post.image}
            alt={post.title}
            className="w-full h-96 object-cover rounded-xl shadow"
          />

          <div className="text-sm text-gray-500">
            By <span className="text-emerald-700">{post.author}</span> |{" "}
            {post.date} • {post.readingTime} read
          </div>

          <div className="flex flex-wrap gap-2 text-xs mt-2">
            {post.tags?.map((tag, index) => (
              <span
                key={index}
                className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="prose lg:prose-lg max-w-none text-justify prose-headings:font-serif prose-p:leading-relaxed prose-p:text-[17px] prose-p:font-[500] prose-strong:text-emerald-900">
            <MarkdownRenderer>{post.description}</MarkdownRenderer>
          </div>

          <div className="flex items-center gap-6 pt-4 text-gray-700">
            <div className="flex items-center gap-2 text-sm font-medium">
              <LikeButton postId={post.id} likeCount={likeCount} />
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <ViewIcon />
              <span>{post.views} views</span>
            </div>
          </div>

          <div className="pt-10">
            <CommentBox postId={post.id} />
          </div>
        </main>

        <aside className="lg:col-span-1 sticky top-24 self-start space-y-4">
          <h2 className="text-xl font-semibold text-emerald-800 border-b pb-2">
            Recommended Courses
          </h2>
          <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-y-auto lg:overflow-x-hidden pr-1 lg:pr-0 scrollbar-thin scrollbar-thumb-emerald-300 scrollbar-track-emerald-50 lg:max-h-[calc(100vh-8rem)]">
            {recommendedCourses.map((course, index) => (
              <div
                key={index}
                className="min-w-[14rem] h-56 flex-shrink-0 lg:min-w-0 lg:w-full"
              >
                <CompactCard item={course} />
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BlogPostPage;
