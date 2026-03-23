import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = () => {
  const pageTitle = "Junin Auto Som | Cidade Jardim - Som, PPF e Window Blue";
  const pageDesc = "Transforme seu carro em Goiânia. Especialistas em Som Automotivo, Window Blue Original, PPF e Estética. Instalação com garantia e padrão VIP.";
  const siteUrl = "https://junincidadejardim.com.br";
  const siteImage = "https://junincidadejardim.com.br/social-share.jpg";

  const schema = {
    "@context": "https://schema.org",
    "@type": "AutoPartsStore",
    "name": "Junin Auto Som - Cidade Jardim",
    "image": [siteImage],
    "description": pageDesc,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Armando de Godói, 370",
      "addressLocality": "Goiânia",
      "addressRegion": "GO",
      "postalCode": "74423-010",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -16.6800,
      "longitude": -49.2900
    },
    "url": siteUrl,
    "telephone": "+556236363610",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "12:00"
      }
    ]
  };

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDesc} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={siteUrl} />
      
      {/* Open Graph / Facebook / WhatsApp */}
      <meta property="og:type" content="business.business" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDesc} />
      <meta property="og:image" content={siteImage} />
      <meta property="og:site_name" content="Junin Auto Som" />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={pageDesc} />
      <meta property="twitter:image" content={siteImage} />

      {/* Dados Estruturados */}
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default SEO;