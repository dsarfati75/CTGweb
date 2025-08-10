import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export type PostMeta = {
  slug: string;
  title: string;
  summary?: string;
  date: string; // ISO string
  tags?: string[];
};

const postsDir = path.join(process.cwd(), "content", "posts");

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDir)) return [];
  return fs
    .readdirSync(postsDir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getPostMeta(slug: string): PostMeta | null {
  const fullPath = path.join(postsDir, slug + ".md");
  if (!fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);
  return {
    slug,
    title: data.title ?? slug,
    summary: data.summary ?? "",
    date: (data.date ? new Date(data.date).toISOString() : new Date().toISOString()),
    tags: Array.isArray(data.tags) ? data.tags : [],
  };
}

export function getAllPostsMeta(): PostMeta[] {
  const slugs = getAllPostSlugs();
  const metas = slugs
    .map((slug) => getPostMeta(slug))
    .filter((m): m is PostMeta => !!m);
  // sort desc by date
  return metas.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostHtml(slug: string): Promise<{ meta: PostMeta; html: string } | null> {
  const fullPath = path.join(postsDir, slug + ".md");
  if (!fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();
  const meta: PostMeta = {
    slug,
    title: data.title ?? slug,
    summary: data.summary ?? "",
    date: (data.date ? new Date(data.date).toISOString() : new Date().toISOString()),
    tags: Array.isArray(data.tags) ? data.tags : [],
  };
  return { meta, html: contentHtml };
}
