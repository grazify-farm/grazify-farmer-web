/**
 * Site-wide constants.
 * Prefer importing the `SITE` object from this file across the codebase.
 */
export const SITE = {
  appName:       "GraziLink",
  appTagline:    "Farmer Community",
  companyName:   "Grazify",
  attribution:   "by Grazify",
  productLine:   "A Grazify product",
  legalCredit:   "GraziLink is a product of Grazify",
  playStoreUrl:  "https://play.google.com/store/apps/details?id=farm.grazilink.customer",
  supportEmail:  "grazlink.farm@gmail.com",
} as const;

export type Site = typeof SITE;
