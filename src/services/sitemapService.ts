import { writeFile } from 'fs/promises';
import path from 'path';

interface SitemapURL {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
  alternateLinks?: Array<{
    hreflang: string;
    href: string;
  }>;
  images?: Array<{
    loc: string;
    title?: string;
    caption?: string;
  }>;
}

const BASE_URL = 'https://legendary-panda-7b91a1.netlify.app';

const SITE_SECTIONS = [
  { path: '', priority: 1.0, changefreq: 'weekly' },
  { path: '#equipo', priority: 0.8, changefreq: 'monthly' },
  { path: '#tecnico', priority: 0.8, changefreq: 'monthly' },
  { path: '#logros', priority: 0.9, changefreq: 'monthly' },
  { path: '#patrocinadores', priority: 0.7, changefreq: 'monthly' },
  { path: '#marketing', priority: 0.7, changefreq: 'monthly' },
  { path: '#contacto', priority: 0.8, changefreq: 'monthly' }
];

const SUPPORTED_LANGUAGES = ['es', 'en'];

const generateSitemapURLs = (): SitemapURL[] => {
  const currentDate = new Date().toISOString().split('T')[0];
  
  return SITE_SECTIONS.map(section => {
    const url: SitemapURL = {
      loc: `${BASE_URL}/${section.path}`,
      lastmod: currentDate,
      changefreq: section.changefreq as SitemapURL['changefreq'],
      priority: section.priority,
      alternateLinks: SUPPORTED_LANGUAGES.map(lang => ({
        hreflang: lang === 'es' ? 'es-ES' : 'en-US',
        href: `${BASE_URL}/${lang}${section.path}`
      })),
      images: section.path === '' ? [{
        loc: `${BASE_URL}/revolutionx-logo.png`,
        title: 'RevolutionX - Equipo F1 in Schools',
        caption: 'Logo del equipo RevolutionX del IES José Saramago'
      }] : undefined
    };
    return url;
  });
};

const generateSitemapXML = (urls: SitemapURL[]): string => {
  const urlElements = urls.map(url => {
    const alternateElements = url.alternateLinks
      ?.map(alt => `    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${alt.href}" />`)
      .join('\n');

    const imageElements = url.images
      ?.map(img => `
    <image:image>
      <image:loc>${img.loc}</image:loc>
      ${img.title ? `      <image:title>${img.title}</image:title>` : ''}
      ${img.caption ? `      <image:caption>${img.caption}</image:caption>` : ''}
    </image:image>`)
      .join('');

    return `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
${alternateElements ? alternateElements + '\n' : ''}${imageElements || ''}
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${urlElements}
</urlset>`;
};

export const generateSitemap = async (): Promise<void> => {
  try {
    const urls = generateSitemapURLs();
    const sitemapXML = generateSitemapXML(urls);
    const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
    await writeFile(sitemapPath, sitemapXML, 'utf-8');
    console.log('Sitemap generated successfully');
  } catch (error) {
    console.error('Error generating sitemap:', error);
    throw error;
  }
};