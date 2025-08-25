import { PropSidebarItemLink } from "@docusaurus/plugin-content-docs";
import { useDocsVersion } from "@docusaurus/plugin-content-docs/client";

export function useVersionedLink(link: string) {
  const {
    docsSidebars: { docsSidebar },
  } = useDocsVersion();

  const root = (docsSidebar[0] as PropSidebarItemLink).href;

  return `${root}${link}`;
}
