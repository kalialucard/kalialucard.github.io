/**
 * Certifications data — all entries verified against live Credly/Coursera pages.
 * badgeImg: static og:image URL from each Credly badge page (no third-party JS).
 */

export interface Cert {
  name: string;
  issuer: string;
  year?: number;
  /** Verification / badge page URL */
  url?: string;
  /** Static badge image URL from Credly CDN */
  badgeImg?: string;
}

export const certs: Cert[] = [
  // ── Google ────────────────────────────────────────────────────────────────
  {
    name: "Google IT Support Professional Certificate",
    issuer: "Google / Coursera",
    url: "https://coursera.org/share/b10e2589550e1570dbad49eb220b36e7",
  },

  // ── Cisco Networking Academy ───────────────────────────────────────────────
  {
    name: "Ethical Hacker",
    issuer: "Cisco Networking Academy",
    url: "https://www.credly.com/badges/efc9b5bf-d030-4933-8f0f-1879c67547a1",
    badgeImg: "https://images.credly.com/images/242902b5-f527-42ad-865e-977c9e1b5b58/linkedin_thumb_image.png",
  },
  {
    name: "Network Defense",
    issuer: "Cisco Networking Academy",
    url: "https://www.credly.com/badges/f2effa0d-af42-4747-a3e4-b7bd970a6067",
    badgeImg: "https://images.credly.com/images/51526f76-711b-4caf-b04d-27f89512b112/linkedin_thumb_NetworkDefense_v1_091721.png",
  },
  {
    name: "Junior Cybersecurity Analyst Career Path",
    issuer: "Cisco Networking Academy",
    url: "https://www.credly.com/badges/f986b6e7-26af-4988-9233-b905cd225237",
    badgeImg: "https://images.credly.com/images/441578ec-c0f3-46cc-95fc-86b27e90cf4f/linkedin_thumb_image.png",
  },
  {
    name: "Cyber Threat Management",
    issuer: "Cisco Networking Academy",
    url: "https://www.credly.com/badges/992ebeca-0bf1-4724-84b8-31027d769049",
    badgeImg: "https://images.credly.com/images/5d5ac32b-d239-42b8-9665-8a921dc3ab47/linkedin_thumb_image.png",
  },
  {
    name: "Endpoint Security",
    issuer: "Cisco Networking Academy",
    url: "https://www.credly.com/badges/0ecec055-2b5e-428b-9bef-e24071717618",
    badgeImg: "https://images.credly.com/images/0ca5f542-fb5e-4a22-9b7a-c1a1ce4c3db7/linkedin_thumb_EndpointSecurity.png",
  },
  {
    name: "Networking Devices and Initial Configuration",
    issuer: "Cisco Networking Academy",
    url: "https://www.credly.com/badges/7182777f-8d34-42bf-b84e-c5815dc148e1",
    badgeImg: "https://images.credly.com/images/88316fe8-5651-4e61-a6be-5be1558f049e/linkedin_thumb_image.png",
  },
  {
    name: "Computer Hardware Basics",
    issuer: "Cisco Networking Academy",
    url: "https://www.credly.com/badges/dbb3fc3b-8b4e-4e48-babd-c902d3d42fd8",
    badgeImg: "https://images.credly.com/images/19e742ef-13be-4d26-87ed-ac8f5fd0643c/linkedin_thumb_image.png",
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    url: "https://www.credly.com/badges/19801ee8-0fd5-4011-8471-e929f7ca210b",
    badgeImg: "https://images.credly.com/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/linkedin_thumb_I2CS__1_.png",
  },
  {
    name: "Networking Basics",
    issuer: "Cisco Networking Academy",
    url: "https://www.credly.com/badges/63534d16-2964-449b-adca-dbaa22953082",
    badgeImg: "https://images.credly.com/images/5bdd6a39-3e03-4444-9510-ecff80c9ce79/linkedin_thumb_image.png",
  },

  // ── ISC2 ──────────────────────────────────────────────────────────────────
  {
    name: "ISC2 Candidate",
    issuer: "ISC2",
    url: "https://www.credly.com/badges/b1157d42-ae48-4c72-be65-bd00ede97bff",
    badgeImg: "https://images.credly.com/images/9180921d-4a13-429e-9357-6f9706a554f0/linkedin_thumb_image.png",
  },
];
