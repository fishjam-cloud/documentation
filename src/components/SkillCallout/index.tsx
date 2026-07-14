import React, { useState } from "react";
import Link from "@docusaurus/Link";
import { useVersionedLink } from "@site/src/hooks/useVersionedLink";
import styles from "./index.module.css";

const INSTALL_COMMAND = "npx skills add software-mansion-labs/skills";

export default function SkillCallout() {
  const skillHref = useVersionedLink("ai-skill");
  const [copied, setCopied] = useState(false);

  const copy = () => {
    if (!navigator?.clipboard) return;
    navigator.clipboard
      .writeText(INSTALL_COMMAND)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {});
  };

  return (
    <aside className={styles.callout}>
      <div className={styles.body}>
        <p className={styles.eyebrow}>✨ Build with AI</p>
        <p className={styles.heading}>Your coding assistant, fluent in Fishjam</p>
        <p className={styles.subcopy}>
          Install the Fishjam Skill and your coding assistant writes accurate,
          up-to-date Fishjam code across backend, web, and mobile.
        </p>
      </div>

      <div className={styles.actions}>
        <div className={styles.command}>
          <span className={styles.prompt} aria-hidden="true">
            $
          </span>
          <code className={styles.commandText}>{INSTALL_COMMAND}</code>
          <button
            type="button"
            className={styles.copyButton}
            onClick={copy}
            aria-label="Copy install command"
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
        <Link className={styles.learnMore} href={skillHref}>
          Learn about the Fishjam Skill →
        </Link>
      </div>
    </aside>
  );
}
