import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

function injectTypeDocSidebar(items) {
  return items.map((item) => {
    if (item.customProps?.id === "generated-api") {
      return {
        ...item,
        items: [
          {
            type: "category",
            label: "React Native SDK",
            link: { type: "doc", id: "api/mobile/index" },
            items: require("./docs/api/mobile/typedoc-sidebar.cjs"),
          },
          {
            type: "category",
            label: "React SDK",
            link: { type: "doc", id: "api/web/index" },
            items: require("./docs/api/web/typedoc-sidebar.cjs"),
          },
          {
            type: "category",
            label: "Server SDK for JS",
            link: { type: "doc", id: "api/server/index" },
            items: require("./docs/api/server/typedoc-sidebar.cjs"),
          },
        ],
      };
    }
    return item;
  });
}

const typedocConfig = {
  readme: "none",
  parametersFormat: "table",
  propertyMembersFormat: "table",
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
};

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
          editUrl: "https://github.com/fishjam-cloud/documentation/tree/main/",
          remarkPlugins: [
            [require("@docusaurus/remark-plugin-npm2yarn"), { sync: true }],
          ],
          async sidebarItemsGenerator({
            defaultSidebarItemsGenerator,
            ...args
          }) {
            return injectTypeDocSidebar(
              await defaultSidebarItemsGenerator(args),
            );
          },
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        googleTagManager: {
          containerId: "GTM-MZWSHSWM",
        },
        sitemap: {
          lastmod: "date",
          changefreq: "weekly",
          filename: "sitemap.xml",
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
        ...typedocConfig,
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
        ...typedocConfig,
      },
    ],
    [
      "docusaurus-plugin-typedoc",
      {
        id: "server-api",
        out: "docs/api/server",
        entryPoints: [
          "./packages/js-server-sdk/packages/js-server-sdk/src/index.ts",
        ],
        tsconfig:
          "./packages/js-server-sdk/packages/js-server-sdk/tsconfig.json",
        ...typedocConfig,
      },
    ],
  ],
};

export default config;
