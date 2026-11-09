import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { profile } from '@/data/profile';
import type { APIContext } from 'astro';

const BOILERPLATE_RE = /^(Detailed technical walkthrough and security analysis|Technical documentation and research)/i;

export async function GET(context: APIContext) {
  const posts = (await getCollection('labs'))
    .filter(p => p.data.date)
    .sort((a, b) => b.data.date!.getTime() - a.data.date!.getTime());

  return rss({
    title: `${profile.nickname} (${profile.handle}) — Labs`,
    description: `Security lab write-ups by ${profile.handle}`,
    site: context.site!,
    items: posts.map(post => {
      const section = post.data.section ?? 'tryhackme';
      const desc = post.data.description && !BOILERPLATE_RE.test(post.data.description)
        ? post.data.description
        : `${section.charAt(0).toUpperCase() + section.slice(1)} write-up: ${post.data.title}`;
      return {
        title: post.data.title,
        pubDate: post.data.date!,
        description: desc,
        link: `/labs/${section}/${post.slug}/`,
      };
    }),
    customData: `<language>en-gb</language>`,
  });
}
