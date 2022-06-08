import { useRouter } from "next/router";
import Head from "next/head";
import Meta from "../components/Meta";
import ErrorPage from "../pages/404";
import Container from "./Container";
import Header from "./Header";
import Footer from "./Footer";
import SingleColumn from "./SingleColumn";
import Section from "./Section";
import { decode } from "html-entities";
import { TableOfContents } from "./TableOfContents";

export default function PageWithIndex({ post, markdown }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage />;
  }
  return (
    <Container>
      <Head>
        <title>{post.title} • Operator's Manual • Urbit</title>
        {Meta(post)}
      </Head>
      <SingleColumn>
        <Header />
        <Section>
          <h1>{post.title}</h1>
          <h3 className=" mt-6">{post.description}</h3>
        </Section>
        <Section>
          <div className="flex">
            <article
              className={"markdown pr-0 lg:pr-16"}
              dangerouslySetInnerHTML={{ __html: decode(markdown) }}
            ></article>
            <TableOfContents />
          </div>
        </Section>
        <Footer />
      </SingleColumn>
    </Container>
  );
}
