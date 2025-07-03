import type { ComponentProps } from "react";
import React, { useState, useRef } from "react";
import CodeInline from "@theme/CodeInline";
import type { Props } from "@theme/MDXComponents/Code";
import styles from "./Code.module.css";

function shouldBeInline(props: Props) {
  return (
    // empty code blocks have no props.children,
    // see https://github.com/facebook/docusaurus/pull/9704
    typeof props.children !== "undefined" &&
    React.Children.toArray(props.children).every(
      (el) => typeof el === "string" && !el.includes("\n"),
    )
  );
}

function CodeBlock(props: ComponentProps<"code">): JSX.Element {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef<HTMLElement>(null);

  const copyToClipboard = () => {
    if (!codeRef.current) return;

    const codeContent = codeRef.current.textContent || "";
    navigator.clipboard
      .writeText(codeContent)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((error) => {
        console.error("Failed to copy code to clipboard:", error);
      });
  };

  return (
    <div className={styles.codeBlockContainer}>
      <button
        onClick={copyToClipboard}
        className={styles.copyButton}
        aria-label="Copy code to clipboard"
        title="Copy code to clipboard"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
      <code ref={codeRef} {...props} />
    </div>
  );
}

export default function MDXCode(props): JSX.Element {
  return shouldBeInline(props) ? (
    <CodeInline {...props} />
  ) : (
    <CodeBlock {...props} />
  );
}
