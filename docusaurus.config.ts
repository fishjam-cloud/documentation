import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Fishjam Docs",
  tagline: "Easiest way to add video streaming to your React Native app",
  favicon: "img/favicon.svg",
  // Set the production url of your site here
  url: "https://docs.fishjam.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  trailingSlash: false,

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
          sidebarPath: "./sidebars/docs.ts",
          path: "docs",
          routeBasePath: "/",
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

  themeConfig: {
    image: "img/social-card.png",
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
    },
    navbar: {
      title: "Fishjam ",
      logo: {
        alt: "Fishjam",
        src: "img/logo.svg",
      },
      items: [
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
              to: "/category/react-native-integration",
            },
            {
              label: "React",
              to: "/category/react-integration",
            },
            {
              label: "Backend",
              to: "/production/server",
            },
          ],
        },

        {
          title: "More",
          items: [
            {
              label: "Fishjam",
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

  plugins: [
    [
      "docusaurus-plugin-typedoc",
      {
        id: "web-api",
        out: "docs/api/web",
        entryPoints: [
          "./packages/web-client-sdk/packages/react-client/src/index.ts",
        ],
        tsconfig:
          "./packages/web-client-sdk/packages/react-client/tsconfig.json",
        readme: "none",
        parametersFormat: "list",
        propertyMembersFormat: "list",
        typeDeclarationFormat: "list",
        tableColumnSettings: {
          hideSources: true,
        },
        categoryOrder: [
          "Connection",
          "Devices",
          "Screenshare",
          "Component",
          "*",
          "Debugging",
        ],
        sort: ["kind", "alphabetical"],
        kindSortOrder: ["Method", "Function"],
      },
    ],
    [
      "docusaurus-plugin-typedoc",
      {
        id: "mobile-api",
        out: "docs/api/mobile",
        entryPoints: [
          "./packages/mobile-client-sdk/packages/react-native-client/src/index.tsx",
        ],
        tsconfig:
          "./packages/mobile-client-sdk/packages/react-native-client/tsconfig.json",
        readme: "none",
        parametersFormat: "list",
        propertyMembersFormat: "list",
        typeDeclarationFormat: "list",
        tableColumnSettings: {
          hideSources: true,
        },
      },
    ],
  ],
};

export default config;
