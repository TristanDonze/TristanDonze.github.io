import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/blog";

function formatDate(input: string) {
  const date = new Date(input);

  if (Number.isNaN(date.getTime())) {
    return input;
  }

  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      <div className="max-w-screen-lg mx-auto px-8 py-24">
        <header className="mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-zinc-500">
            Blog
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-zinc-900 mt-6">
            Writings
          </h1>
          <p className="font-serif text-sm text-zinc-600 mt-4 max-w-2xl">
            Welcome to my blog! Here, I’ll explore research papers that catch my attention, share the projects I’m working on, and explain AI concepts and techniques in a way that’s accessible and engaging. This space is mainly a way for me to deepen my own understanding, but I hope you’ll find something valuable here too!
          </p>
        </header>
        <div className="space-y-16">
          {posts.map((post) => (
            <article key={post.slug}>
              {post.cover ? (
                <Link
                  href={`/blog/${post.slug}`}
                  className="grid gap-6 md:grid-cols-[280px_1fr] group"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-md">
                    <Image
                      src={post.cover}
                      alt={post.title}
                      fill
                      sizes="(min-width: 1024px) 280px, 80vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="space-y-3">
                    <p className="font-sans text-xs uppercase tracking-[0.2em] text-zinc-500">
                      {formatDate(post.date)}
                    </p>
                    <h2 className="font-serif text-2xl text-zinc-900 group-hover:text-zinc-700 transition-colors">
                      {post.title}
                    </h2>
                    {post.description && (
                      <p className="font-serif text-sm leading-relaxed text-zinc-600 max-w-2xl">
                        {post.description}
                      </p>
                    )}
                    <div className="h-px bg-zinc-200 mt-6" />
                  </div>
                </Link>
              ) : (
                <Link href={`/blog/${post.slug}`} className="space-y-3 group">
                  <p className="font-sans text-xs uppercase tracking-[0.2em] text-zinc-500">
                    {formatDate(post.date)}
                  </p>
                  <h2 className="font-serif text-2xl text-zinc-900 group-hover:text-zinc-700 transition-colors">
                    {post.title}
                  </h2>
                  {post.description && (
                    <p className="font-serif text-sm leading-relaxed text-zinc-600 max-w-2xl">
                      {post.description}
                    </p>
                  )}
                  <div className="h-px bg-zinc-200 mt-6" />
                </Link>
              )}
            </article>
          ))}
          {posts.length === 0 && (
            <p className="font-serif text-sm text-zinc-600">
            No blog posts available at the moment. Please check back later!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
