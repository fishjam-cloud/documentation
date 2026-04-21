import type { ReactNode } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";

export default function Root({ children }: { children: ReactNode }): ReactNode {
  return (
    <>
      {children}
      <BrowserOnly>
        {() => {
          const AskAiSidepanel =
            require("../components/AskAiSidepanel").default;
          return <AskAiSidepanel />;
        }}
      </BrowserOnly>
    </>
  );
}
