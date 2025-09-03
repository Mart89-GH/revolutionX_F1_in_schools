import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  currentLanguage?: string;
  alternateLanguages?: Array<{
    lang: string;
    url: string;
  }>;
  breadcrumb?: Array<{
    name: string;
    item: string;
  }>;
  contentType?: 'article' | 'website' | 'profile';
  twitterSite?: string;
  twitterCreator?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'RevolutionX - F1 in Schools Madrid | Campeones de Ingeniería y Diseño',
  description = 'Equipo líder RevolutionX del IES José Saramago Madrid, especializado en F1 in Schools. Innovación en ingeniería, diseño 3D y aerodinámica para competiciones internacionales de F1.',
  keywords = 'F1 in Schools Madrid, RevolutionX F1, competición F1 escolar, ingeniería F1, diseño automovilístico, aerodinámica F1, STEM Madrid, F1 José Saramago, F1 educación España, RevolutionX Madrid',
  image = '/revolutionx-logo.png',
  url = 'https://legendary-panda-7b91a1.netlify.app/',
  type = 'website',
  author = 'RevolutionX Team',
  publishedTime,
  modifiedTime,
  currentLanguage = 'es-ES',
  alternateLanguages = [
    { lang: 'es-ES', url: 'https://legendary-panda-7b91a1.netlify.app/es' },
    { lang: 'en-US', url: 'https://legendary-panda-7b91a1.netlify.app/en' }
  ],
  breadcrumb = [],
  contentType = 'website',
  twitterSite = '@revolutionx_f1',
  twitterCreator = '@revolutionx_f1'
}) => {
  const organizationStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'RevolutionX - F1 in Schools Madrid',
    description,
    url,
    logo: `${url}${image}`,
    foundingDate: '2024',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Majadahonda',
      addressRegion: 'Madrid',
      addressCountry: 'ES'
    },
    areaServed: {
      '@type': 'State',
      name: 'Comunidad de Madrid'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'revolutionx.f1@gmail.com',
      contactType: 'customer service'
    },
    sameAs: [
      'https://instagram.com/revolutionx_f1'
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Spanish" />
      <meta name="revisit-after" content="7 days" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${url}${image}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="RevolutionX" />
      <meta property="og:locale" content="es_ES" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${url}${image}`} />

      {/* Article specific meta tags */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}

      {/* Additional SEO meta tags */}
      <meta name="theme-color" content="#D4AF37" />
      <meta name="msapplication-TileColor" content="#D4AF37" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Structured Data */}
      {/* Alternate Language Links */}
      {alternateLanguages.map((lang) => (
        <link
          key={lang.lang}
          rel="alternate"
          hrefLang={lang.lang}
          href={lang.url}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={url} />

      {/* Enhanced Social Media Meta Tags */}
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta property="og:type" content={contentType} />
      <meta property="article:section" content="F1 in Schools" />
      <meta property="og:updated_time" content={modifiedTime || new Date().toISOString()} />

      {/* Structured Data - Organization */}
      <script type="application/ld+json">
        {JSON.stringify(organizationStructuredData)}
      </script>

      {/* Structured Data - Breadcrumb */}
      {breadcrumb.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            'itemListElement': breadcrumb.map((item, index) => ({
              '@type': 'ListItem',
              'position': index + 1,
              'name': item.name,
              'item': item.item
            }))
          })}
        </script>
      )}
    </Helmet>
  );
};


export default SEOHead;