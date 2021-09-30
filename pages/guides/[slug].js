import { useRouter } from "next/router";
import {
  getPostBySlug,
  getAllPosts
} from '../../lib/lib'
import Head from "next/head";
import Meta from "../../components/Meta";
import ErrorPage from "../404";
import Container from "../../components/Container";
import Markdown from "../../components/Markdown";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SingleColumn from "../../components/SingleColumn";
import Section from "../../components/Section";

import { decode } from "html-entities";

export default function Post({
  post,
  markdown,
}) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage />;
  }
  return (
    <Container>
      <Head>
        <title>{post.title} • Updates • operators.urbit.org</title>
        {Meta(post)}
      </Head>
      <SingleColumn>
        <Header />
        <Section short narrow>
          <h1>{post.title}</h1>
          <h3 className=" mt-6">{post.description}</h3>
        </Section>
        <Section narrow className="markdown">
          <article
            dangerouslySetInnerHTML={{ __html: decode(markdown) }}
          ></article>
        </Section>
        <Footer />
      </SingleColumn>
    </Container>
  );
}

//
export async function getStaticProps({ params }) {

  const post = getPostBySlug(
    params.slug,
    ["title", "slug",  "description", "content"],
    "guides"
  );

  const markdown = await Markdown({ post });

  return {
    props: { post, markdown },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"], "guides");

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
