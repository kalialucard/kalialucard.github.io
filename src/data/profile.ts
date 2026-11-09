/**
 * Single source of truth for all personal data.
 * Any field set to `undefined` is never rendered.
 * "TODO" strings are treated as undefined — never rendered.
 */

export const profile = {
  /** Public nickname — matches the domain name. */
  nickname: "Samindra Samiya",
  /** Short handle used in nav, code blocks, and social links. */
  handle: "kalialucard",

  email_display: "kalialucard@proton.me",

  /** One-line tagline shown in hero and OG description. */
  tagline: "Security researcher: web, API, network and smart contract security.",

  /** Operating environments. */
  environments: "Windows and Linux",

  /** One-line govt VDP — no names, no targets, no details. */
  govVdp: "Government VDP participation (details confidential).",

  /** All public profiles — rendered where `url` is defined. */
  profiles: [
    { name: "HackenProof", url: "https://hackenproof.com/hackers/kalialucard" },
    { name: "HackerOne",   url: "https://hackerone.com/kalialucard" },
    { name: "Hack The Box",url: "https://app.hackthebox.com/profile/2503089" },
    { name: "TryHackMe",   url: "https://tryhackme.com/p/kalialucard" },
    { name: "GitHub",      url: "https://github.com/kalialucard" },
    { name: "Cantina",     url: undefined }, // TODO: add URL when available
    { name: "Remedy",      url: undefined }, // TODO: add URL when available
  ],

  links: {
    github: "https://github.com/kalialucard",
    email:  "kalialucard@proton.me",
    pgp:    undefined, // TODO: add PGP public key URL if desired
  },
} as const;

export type Profile = typeof profile;
