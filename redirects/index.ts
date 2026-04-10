import versions from "../versions.json";

interface RedirectGroup {
  since: string;
  description: string;
  // from (old path) → to (new path), without version prefix
  rules: Array<{ from: string; to: string }>;
}

const redirectGroups: RedirectGroup[] = [
  {
    since: "0.26.0",
    description: "Gemini Live moved from Tutorials to Integrations",
    rules: [
      {
        from: "/tutorials/gemini-live-integration",
        to: "/integrations/gemini-live-integration",
      },
    ],
  },
  {
    since: "0.26.0",
    description: "Features section dissolved into Web & Mobile and Backend",
    rules: [
      { from: "/how-to/features/simulcast", to: "/how-to/client/simulcast" },
      { from: "/how-to/features/text-chat", to: "/how-to/client/text-chat" },
      {
        from: "/how-to/features/audio-only-calls",
        to: "/how-to/backend/audio-only-calls",
      },
      {
        from: "/how-to/features/sandbox-api-testing",
        to: "/how-to/backend/sandbox-api-testing",
      },
      {
        from: "/how-to/features/selective-subscriptions",
        to: "/how-to/backend/selective-subscriptions",
      },
      {
        from: "/how-to/features/whip-whep",
        to: "/how-to/backend/whip-whep",
      },
    ],
  },
  {
    since: "0.26.0",
    description: "Renamed room-types and public-livestreams in Concepts",
    rules: [
      { from: "/explanation/room-types", to: "/explanation/rooms" },
      {
        from: "/explanation/public-livestreams",
        to: "/explanation/livestreams",
      },
    ],
  },
];

function compareVersions(a: string, b: string): number {
  const partsA = a.split(".").map(Number);
  const partsB = b.split(".").map(Number);
  for (let i = 0; i < 3; i++) {
    if (partsA[i] !== partsB[i]) return partsA[i] - partsB[i];
  }
  return 0;
}

/**
 * Creates the `createRedirects` callback for @docusaurus/plugin-client-redirects.
 *
 * Path conventions:
 *  - `/next/...`          → unreleased, always redirect
 *  - `/0.26.0/...`        → versioned, redirect if version >= rule.since
 *  - `/...` (no prefix)   → latest tagged version, redirect if latest >= rule.since
 */
export function createRedirects(existingPath: string): string[] | undefined {
  const latestVersion = versions[0];

  // Determine the effective version for this path
  let effectiveVersion: string | null = null;
  let isNext = false;
  let prefix = "";

  const versionMatch = existingPath.match(/^\/(\d+\.\d+\.\d+)\//);
  if (existingPath.startsWith("/next/")) {
    isNext = true;
    prefix = "/next";
  } else if (versionMatch) {
    effectiveVersion = versionMatch[1];
    prefix = `/${effectiveVersion}`;
  } else {
    // Root path — maps to the latest tagged version
    effectiveVersion = latestVersion;
    prefix = "";
  }

  const pathWithoutPrefix = existingPath.slice(prefix.length);

  const results: string[] = [];

  for (const group of redirectGroups) {
    const applies =
      isNext ||
      (effectiveVersion != null &&
        compareVersions(effectiveVersion, group.since) >= 0);
    if (!applies) continue;

    for (const rule of group.rules) {
      if (pathWithoutPrefix === rule.to) {
        results.push(`${prefix}${rule.from}`);
      }
    }
  }

  return results.length > 0 ? results : undefined;
}
