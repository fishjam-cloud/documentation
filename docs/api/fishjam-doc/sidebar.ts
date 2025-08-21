import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/fishjam-doc/fishjam-media-server",
    },
    {
      type: "category",
      label: "broadcaster",
      items: [
        {
          type: "doc",
          id: "api/fishjam-doc/verify-token",
          label: "Verify token provided by broadcaster",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "room",
      items: [
        {
          type: "doc",
          id: "api/fishjam-doc/get-all-rooms",
          label: "Show information about all rooms",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/fishjam-doc/create-room",
          label: "Creates a room",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/fishjam-doc/delete-room",
          label: "Delete the room",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/fishjam-doc/get-room",
          label: "Shows information about the room",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/fishjam-doc/add-peer",
          label: "Create peer",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/fishjam-doc/delete-peer",
          label: "Delete peer",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/fishjam-doc/refresh-token",
          label: "Refresh peer token",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "streamer",
      items: [
        {
          type: "doc",
          id: "api/fishjam-doc/generate-streamer-token",
          label: "Generate a token that can be used by a streamer to start streaming",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "viewer",
      items: [
        {
          type: "doc",
          id: "api/fishjam-doc/generate-viewer-token",
          label: "Generates token that a viewer can use to watch a livestream",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "api/fishjam-doc/notification",
          label: "Handle notification from broadcaster",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
