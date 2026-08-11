import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import type { NewsPost } from "@/content/news";

export function NewsCard({ post }: { post: NewsPost }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white">
      <Link href={`/noticias/${post.slug}`} className="relative aspect-[16/10] overflow-hidden bg-mist">
        <Image
          src={post.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.12em] text-accent">
          <span>{post.category}</span>
          <span className="text-ink-soft/60" aria-hidden="true">
            •
          </span>
          <time dateTime={post.date} className="text-ink-soft normal-case tracking-normal">
            {formatDate(post.date)}
          </time>
        </div>
        <h3 className="text-lg font-semibold text-navy">
          <Link href={`/noticias/${post.slug}`} className="link-underline">
            {post.title}
          </Link>
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-ink-soft">{post.excerpt}</p>
        <Link
          href={`/noticias/${post.slug}`}
          className="text-sm font-semibold text-navy link-underline w-fit"
        >
          Leia mais →
        </Link>
      </div>
    </article>
  );
}
