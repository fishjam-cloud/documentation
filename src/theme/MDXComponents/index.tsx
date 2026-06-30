import MDXComponents from "@theme-original/MDXComponents";
import Code from "./Code";
import Pre from "./Pre";

// t-rex-ui ships a bundled MDXComponents map whose code/pre use its own Prism-based
// CodeBlock. That would orphan our Shiki + Twoslash pipeline (configured via
// rehypeShikiPlugin in docusaurus.config.ts) and drop the copy button. Keep all of
// t-rex's MDX components, but re-point code/pre back to ours so Shiki output renders.
export default {
  ...MDXComponents,
  code: Code,
  pre: Pre,
};
