// scripts/remark-escape-html.mjs
// Remark plugin: converts raw HTML nodes in migrated content to text nodes,
// preventing hast-util-raw / rehype-raw from choking on nmap pipe output
// and other literal < > in fenced code blocks.
// Used via astro.config.mjs → markdown.remarkPlugins

/** @returns {import('unified').Plugin} */
export function remarkEscapeRawHtml() {
  return (tree) => {
    // Walk the mdast and convert 'html' type nodes to 'text'
    // so they pass through as literal strings instead of being
    // re-tokenized by hast-util-raw.
    visit(tree, 'html', (node) => {
      node.type = 'text';
      node.value = node.value ?? '';
    });
  };
}

// Inline visit (avoid external import to keep this self-contained)
function visit(tree, type, visitor) {
  function walk(node) {
    if (node.type === type) visitor(node);
    if (node.children) node.children.forEach(walk);
  }
  walk(tree);
}
