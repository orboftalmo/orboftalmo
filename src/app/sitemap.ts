import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site-config";
import { products } from "@/content/products";
import { newsPosts } from "@/content/news";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/institucional",
    "/produtos",
    "/assistencia",
    "/noticias",
    "/eventos",
    "/contato",
    "/orcamento",
    "/politica-de-privacidade",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
  }));

  const productRoutes = products.map((product) => ({
    url: `${siteConfig.url}/produtos/${product.slug}`,
    lastModified: new Date(),
  }));

  const newsRoutes = newsPosts.map((post) => ({
    url: `${siteConfig.url}/noticias/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...staticRoutes, ...productRoutes, ...newsRoutes];
}
