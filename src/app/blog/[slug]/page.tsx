import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import type { ComponentProps } from "react";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

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

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post not found",
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const mdxComponents = {
    img: (props: ComponentProps<"img">) => {
      const {
        src = "",
        alt = "",
        width,
        height,
        className,
        loading: loadingProp,
        ...rest
      } = props;

      if (typeof src !== "string" || !src.startsWith("/images/")) {
        throw new Error(
          `Blog images must use the /images/... path and reside in public/images. Received: ${src}`
        );
      }

      const numericWidth =
        typeof width === "number"
          ? width
          : width
          ? Number.parseInt(width, 10)
          : 800;
      const numericHeight =
        typeof height === "number"
          ? height
          : height
          ? Number.parseInt(height, 10)
          : Math.round((numericWidth * 9) / 16);
      const isGif = src.toLowerCase().endsWith(".gif");

      const wrapperClass =
        "block my-12 w-full text-center [&>img]:inline-block [&>img]:rounded-xl [&>img]:shadow-md [&>img]:object-cover";

      if (isGif) {
        return (
          <span className={`${wrapperClass}`}>
            <Image
              src={src}
              alt={alt}
              width={numericWidth}
              height={numericHeight}
              loading={loadingProp ?? "lazy"}
              className={className}
              {...rest}
            />
          </span>
        );
      }

      return (
        <span className={wrapperClass}>
          <Image
            src={src}
            alt={alt}
            width={numericWidth}
            height={numericHeight}
            loading={loadingProp ?? "lazy"}
            sizes="(min-width: 1024px) 800px, 90vw"
            className={className}
            {...rest}
          />
        </span>
      );
    },
  };

  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      <div className="max-w-screen-lg mx-auto px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
          <header className="col-span-12 md:col-span-4 space-y-6 mb-12 md:mb-0">
            <span className="text-xs uppercase tracking-[0.3em] text-zinc-500">
              Blog
            </span>
            <h1 className="font-serif text-3xl leading-tight text-zinc-900">
              {post.title}
            </h1>
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-zinc-500">
              {formatDate(post.date)}
            </p>
            {post.description && (
              <p className="font-serif text-sm leading-relaxed text-zinc-600">
                {post.description}
              </p>
            )}
            {post.cover && (
              <div className="relative mt-8 aspect-[7/5] overflow-hidden rounded-xl shadow-md">
                <Image
                  src={post.cover}
                  alt={post.title}
                  fill
                  priority
                  sizes="(min-width: 1024px) 360px, 90vw"
                  className="object-cover"
                />
              </div>
            )}
          </header>
          <article className="col-span-12 md:col-span-7 md:col-start-6 font-serif text-base leading-relaxed text-zinc-700 space-y-6 [&_a]:underline [&_a]:decoration-1 [&_a]:text-zinc-900 [&_a:hover]:text-zinc-600 [&_strong]:text-zinc-900 [&_h1]:text-3xl [&_h1]:font-serif [&_h1]:text-zinc-900 [&_h2]:text-2xl [&_h2]:text-zinc-900 [&_h2]:mt-12 [&_h2]:mb-6 [&_h3]:text-xl [&_h3]:text-zinc-900 [&_h3]:mt-10 [&_h3]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_blockquote]:border-l-2 [&_blockquote]:border-zinc-300 [&_blockquote]:pl-4 [&_blockquote]:italic">
            <MDXRemote
              source={post.content}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkMath],
                  rehypePlugins: [rehypeKatex],
                },
              }}
              components={mdxComponents}
            />
          </article>
        </div>
      </div>
    </div>
  );
}
