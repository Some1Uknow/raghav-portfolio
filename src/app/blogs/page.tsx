"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface CoverImage {
  url: string;
}

interface BlogPost {
  title: string;
  brief: string;
  url: string;
  slug: string;
  coverImage?: CoverImage;
  publishedAt: string;
}

export default function BlogsPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/blogs");

        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }

        const posts = await response.json();
        setPosts(posts);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching blog posts:", err);
        setError("Failed to load blog posts");
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-black">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-purple-500 border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-black text-red-400">
        <div className="text-center p-8 bg-gray-900 rounded-lg shadow-2xl max-w-md">
          <h2 className="text-2xl font-semibold mb-2">Something went wrong</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-16 bg-black text-gray-100">
      <h1 className="text-5xl font-bold mb-16 text-center tracking-tight bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
        Blog Posts
      </h1>

      {posts.length === 0 ? (
        <div className="text-center py-24 text-gray-400">
          <h2 className="text-2xl font-medium">No blog posts found</h2>
          <p className="mt-2">Check back later for updates!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => {
            const coverUrl = post.coverImage?.url || "";

            return (
              <div
                key={post.slug}
                className="rounded-xl overflow-hidden border border-gray-800 hover:border-purple-500 transition-all duration-300 bg-gray-900 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/20"
              >
                {coverUrl && (
                  <div className="relative">
                    <img
                      src={coverUrl}
                      alt={post.title}
                      className="w-full h-56 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                )}
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-100 mb-2 line-clamp-2 hover:text-purple-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-400 mb-4 font-light">
                    {formatDate(post.publishedAt)}
                  </p>
                  <p className="text-gray-300 text-sm mb-6 line-clamp-3 font-light">
                    {post.brief}
                  </p>
                  <Link
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-400 text-sm font-medium hover:text-purple-300 transition-colors group"
                  >
                    Read Full Article
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}
