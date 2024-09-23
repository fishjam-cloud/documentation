import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Fishjam Cloud Docs",
  tagline: "Easiest way to add video streaming to your React Native app",
  favicon: "img/favicon.svg",
  // Set the production url of your site here
  url: "https://fishjam-cloud.github.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/documentation/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "fishjam-cloud",
  projectName: "documentation",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars/guide.ts",
          path: "guide",
          routeBasePath: "guide",
          editUrl: "https://github.com/fishjam-cloud/documentation/",
          remarkPlugins: [
            [require("@docusaurus/remark-plugin-npm2yarn"), { sync: true }],
          ],
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          editUrl: "https://github.com/fishjam-cloud/documentation/",
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [],

  themeConfig: {
    image: "img/social-card.png",
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
    },
    navbar: {
      title: "Fishjam Cloud ",
      logo: {
        alt: "Fishjam Cloud",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "/guide",
          label: "Guide",
          position: "left",
          sidebarId: "guideSidebar",
        },

        {
          href: "https://fishjam.io/app/",
          label: "Fishjam Dashboard",
          position: "right",
        },
        {
          href: "https://github.com/fishjam-cloud",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "Quick Setup",
          items: [
            {
              label: "React Native",
              to: "/guide/category/react-native-integration",
            },
            {
              label: "React",
              to: "/guide/category/react-integration",
            },
            {
              label: "Backend",
              to: "/guide/server",
            },
          ],
        },

        {
          title: "More",
          items: [
            {
              label: "Fishjam Cloud",
              to: "https://fishjam.io",
            },
            {
              label: "GitHub",
              href: "https://github.com/fishjam-cloud",
            },
            {
              label: "Software Mansion",
              href: "https://swmansion.com/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Software Mansion, Inc. All trademarks and copyrights belong to their respective owners.`,
    },
    prism: {
      theme: prismThemes.gruvboxMaterialLight,
      darkTheme: prismThemes.gruvboxMaterialDark,
      additionalLanguages: ["bash"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
