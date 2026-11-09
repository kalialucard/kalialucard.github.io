/**
 * src/data/labSections.ts
 * Defines the six lab sections. Routes and UI derive from this.
 * To rename a section: change `title` here — one line, everything updates.
 */

export interface LabSection {
  id: string;        // used in URL: /labs/<id>/
  title: string;     // displayed title
  description: string; // one-line shown on hub card and section header
  platform?: string; // optional external profile URL for the platform
}

export const labSections: LabSection[] = [
  {
    id: 'tryhackme',
    title: 'TryHackMe',
    description: 'Write-ups for TryHackMe rooms covering a range of techniques from enumeration to exploitation.',
    platform: 'https://tryhackme.com/p/kalialucard',
  },
  {
    id: 'hackthebox',
    title: 'Hack The Box',
    description: 'Write-ups for retired Hack The Box machines and challenges.',
    platform: 'https://app.hackthebox.com/profile/2503089',
  },
  {
    id: 'solidity',
    title: 'Solidity',
    description: 'Smart contract security exercises: Solidity vulnerability classes on training platforms.',
    platform: undefined,
  },
  {
    id: 'web3',
    title: 'Web3 & Move',
    description: 'Move-language and other non-Solidity Web3 write-ups from training challenges.',
    platform: undefined,
  },
  {
    id: 'personal',
    title: 'Personal',
    description: 'Self-directed security research on personal projects and practice targets.',
    platform: undefined,
  },
  {
    id: 'hobby',
    title: 'Hobby',
    description: 'Miscellaneous write-ups on hardware, CTFs, and side explorations.',
    platform: undefined,
  },
];

export const labSectionMap = Object.fromEntries(labSections.map(s => [s.id, s])) as Record<string, LabSection>;
export type LabSectionId = typeof labSections[number]['id'];
