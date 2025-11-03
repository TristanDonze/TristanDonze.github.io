import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type BlogFrontmatter = {
  title: string;
  date: string;
  description?: string;
  cover?: string;
};

export type BlogPost = BlogFrontmatter & {
  slug: string;
  content: string;
};

const BLOG_DIRECTORY = path.join(process.cwd(), "content", "blog");

const POST_FILE_EXTENSIONS = [".mdx", ".md"];

export function getPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIRECTORY)) {
    return [];
  }

  return fs
    .readdirSync(BLOG_DIRECTORY)
    .filter((file) =>
      POST_FILE_EXTENSIONS.some((extension) => file.endsWith(extension))
    )
    .map((file) => file.replace(/\.mdx?$/, ""));
}

export function getPostBySlug(slug: string): BlogPost | null {
  const normalizedSlug = slug.replace(/\.mdx?$/, "");
  const candidateFiles = POST_FILE_EXTENSIONS.map((extension) =>
    path.join(BLOG_DIRECTORY, `${normalizedSlug}${extension}`)
  );

  const existingFile = candidateFiles.find((filePath) =>
    fs.existsSync(filePath)
  );

  if (!existingFile) {
    return null;
  }

  const fileContents = fs.readFileSync(existingFile, "utf8");
  const { data, content } = matter(fileContents);

  const frontmatter = data as BlogFrontmatter;
  const cover =
    typeof frontmatter.cover === "string" && frontmatter.cover.length > 0
      ? frontmatter.cover
      : undefined;

  if (cover && !cover.startsWith("/images/")) {
    throw new Error(
      `Cover image for post "${normalizedSlug}" must use the /images/... path. Received: ${cover}`
    );
  }

  return {
    slug: normalizedSlug,
    title: frontmatter.title,
    date: frontmatter.date,
    description: frontmatter.description,
    cover,
    content,
  };
}

export function getAllPosts(): BlogPost[] {
  return getPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}
