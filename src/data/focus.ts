/**
 * src/data/focus.ts
 * "What I test" / focus area cards.
 * Edit copy here — pages import this directly.
 */

export interface FocusArea {
  id: string;
  title: string;
  desc: string;
  icon: string; // inline SVG string
}

export const focusAreas: FocusArea[] = [
  {
    id: 'web',
    title: 'Web Applications',
    desc: 'Auth flaws, injection, logic bugs, session management, IDOR, XSS, CSRF, and business-logic vulnerabilities across modern web stacks.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
  },
  {
    id: 'api',
    title: 'APIs',
    desc: 'REST and GraphQL endpoints: broken object-level auth, excessive data exposure, rate-limiting failures, and injection via API parameters.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v2"/><path d="m21 16-4 4-4-4"/><path d="M17 20v-8"/></svg>`,
  },
  {
    id: 'network',
    title: 'Network & Infrastructure',
    desc: 'Misconfigured services, exposed management interfaces, privilege escalation paths, and lateral movement in enterprise environments.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="6" height="6" rx="1"/><rect x="16" y="2" width="6" height="6" rx="1"/><rect x="9" y="16" width="6" height="6" rx="1"/><path d="M5 8v4c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V8"/><path d="M12 14v2"/></svg>`,
  },
  {
    id: 'smartcontract',
    title: 'Smart Contracts',
    desc: 'Access control, accounting and invariant checks, reentrancy paths, oracle manipulation, and upgrade proxy risks in EVM and Move contracts.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
  },
];
