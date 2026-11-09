/**
 * Certifications data.
 * Each entry requires a name and issuer.
 * url: Credly or Coursera verify link — hidden if undefined.
 * badgeUrl: direct image URL if you self-host the badge image — hidden if undefined.
 *
 * PENDING USER CONFIRMATION (Cisco/ISC2 Credly badge IDs from git history):
 * Cisco badges: efc9b5bf, f2effa0d, f986b6e7, 992ebeca, 0ecec055, 7182777f, dbb3fc3b, 19801ee8, 63534d16
 * ISC2 badge:   b1157d42-ae48-4c72-be65-bd00ede97bff
 * Add confirmed entries below using pattern:
 *   url: "https://www.credly.com/badges/<badge-id>"
 */

export interface Cert {
  name: string;
  issuer: string;
  year?: number;
  /** Verification / badge page URL */
  url?: string;
  /** Direct PNG/SVG image URL for the badge (self-hosted or Credly direct) */
  badgeUrl?: string;
}

export const certs: Cert[] = [
  {
    name: "Google IT Support Professional Certificate",
    issuer: "Google / Coursera",
    year: undefined, // TODO: add year
    url: "https://coursera.org/share/b10e2589550e1570dbad49eb220b36e7",
    badgeUrl: undefined, // optional: add self-hosted badge image path
  },
  // ── Cisco Networking Academy — ADD AFTER USER CONFIRMS BADGE IDs ──
  // {
  //   name: "Cisco — <course name>",
  //   issuer: "Cisco Networking Academy",
  //   url: "https://www.credly.com/badges/efc9b5bf-d030-4933-8f0f-1879c67547a1",
  // },
  // ── ISC2 — ADD AFTER USER CONFIRMS ──
  // {
  //   name: "ISC2 — <cert name>",
  //   issuer: "ISC2",
  //   url: "https://www.credly.com/badges/b1157d42-ae48-4c72-be65-bd00ede97bff",
  // },
];
