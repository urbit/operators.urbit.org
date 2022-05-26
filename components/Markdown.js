import remark from "remark";
import gfm from "remark-gfm";
import slug from "remark-slug";
import heading from "remark-heading-id";
import remarkprism from "remark-prism";
import normalize from "mdurl/encode";
import merge from "deepmerge";
import github from "hast-util-sanitize/lib/github";
import remarkParse from "remark-parse";
import remarkRehype, { defaultHandlers, all } from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeRaw from "rehype-raw";

// img is wrapped in figure so that images can be extra wide in the blog posts
function img(h, node) {
  var props = { src: normalize(node.url), alt: node.alt };
  if (node.title !== null && node.title !== undefined) {
    props.title = node.title;
  }
  return {
    type: "element",
    tagName: "figure",
    properties: {},
    children: [
      {
        type: "element",
        tagName: "img",
        properties: props,
      },
    ],
  };
}

function a(h, node) {
  const url = node.url;

  if (
    url.includes("https://operators.urbit.org") ||
    url.startsWith("/") ||
    url.startsWith("#")
  ) {
    return {
      type: "element",
      tagName: "a",
      properties: {
        href: url,
      },
      children: all(h, node),
    };
  } else {
    return {
      type: "element",
      tagName: "a",
      properties: {
        target: "_blank",
        rel: "noopener",
        href: url,
      },
      children: all(h, node),
    };
  }
}

const handlers = defaultHandlers;
handlers.link = a;
handlers.image = img;

const options = {
  allowDangerousHtml: true,
  handlers: handlers,
  sanitize: merge(github, {
    // remove user-content from github.json to remark-slug work as expected
    clobberPrefix: "",
    attributes: { "*": ["className"] },
  }),
};

// Converts markdown strings into markdown HTML/React components
export default async function Markdown({ post }, disablePlugins) {
  const result = await remark()
    .use(remarkParse)
    .use(remarkprism, {
      plugins: !disablePlugins ? ["show-invisibles"] : [],
    })
    .use(gfm)
    .use(slug)
    .use(heading)
    .use(remarkRehype, options)
    .use(rehypeRaw)
    .use(rehypeStringify)
    .process(post.content);

  return result.toString();
}
