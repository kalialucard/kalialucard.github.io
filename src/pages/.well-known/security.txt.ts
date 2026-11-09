import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  // Expires = build date + 11 months
  const expires = new Date();
  expires.setMonth(expires.getMonth() + 11);
  const expiresStr = expires.toISOString().replace(/\.\d{3}Z$/, 'Z');

  const body = [
    'Contact: mailto:kalialucard@proton.me',
    'Preferred-Languages: en',
    `Policy: https://samindrasamiya.site/policy/`,
    `Canonical: https://samindrasamiya.site/.well-known/security.txt`,
    `Expires: ${expiresStr}`,
    '',
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
