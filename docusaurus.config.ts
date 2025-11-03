import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import { BundledLanguage, bundledLanguages } from "shiki";
import type { MDXPlugin } from "@docusaurus/mdx-loader";
import rehypeShiki, { RehypeShikiOptions } from "@shikijs/rehype";
import { removeTwoslashNotations } from "twoslash";
import {
  transformerMetaHighlight,
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
  transformerNotationFocus,
} from "@shikijs/transformers";

import { rendererClassic, transformerTwoslash } from "@shikijs/twoslash";
import {
  NormalizedSidebar,
  SidebarItemsGeneratorVersion,
} from "@docusaurus/plugin-content-docs/src/sidebars/types.js";

function isErrorFromVersionedDocs(options: { meta?: { __raw?: string } }) {
  if (options.meta?.__raw?.includes("loc=")) {
    const locMatch = options.meta.__raw.match(/loc=([^\s]+)/);
    if (locMatch[1]?.includes("versioned_docs")) {
      return true;
    }
  }
  return false;
}

const rehypeShikiPlugin = [
  rehypeShiki,
  {
    themes: {
      light: "catppuccin-latte",
    },
    langs: Object.keys(bundledLanguages) as BundledLanguage[],
    transformers: [
      transformerTwoslash({
        renderer: rendererClassic(),
        onTwoslashError(error, code, lang, options) {
          if (isErrorFromVersionedDocs(options)) {
            return; // Ignore versioned docs
          }
          throw error;
        },
      }),
      transformerMetaHighlight(),
      transformerNotationWordHighlight(),
      transformerNotationDiff(),
      transformerNotationHighlight(),
      transformerNotationFocus(),
    ],
  } satisfies RehypeShikiOptions,
] satisfies MDXPlugin;

function injectTypeDocSidebar(
  version: SidebarItemsGeneratorVersion,
  items: NormalizedSidebar,
): NormalizedSidebar {
  return items.map((item) => {
    if (item.customProps?.id === "generated-api" && item.type === "category") {
      return {
        ...item,
        items: [
          ...([
            {
              type: "category",
              label: "React Native SDK",
              link: { type: "doc", id: "api/mobile/index" },
              items: require(
                `${version.contentPath}/api/mobile/typedoc-sidebar.cjs`,
              ),
            },
            {
              type: "category",
              label: "React SDK",
              link: { type: "doc", id: "api/web/index" },
              items: require(
                `${version.contentPath}/api/web/typedoc-sidebar.cjs`,
              ),
            },
            {
              type: "category",
              label: "Server SDK for JS",
              link: { type: "doc", id: "api/server/index" },
              items: require(
                `${version.contentPath}/api/server/typedoc-sidebar.cjs`,
              ),
            },
          ] as const),
          ...item.items.filter((element) => element.type == "doc"),
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
  excludeExternals: "true",
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
  onBrokenMarkdownLinks: "throw",
  onBrokenAnchors: "throw",
  onDuplicateRoutes: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],

  future: { v4: true, experimental_faster: true },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars/docs.ts",
          path: "docs",
          routeBasePath: "/",
          editUrl: ({ versionDocsDirPath, docPath }) =>
            `https://github.com/fishjam-cloud/documentation/tree/main/${versionDocsDirPath}/${docPath}`,
          beforeDefaultRehypePlugins: [],
          rehypePlugins: [rehypeShikiPlugin],
          remarkPlugins: [
            [require("@docusaurus/remark-plugin-npm2yarn"), { sync: true }],
            require("./src/remark/inject-file-path.mjs"),
          ],
          async sidebarItemsGenerator({
            defaultSidebarItemsGenerator,
            ...args
          }) {
            return injectTypeDocSidebar(
              args.version,
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
        {
          type: "docsVersionDropdown",
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
              to: "/tutorials/react-native-quick-start",
            },
            {
              label: "React",
              to: "/tutorials/react-quick-start",
            },
            {
              label: "Backend",
              to: "/tutorials/backend-quick-start",
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
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      require.resolve("docusaurus-lunr-search"),
      // exclude old versions and next from search
      { includeRoutes: ["/api/*"] },
    ],
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
