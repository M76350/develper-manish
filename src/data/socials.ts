export const socials = {
  github: "https://github.com/your-handle",
  linkedin: "https://www.linkedin.com/in/your-handle",
  twitter: "https://twitter.com/your-handle",
  email: "mailto:hello@example.com"
} as const;

export type SocialKey = keyof typeof socials;
