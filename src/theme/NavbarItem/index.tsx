import React from "react";
import { useLocation } from "@docusaurus/router";
import OriginalNavbarItem from "@theme-original/NavbarItem";

type NavbarItemProps = React.ComponentProps<typeof OriginalNavbarItem>;

export default function NavbarItemWrapper(
  props: NavbarItemProps,
): React.JSX.Element | null {
  const { pathname } = useLocation();
  const isDocsVersionDropdown = props.type === "docsVersionDropdown";
  const isApiReferencePage = /\/api\/rest(?:\/|$)/.test(pathname);

  // The Scalar REST reference is unversioned, so hiding the docs version dropdown
  // here avoids sending users back to Docs when they attempt to switch versions.
  if (isDocsVersionDropdown && isApiReferencePage) {
    return null;
  }

  return <OriginalNavbarItem {...props} />;
}
