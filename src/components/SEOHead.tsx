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
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'RevolutionX - Equipo de Ingeniería F1 in Schools | IES José Saramago',
  description = 'Equipo líder de F1 in Schools del IES José Saramago. Innovación en ingeniería automovilística, diseño CAD/CAM, aerodinámica CFD y tecnología de vanguardia para competiciones internacionales.',
  keywords = 'F1 in Schools, RevolutionX, José Saramago, competición F1, ingeniería automovilística, diseño CAD/CAM, aerodinámica CFD, simulación, impresión 3D, educación STEM, Madrid, España',
  image = '/revolutionx-logo.png',
  url = 'https://legendary-panda-7b91a1.netlify.app/',
  type = 'website',
  author = 'RevolutionX Team',
  publishedTime,
  modifiedTime
}) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'RevolutionX - F1 in Schools',
    description,
    url,
    logo: `${url}${image}`,
    foundingDate: '2024',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Madrid',
      addressCountry: 'ES'
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
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEOHead;