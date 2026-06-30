import type { ReactElement } from "react";
import { DocSearchSidepanel } from "@docsearch/react/sidepanel";
import "@docsearch/css/dist/sidepanel.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function AskAiSidepanel(): ReactElement {
  const { siteConfig } = useDocusaurusContext();
  const { appId, apiKey, indexName, assistantId, agentStudio } = siteConfig
    .customFields!.askAi as any;

  return (
    <DocSearchSidepanel
      appId={appId}
      apiKey={apiKey}
      indexName={indexName}
      assistantId={assistantId}
      agentStudio={agentStudio}
      button={{ variant: "floating" }}
      panel={{ variant: "floating", side: "right" }}
    />
  );
}
