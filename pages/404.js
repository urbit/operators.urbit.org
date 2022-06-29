import Head from "next/head";
import Meta from "../components/Meta";
import Container from "../components/Container";
import SingleColumn from "../components/SingleColumn";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Section from "../components/Section";
import { IntraNav } from "foundation-design-system";

export default function NotFound({ search }) {
  const post = {
    title: "404",
  };
  return (
    <Container>
      <Head>
        <title>404 • Operator's Manual • Urbit</title>
        {Meta(post)}
      </Head>
      <IntraNav ourSite="https://operators.urbit.org" search={search} />
      <SingleColumn>
        <Header search={search} />
        <Section className="pt-48">
          <h1>404</h1>
          <p className="mt-12">It looks like nothing is here.</p>
        </Section>
      </SingleColumn>
      <Footer />
    </Container>
  );
}
