/**
 * Centralized asset paths.
 *
 * Screen variants:
 *   portrait — straight-on phone, best for feature clarity
 *   left     — 3-D perspective tilt, best for hero / depth sections
 *
 * Rule: website provides ALL heading/description text. Images are
 * purely visual app previews — no marketing text overlaid.
 */

type ScreenPair = { portrait: string; left: string };

const screen = (slug: string): ScreenPair => ({
  portrait: `/images/screens/screen-${slug}.png`,
  left:     `/images/screens/screen-${slug}-left.png`,
});

export const ASSETS = {
  logo: {
    icon:          "/images/logo/grazilink-icon.svg",
    wordmark:      "/images/logo/grazilink-wordmark.svg",
    playStoreIcon: "/images/logo/play-store-icon.svg",
  },
  screens: {
    activity:       screen("activity"),
    aiCropScan:     screen("ai-crop-scan"),
    communityFeed:  screen("community-feed"),
    createPost:     screen("create-post"),
    directMessages: screen("direct-messages"),
    language:       screen("language"),
    liveChat:       screen("live-chat"),
    news:           screen("news"),
    profile:        screen("profile"),
    search:         screen("search"),
  },
} as const;

export type Assets = typeof ASSETS;
export type ScreenName = keyof typeof ASSETS.screens;
