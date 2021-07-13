import { extendSEO, defaultSEO } from './seo';

const routes = {
  home: {
    label: 'Home',
    path: '/',
    seo: defaultSEO,
  },
  about: {
    label: 'About',
    path: '/about',
    seo: extendSEO({
      title: 'About',
      url: 'about',
    }),
  },
  projects: {
    label: 'Projects',
    path: '/projects',
    seo: extendSEO({
      title: 'Projects',
      description: 'What I’m working on',
      url: 'projects',
    }),
  },
  blog: {
    label: 'Blog',
    path: '/blog',
    seo: extendSEO({
      title: 'Blog',
      description: 'Ramblings of a web developer',
      image: 'meta/og-image.png',
      url: 'blog',
    }),
  },
};

export default routes;
