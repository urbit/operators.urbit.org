import remark from "remark";
import gfm from "remark-gfm";
import slug from "remark-slug";
import heading from "remark-heading-id";
import html from "remark-html";
import remarkprism from "remark-prism";
import normalize from "mdurl/encode";

// img is wrapped in figure so that images can be extra wide in the blog posts
function Img(h, node) {
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

const options = {
  handlers: {
    image: Img,
  },
  entities: "numbers",
};

// Converts markdown strings into markdown HTML/React components
export default async function Markdown({ post }) {
  const result = await remark()
    .use(html, options)
    .use(gfm)
    .use(remarkprism, {
      plugins: ["show-invisibles"],
    })
    .use(slug)
    .use(heading)
    .process(post.content);

  return result.toString();
}
