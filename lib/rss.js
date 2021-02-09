import { Feed } from 'feed';
import fs from 'fs';
import { markdown } from 'markdown';
import { rssFeedEntries } from './api';

async function generateRssFeed() {
  if (process.env.NODE_ENV === 'development') {
    return;
  }

  const baseUrl = 'https://jonleopard.com';
  const date = new Date();
  const author = {
    name: 'Jon Leopard',
    email: 'contact@jonleopard.com',
    link: 'https://twitter.com/jonlprd',
  };
  const feed = new Feed({
    title: `Jon Leopard's Blog`,
    description: 'Welcome to my blog!',
    id: baseUrl,
    link: baseUrl,
    language: 'en',
    image: `${baseUrl}/avatar.png`,
    favicon: `${baseUrl}/favicon.ico`,
    copyright: `All rights reserved ${date.getFullYear()}, Jon Leopard`,
    updated: date,
    generator: 'Next.js using Feed for Node.js',
    feedLinks: {
      rss2: `${baseUrl}/rss/feed.xml`,
      json: `${baseUrl}/rss/feed.json`,
      atom: `${baseUrl}/rss/atom.xml`,
    },
    author,
  });

  const posts = await rssFeedEntries();

  posts.forEach((post) => {
    const url = `${baseUrl}/blog/${post.slug}`;
    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      description: post.description,
      content: markdown.toHTML(post.content),
      date: new Date(post.date),
    });
  });

  fs.mkdirSync('./public/rss', { recursive: true });
  fs.writeFileSync('./public/rss/feed.xml', feed.rss2());
  fs.writeFileSync('./public/rss/atom.xml', feed.atom1());
  fs.writeFileSync('./public/rss/feed.json', feed.json1());
}

export default generateRssFeed;
