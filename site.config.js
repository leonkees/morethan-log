const CONFIG = {
  // profile setting (required)
  profile: {
    name: "ozom_builders",
    image: "/avatar.jfif", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Startup Sherpas",
    bio: "Empowering & Inspiring",
    email: "ozombuilders@gmail.com",
    linkedin: "/company/ozombuilders/",
    github: "",
    instagram: "",
  },
  projects: [
    {
      name: `ozom builders`,
      href: "https://ozombuilders.com/",
    },
  ],
  // blog setting (required)
  blog: {
    title: "indie saas",
    description: "Welcome to Indie Saas!",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://https://indie-saas-crrs.vercel.app/",
  since: 2022, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.G-Z8K2QC01B9      || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: "morethanmin/morethan-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
