import Head from "next/head";
import Meta from "../../components/Meta";
import Link from "next/link";
import { join } from "path";
import { Markdown, getPage, RenderTree } from "@urbit/foundation-design-system";
import ContentArea from "../../components/ContentArea";
import Sidebar from "../../components/DocsSidebar";
import ManualTree from "../../cache/manual.json";

const breadcrumbs = (posts, paths) => {
  const results = [
    <Link href="/manual">Operator's Manual</Link>,
  ];
  let thisLink = "/manual";
  for (const path of paths) {
    posts = posts.children[path];
    thisLink = join(thisLink, path);
    results.push(
      <span className="px-1">/</span>,
      <Link href={thisLink}>{posts.title}</Link>
    );
  }
  return results;
};

export default function UsingLayout({ posts, data, params, search, markdown }) {
  return (
    <>
      <Head>
        <title>{data.title} • Operator's Manual • urbit.org</title>
        {Meta(data)}
      </Head>
      <div className="flex h-screen min-h-screen w-screen sidebar">
        <Sidebar search={search}>
          <RenderTree root="/manual" posts={posts.children} />
        </Sidebar>
        <ContentArea
          breadcrumbs={breadcrumbs(posts, params.slug?.slice(0, -1) || "")}
          title={data.title}
          search={search}
          section={"Operator's Manual"}
          params={params}
        >
          <div className="markdown">
            <Markdown.render content={JSON.parse(markdown)} />
          </div>
        </ContentArea>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const posts = ManualTree;

  const { data, content } = getPage(
    join(process.cwd(), "content/manual", params.slug?.join("/") || "/")
  );

  const markdown = JSON.stringify(Markdown.parse({ post: { content } }));

  return { props: { posts, data, markdown, params } };
}

export async function getStaticPaths() {
  const posts = ManualTree;
  const slugs = [];

  const allHrefs = (thisLink, tree) => {
    slugs.push(thisLink, ...tree.pages.map((e) => join(thisLink, e.slug)));
    allHrefsChildren(thisLink, tree.children);
  };

  const allHrefsChildren = (thisLink, children) => {
    Object.entries(children).map(([childSlug, child]) => {
      allHrefs(join(thisLink, childSlug), child);
    });
  };

  allHrefs("/manual", posts);

  return {
    paths: slugs,
    fallback: false,
  };
}
