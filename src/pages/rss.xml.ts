import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { profile } from '@/data/profile';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = (await getCollection('research', e => e.data.disclosure_ok === true))
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return rss({
    title: `${profile.handle} — Research`,
    description: `Security research write-ups by ${profile.handle}`,
    site: context.site!,
    items: posts.map(post => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description ?? '',
      link: `/research/${post.slug}/`,
    })),
    customData: `<language>en-gb</language>`,
  });
}
