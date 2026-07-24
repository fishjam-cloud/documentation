import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { Navbar } from "@swmansion/t-rex-ui";

// Required wrapper for t-rex-ui's Navbar.
// - heroImages: the navbar logo.
// - isAlgoliaActive: t-rex's navbar search is classic Algolia DocSearch. Its hooks
//   read themeConfig.algolia, which we set (mirroring themeConfig.docsearch) in
//   docusaurus.config.ts so the navbar search box works. The @docsearch adapter
//   still powers the Ask-AI sidepanel separately.
// - isThemeSwitcherShown={false}: color mode switching is disabled site-wide.
// Written as .jsx so tsc skips t-rex's prop types.
export default function NavbarWrapper(props) {
  const heroImages = {
    logo: useBaseUrl("/img/logo.svg"),
  };
  return (
    <Navbar
      heroImages={heroImages}
      isAlgoliaActive={true}
      isThemeSwitcherShown={false}
      {...props}
    />
  );
}
