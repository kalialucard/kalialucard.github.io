/**
 * Single source of truth for all personal data.
 * Any field set to `undefined` or TODO is hidden — never rendered.
 */

export const profile = {
  name: "Samindra Samiya",
  handle: "kalialucard",
  location: "Sri Lanka",
  /** One-line positioning shown in hero and OG description. */
  positioning: "Web application and infrastructure security researcher",

  /** Confirmed areas. Confirm or amend this list before merge. */
  focus: [
    "Web applications",
    "APIs",
    "Network & infrastructure",
  ],

  /** One-line govt VDP note — no names, no targets, no details. */
  govVdp: "Government VDP participation (details confidential).",

  platforms: {
    bounty: [
      {
        name: "HackenProof",
        url: "https://hackenproof.com/hackers/kalialucard",
      },
      {
        name: "HackerOne",
        url: "https://hackerone.com/kalialucard",
      },
      {
        name: "Cantina",
        url: undefined, // TODO: add URL
      },
      {
        name: "Remedy",
        url: undefined, // TODO: add URL
      },
    ],
    labs: [
      {
        name: "Hack The Box",
        url: "https://app.hackthebox.com/profile/2503089",
      },
      {
        name: "TryHackMe",
        url: "https://tryhackme.com/p/kalialucard",
      },
    ],
  },

  links: {
    github: "https://github.com/kalialucard",
    email: "kalialucard@proton.me",
    pgp: undefined, // TODO: add PGP public key URL or fingerprint if desired
  },

  /**
   * Only verified, earned certifications.
   * No placeholders, no pending certs.
   */
  certs: [
    {
      name: "Google IT Support Professional Certificate",
      issuer: "Google / Coursera",
      year: undefined, // TODO: add year e.g. 2023
      url: undefined,  // TODO: add Credly/Coursera verification link
    },
  ],
} as const;

export type Profile = typeof profile;
