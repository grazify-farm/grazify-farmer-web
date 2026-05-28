/**
 * Homepage + navigation copy.
 * Section components import these arrays — keep them clean of JSX.
 */
import { SITE } from "./constants";

export type NavLink = { label: string; href: string };

export type Feature = {
  icon:        string;
  title:       string;
  description: string;
};

export type WhyPoint = string;

export type PrivacyCard = {
  icon:        string;
  title:       string;
  description: string;
};

/* ── Navigation ─────────────────────────────────── */
export const NAV_LINKS: NavLink[] = [
  { label: "Features",     href: "#features"  },
  { label: "AI Crop Scan", href: "#crop-scan" },
  { label: "Community",    href: "#showcase"  },
  { label: "Privacy",      href: "#privacy"   },
  { label: "Contact",      href: "#contact"   },
];

export const FOOTER_LINKS: NavLink[] = [
  { label: "Features",           href: "#features"                       },
  { label: "AI Crop Scan",       href: "#crop-scan"                      },
  { label: "Community",          href: "#showcase"                       },
  { label: "Privacy Policy",     href: "/privacy-policy"                 },
  { label: "Terms & Conditions", href: "/terms-and-conditions"           },
  { label: "Contact",            href: `mailto:${SITE.supportEmail}`     },
];

/* ── Features grid ──────────────────────────────── */
export const FEATURES: Feature[] = [
  {
    icon: "👥",
    title: "Farmer Community",
    description:
      "Connect with farmers from different regions and build meaningful agricultural connections.",
  },
  {
    icon: "📸",
    title: "Share Posts and Ideas",
    description:
      "Share crop photos, farming tips, updates, questions and ideas with other farmers.",
  },
  {
    icon: "💬",
    title: "Comments and Discussions",
    description:
      "Discuss soil, crops, weather, prices, pests and real farming challenges.",
  },
  {
    icon: "📚",
    title: "Knowledge Sharing",
    description:
      "Learn practical farming techniques and solutions shared by real farmers.",
  },
  {
    icon: "🔬",
    title: "AI Crop Scan and Disease Detection",
    description:
      "Scan crops using multiple photos and get AI-powered crop health insights, possible disease or stress detection, severity level, confidence score and recommended next steps.",
  },
  {
    icon: "📋",
    title: "Crop Scan History",
    description:
      "View previous crop scans, check reports and rescan crops to track plant health over time.",
  },
  {
    icon: "📰",
    title: "Farmer and Farm-Related News",
    description:
      "Stay updated with farmer-focused updates, agriculture news, trends and community information.",
  },
  {
    icon: "🔔",
    title: "Push Notifications",
    description:
      "Receive app updates, crop scan report alerts, activity notifications and community updates.",
  },
  {
    icon: "🌐",
    title: "13+ Indian Language Support",
    description:
      "Use GraziLink in multiple Indian languages, making it easier for farmers across different regions.",
  },
  {
    icon: "✨",
    title: "Simple and Easy to Use",
    description:
      "A clean interface designed for farmers and rural communities.",
  },
];

/** Title of the feature that should render as the highlighted/featured card */
export const FEATURED_FEATURE_TITLE = "AI Crop Scan and Disease Detection";

/* ── Why GraziLink ──────────────────────────────── */
export const WHY_POINTS: WhyPoint[] = [
  "Connect with farmers and agricultural communities",
  "Share farming knowledge and real experiences",
  "Learn new farming methods and techniques",
  "Discuss agricultural challenges and solutions",
  "Scan crops for possible disease, stress or health issues",
  "View crop health reports and scan history",
  "Receive helpful notifications and crop scan updates",
  "Use the app in 13+ Indian languages",
  "Stay informed with community discussions and farm-related news",
];

/* ── Languages chips ────────────────────────────── */
export const LANGUAGES: string[] = [
  "English",   "Hindi",    "Marathi",  "Gujarati", "Tamil",
  "Telugu",    "Kannada",  "Malayalam","Bengali",  "Punjabi",
  "Odia",      "Assamese", "Urdu",
];

/* ── Privacy cards ──────────────────────────────── */
export const PRIVACY_CARDS: PrivacyCard[] = [
  { icon: "🔒",  title: "Account Privacy",            description: "Your account details are kept private and secure." },
  { icon: "🛡️", title: "Secure User Information",    description: "We use appropriate security measures to protect your data." },
  { icon: "🗑️", title: "Data Deletion Request",      description: "Request deletion of your account and associated data at any time." },
  { icon: "🤝",  title: "Responsible Community Platform", description: "We maintain a safe and respectful community environment." },
];
