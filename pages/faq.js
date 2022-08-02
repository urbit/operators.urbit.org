import { getPostBySlug } from "../lib/lib";
import PageWithIndex from "../components/PageWithIndex";
import { Markdown } from "@urbit/foundation-design-system";

export default function Faq({ post, markdown, search }) {
  return <PageWithIndex post={post} markdown={markdown} search={search} />;
}

export async function getStaticProps() {
  const post = getPostBySlug("/faq", ["title", "slug", "content"], "/");

  const markdown = JSON.stringify(Markdown.parse({ post }));

  return {
    props: { post, markdown },
  };
}
