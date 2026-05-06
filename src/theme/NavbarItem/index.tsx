import React from "react";
import { useLocation } from "@docusaurus/router";
import OriginalNavbarItem from "@theme-original/NavbarItem";

type NavbarItemProps = React.ComponentProps<typeof OriginalNavbarItem>;

export default function NavbarItemWrapper(
  props: NavbarItemProps,
): React.JSX.Element | null {
  const { pathname } = useLocation();
  const isDocsVersionDropdown = props.type === "docsVersionDropdown";
  const isApiReferencePage = pathname.startsWith("/api/rest");

  // The Scalar REST reference is unversioned, so we hide the version dropdown
  if (isDocsVersionDropdown && isApiReferencePage) {
    return null;
  }

  return <OriginalNavbarItem {...props} />;
}
