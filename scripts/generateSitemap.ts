import { generateSitemap } from '../src/services/sitemapService';

// Generate sitemap
generateSitemap()
  .then(() => {
    console.log('✅ Sitemap generated successfully');
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  });