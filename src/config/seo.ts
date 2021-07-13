export const baseUrl = 'https://jonleoaprd.com';
export const baseEmail = 'contact@jonleopard.com';

export const defaultSEO = {
  title: 'Jon Leopard | Web Developer',
  canonical: 'https://jonleopard.com',
  description:
    'Web Developer for React.js, Vue.js, Javascript and Go. Based in Paris, France. Consulting/Freelancing for Web Development projects. Code Audits/Reviews & Implementation',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    site_name: 'Jon Leopard',
    images: [
      {
        url: `${baseUrl}/meta/og-image.png`,
        alt: 'Jon Leopard',
      },
    ],
  },
  twitter: {
    handle: '@jonlprd',
    site: '@jonlprd',
    cardType: 'summary_large_image',
  },
};

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export function extendSEO(options: SEOProps) {
  const images = options.image
    ? [{ url: `${baseUrl}/static/${options.image}` }]
    : defaultSEO.openGraph.images;

  return {
    ...defaultSEO,
    ...options,
    url: `${baseUrl}/${options.url}`,
    openGraph: {
      ...defaultSEO.openGraph,
      images,
      url: `${baseUrl}/${options.url}`,
    },
  };
}
