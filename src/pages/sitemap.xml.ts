export async function GET({ site }: { site?: URL }) {
  const base = site || new URL("https://barbermen.com.br");
  const pages = [
    { url: "/", priority: 1.0, changefreq: "weekly" },
    { url: "/sobre", priority: 0.8, changefreq: "monthly" },
    { url: "/servicos", priority: 0.8, changefreq: "weekly" },
    { url: "/contato", priority: 0.6, changefreq: "monthly" },
    { url: "/agendar", priority: 0.9, changefreq: "weekly" },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `<url>
    <loc>${base}${page.url}</loc>
    <priority>${page.priority}</priority>
    <changefreq>${page.changefreq}</changefreq>
  </url>`).join("\n  ")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
