import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: "doc",
      id: "index",
      label: "Welcome",
    },
    {
      type: "category",
      label: "Tutorials",
      collapsible: false,
      link: {
        type: "generated-index",
        title: "Tutorials",
        description:
          "Learning-oriented lessons that take you through a series of steps to complete a project. Most useful when you want to get started with Fishjam.",
        slug: "/tutorials",
      },
      items: [
        "tutorials/react-native-quick-start",
        "tutorials/react-quick-start",
        "tutorials/backend-quick-start",
      ],
    },
    {
      type: "category",
      label: "How-to Guides",
      collapsible: false,
      link: {
        type: "generated-index",
        title: "How-to Guides",
        description:
          "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
        slug: "/how-to",
      },
      items: [
        {
          type: "category",
          label: "React Native",
          items: [
            "how-to/react-native/installation",
            "how-to/react-native/connecting",
            "how-to/react-native/start-streaming",
            "how-to/react-native/list-other-peers",
            "how-to/react-native/screensharing",
            "how-to/react-native/background-streaming",
            "how-to/react-native/reconnection-handling",
            "how-to/react-native/metadata-and-broadcasting",
            "how-to/react-native/custom-video-sources/index",
            "how-to/react-native/livestreaming",
          ],
        },
        {
          type: "category",
          label: "React/Web",
          items: [
            "how-to/react/installation",
            "how-to/react/connecting",
            "how-to/react/start-streaming",
            "how-to/react/list-other-peers",
            "how-to/react/managing-devices",
            "how-to/react/stream-middleware",
            "how-to/react/metadata",
            "how-to/react/custom-sources",
            "how-to/react/livestreaming",
          ],
        },
        {
          type: "category",
          label: "Features",
          items: [
            "how-to/features/audio-only-calls",
            "how-to/features/livestreaming",
            "how-to/features/room-manager-testing",
          ],
        },
        {
          type: "category",
          label: "Backend",
          items: [
            "how-to/backend/server-setup",
            "how-to/backend/fastify-example",
            "how-to/backend/fastapi-example",
            "how-to/backend/production-deployment",
          ],
        },
        {
          type: "category",
          label: "Troubleshooting",
          items: ["how-to/troubleshooting/video-codecs"],
        },
      ],
    },
    {
      type: "category",
      label: "Reference",
      collapsible: false,
      link: {
        type: "generated-index",
        title: "Reference",
        description:
          "Nitty-gritty technical descriptions of how Fishjam works. Most useful when you need detailed information about Fishjam's APIs.",
        slug: "/reference",
      },
      items: [
        {
          type: "doc",
          id: "api/mobile/index",
          label: "React Native SDK API",
        },
        {
          type: "doc",
          id: "api/web/index",
          label: "React/Web SDK API",
        },
        {
          type: "doc",
          id: "api/server/index",
          label: "Server SDK API",
        },
      ],
    },
    {
      type: "category",
      label: "Explanation",
      collapsible: false,
      link: {
        type: "generated-index",
        title: "Explanation",
        description:
          "Big-picture explanations of higher-level Fishjam concepts. Most useful for building understanding of a particular topic.",
        slug: "/explanation",
      },
      items: [
        "explanation/what-is-fishjam",
        "explanation/architecture",
        "explanation/core-concepts",
        "explanation/room-types",
        "explanation/security-tokens",
        "explanation/room-manager-concept",
        "explanation/glossary",
      ],
    },
  ],
};

export default sidebars;
