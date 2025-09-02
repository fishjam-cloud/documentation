import { visit } from "unist-util-visit";

export default function remarkInjectFilePath() {
  return (tree, vfile) => {
    visit(tree, "code", (node) => {
      const meta = (node.meta || "").trim();
      const newMeta = `loc=${vfile.path}`;

      if (meta) {
        node.meta = `${meta} ${newMeta}`;
      } else {
        node.meta = newMeta;
      }
    });
  };
}
