import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { getAllPostSlugs, getPostHtml } from "@/lib/posts";
import PrintButton from "@/components/PrintButton";

export const dynamic = "force-static";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getPostHtml(params.slug);
  if (!data) return { title: "Post not found | CinemaTech" };
  return {
    title: `${data.meta.title} | CinemaTech`,
    description: data.meta.summary || "CinemaTech blog post",
  };
}

export default async function BlogPostPage({ params }: Props) {
  const data = await getPostHtml(params.slug);
  if (!data) return notFound();

  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight">{data.meta.title}</h1>
        <div className="text-sm text-neutral-500 mt-2">
          {format(new Date(data.meta.date), "MMM d, yyyy")}
          {data.meta.tags && data.meta.tags.length > 0 && (
            <span> · {data.meta.tags.join(", ")}</span>
          )}
        </div>
        <div className="mt-4">
          <PrintButton />
        </div>
      </header>

      <article className="prose prose-neutral max-w-none" dangerouslySetInnerHTML={{ __html: data.html }} />

      <footer className="mt-12 text-sm text-neutral-500">
        <p>© {new Date().getFullYear()} CinemaTech</p>
      </footer>
    </main>
  );
}
