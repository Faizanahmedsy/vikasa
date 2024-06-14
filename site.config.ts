export const SITE_CONFIG = Object.freeze({
  brandName: "Vikasa",
  title: "My Site",
  description: "My site description",
  contact: {
    email: "info@tomatotech.com",
  },
  color: {
    primary: "",
    secondary: "",
    tertiary: "",
    accent: "",
  },
});

export const HERO = Object.freeze({
  title: `Build like a team of hundreds with ${SITE_CONFIG.brandName}`,
} as const);
