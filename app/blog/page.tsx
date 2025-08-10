import Link from "next/link";
import { getAllPostsMeta } from "@/lib/posts";
import { format } from "date-fns";

export const dynamic = "force-static";

export const metadata = {
  title: "Blog | CinemaTech",
  description: "Insights on RMM, EDR, and IT for independent cinemas",
};

export default function BlogIndexPage() {
  const posts = getAllPostsMeta();
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-extrabold tracking-tight mb-2">Blog</h1>
      <p className="text-neutral-600 mb-8">Thoughts on remote monitoring, EDR, POS migrations, and practical IT for independent theaters.</p>
      <div className="space-y-6">
        {posts.length === 0 && (
          <p className="text-neutral-500">No posts yet. Add Markdown files to <code className="bg-neutral-100 px-1 rounded">/content/posts</code>.</p>
        )}
        {posts.map((post) => (
          <article key={post.slug} className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-semibold">
              <Link href={`/blog/${post.slug}`} className="hover:underline">
                {post.title}
              </Link>
            </h2>
            <div className="text-sm text-neutral-500 mt-1">
              {format(new Date(post.date), "MMM d, yyyy")}
              {post.tags && post.tags.length > 0 && (
                <span> · {post.tags.join(", ")}</span>
              )}
            </div>
            {post.summary && <p className="text-neutral-700 mt-3">{post.summary}</p>}
            <div className="mt-4">
              <Link href={`/blog/${post.slug}`} className="inline-block rounded-xl border px-3 py-1 text-sm hover:bg-neutral-50">
                Read more
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
