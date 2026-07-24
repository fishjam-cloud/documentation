import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { DocSidebar } from "@swmansion/t-rex-ui";

// Required wrapper for t-rex-ui's DocSidebar. Badge arrays (new/experimental/
// deprecated/unreleased doc IDs) are empty for now — populate when we want sidebar
// badges. Written as .jsx so tsc skips t-rex's prop types.
export default function DocSidebarWrapper(props) {
  const heroImages = {
    logo: useBaseUrl("/img/logo.svg"),
  };
  return (
    <DocSidebar
      heroImages={heroImages}
      newItems={[]}
      experimentalItems={[]}
      deprecatedItems={[]}
      unreleasedItems={[]}
      {...props}
    />
  );
}
