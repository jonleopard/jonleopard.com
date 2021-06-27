import globby from 'globby';
import fs from 'fs';
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import { getEntries } from './api';

const blocklist = ['/newsletter-success', '/404'];

async function generateSitemap() {
  if (process.env.NODE_ENV === 'development') {
    return;
  }

  const baseUrl = process.env.BASE_URL;

  const pages = await globby([
    'src/pages/**/*{.tsx,jsx}',
    '!src/pages/**/[*',
    '!src/pages/_*.tsx',
    '!src/pages/api',
  ]);

  // normal page routes
  const pageLinks = pages
    .map((page) => {
      const path = page
        .replace('pages', '')
        .replace('.tsx', '')
        .replace('src/', '');
      return path === '/index'
        ? { url: '/', changefreq: 'daily', priority: 0.7 }
        : { url: path, changefreq: 'daily', priority: 0.7 };
    })
    .filter((page) => !blocklist.includes(page.url));

  // post routes
  const posts = await getEntries();
  const postLinks = posts.map((post) => ({
    url: `/blog/${post.slug}`,
    chagefreq: 'daily',
    priority: 0.7,
  }));

  const links = [...pageLinks, ...postLinks];
  const stream = new SitemapStream({ hostname: baseUrl });

  const xml = await streamToPromise(Readable.from(links).pipe(stream)).then(
    (data) => data.toString()
  );

  fs.writeFileSync('./public/sitemap.xml', xml);
}

export default generateSitemap;
