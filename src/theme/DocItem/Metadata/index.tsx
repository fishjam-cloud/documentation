import type { ReactNode } from "react";
import Head from "@docusaurus/Head";
import { PageMetadata } from "@docusaurus/theme-common";
import {
  useDoc,
  useSidebarBreadcrumbs,
} from "@docusaurus/plugin-content-docs/client";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

// Browser tab title pattern:
// - Docs under a top-level category: "Page Title | Fishjam <Category>"
//   (the category label comes from the sidebar, i.e. each _category_.json)
// - Root-level docs (e.g. the landing page): just "Page Title"
export default function DocItemMetadata(): ReactNode {
  const { metadata, frontMatter, assets } = useDoc();
  const breadcrumbs = useSidebarBreadcrumbs();
  const { siteConfig } = useDocusaurusContext();

  const topCategory = breadcrumbs?.find((item) => item.type === "category");

  const formattedTitle = topCategory
    ? `${metadata.title} ${siteConfig.titleDelimiter} Fishjam ${topCategory.label}`
    : metadata.title;

  return (
    <>
      <Head>
        <title>{formattedTitle}</title>
        <meta property="og:title" content={formattedTitle} />
      </Head>
      <PageMetadata
        description={metadata.description}
        keywords={frontMatter.keywords}
        image={assets.image ?? frontMatter.image}
      />
    </>
  );
}
