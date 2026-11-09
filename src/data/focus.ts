/**
 * src/data/focus.ts
 * "What I test" / focus area cards shown on Home and About.
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
    desc: 'Full-scope web penetration testing: authentication and session flaws, injection (SQLi, XSS, SSTI, SSRF, XXE, command injection), IDOR, broken access control, CSRF, business logic, insecure deserialization, and file upload abuse. Covers both black-box and grey-box engagements across any modern web stack.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
  },
  {
    id: 'api',
    title: 'APIs & Web Services',
    desc: 'REST, GraphQL, and WebSocket security: broken object-level and function-level auth (BOLA/BFLA), mass assignment, excessive data exposure, rate-limiting and resource exhaustion, injection via API parameters, JWT and OAuth flaws, and insecure direct object references across API surfaces.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v2"/><path d="m21 16-4 4-4-4"/><path d="M17 20v-8"/></svg>`,
  },
  {
    id: 'network',
    title: 'Network & Infrastructure',
    desc: 'Internal and external network penetration testing: service enumeration, misconfigured protocols, exposed management interfaces (RDP, SMB, SSH, Telnet, SNMP), Active Directory attacks (Kerberoasting, AS-REP roasting, Pass-the-Hash, relay attacks), privilege escalation, and lateral movement. Post-exploitation and persistence analysis included.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="6" height="6" rx="1"/><rect x="16" y="2" width="6" height="6" rx="1"/><rect x="9" y="16" width="6" height="6" rx="1"/><path d="M5 8v4c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V8"/><path d="M12 14v2"/></svg>`,
  },
  {
    id: 'smartcontract',
    title: 'Smart Contract Auditing',
    desc: 'Web3 security audits across EVM (Solidity), Move (Aptos, Sui), and other smart contract languages and runtimes. Vulnerability classes: access control, reentrancy, arithmetic and precision errors, oracle manipulation, flash loan attacks, upgradeable proxy risks, storage collisions, front-running, and cross-contract call vulnerabilities. DeFi protocol mechanics, tokenomics, and invariant analysis included.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
  },
];

/**
 * Detailed capability list shown on About page.
 * Each entry is a plain string — no markdown.
 */
export interface Capability {
  category: string;
  items: string[];
}

export const capabilities: Capability[] = [
  {
    category: 'Web2 Penetration Testing',
    items: [
      'Web application security testing (OWASP Top 10 and beyond)',
      'API penetration testing — REST, GraphQL, WebSocket',
      'Authentication and session management attacks',
      'Injection vulnerabilities — SQLi, XSS, SSTI, SSRF, XXE, command injection',
      'Broken access control, IDOR, privilege escalation',
      'Business logic and chained vulnerability exploitation',
      'File upload and path traversal abuse',
      'JWT, OAuth, and SAML flaws',
      'Subdomain enumeration and attack surface mapping',
    ],
  },
  {
    category: 'Network & Infrastructure',
    items: [
      'Internal and external network penetration testing',
      'Active Directory attacks — Kerberoasting, AS-REP roasting, Pass-the-Hash, NTLM relay',
      'SMB, RDP, SSH, SNMP, and management interface exploitation',
      'Post-exploitation: privilege escalation, lateral movement, persistence',
      'Service and port enumeration, vulnerability scanning',
      'VPN and firewall bypass techniques',
    ],
  },
  {
    category: 'Web3 & Smart Contract Security',
    items: [
      'Smart contract auditing — EVM (Solidity), Move (Aptos, Sui), and other runtimes',
      'DeFi protocol security review — lending, AMM, staking, governance',
      'Reentrancy, flash loan, and oracle manipulation attacks',
      'Access control, upgradeable proxy, and storage collision analysis',
      'Tokenomics and economic invariant review',
      'Front-running, MEV, and sandwich attack vectors',
      'Cross-chain bridge and relayer security',
      'On-chain transaction and event analysis',
    ],
  },
  {
    category: 'Operating Systems & IT',
    items: [
      'Windows and Linux — primary working environments',
      'OS hardening and security configuration review',
      'Privilege escalation on Windows (token abuse, service misconfigs, UAC bypass) and Linux (SUID/SGID, sudo misconfigs, cron abuse, kernel exploits)',
      'File system forensics and artefact analysis',
      'Exploring different operating systems as a hobby — macOS, BSD variants, niche distros',
      'Broad IT competency across all domains except IoT and hardware hacking',
    ],
  },
  {
    category: 'Bug Bounty & VDP',
    items: [
      'Participation in public bug bounty programs on HackenProof and HackerOne',
      'Government vulnerability disclosure program participation (details confidential)',
      'Responsible disclosure — reports withheld per program rules',
    ],
  },
];
