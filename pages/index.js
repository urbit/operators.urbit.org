import Head from "next/head";
import Link from "next/link";

import Container from "../components/Container";
import Section from "../components/Section";
import SingleColumn from "../components/SingleColumn";
import Header from "../components/Header";
import Footer from "../components/Footer";

import TwoUp from "../components/TwoUp";
import {
  getPostBySlug,
} from "../lib/lib";
import BubbleLink from "../components/BubbleLink";

function GuideCard({ guide }) {
  return (
    <div className="bg-wall-100 dark:bg-antiwall-100 rounded-xl cursor-pointer aspect-w-4 aspect-h-5 md:aspect-w-5 md:aspect-h-4">
      <Link href={`/guides/${guide.slug}`}>
        <div className="p-8">
          <h4 className="mb-4">{guide.title}</h4>
          <p>{guide.description}</p>
        </div>
      </Link>
    </div>
  )
}

export default function Home({
  inspectId,
  whichId,
  runningStar,
  runningGalaxy,
}) {
  
  return (
    <Container>
      <Head>
        <title>operators.urbit.org</title>
      </Head>
      <SingleColumn>
        <Header />
        {
          // Hero Statement
        }
        <Section>
          <div
            className="w-100 p-20 bg-black dark:bg-yellow-300 rounded-xl hero-image-height flex items-center"
            style={{backgroundBlendMode:'exclusion', backgroundImage: 'url(/imagery/hero-img.png)', backgroundPosition: 'center center', backgroundSize: 'cover'}}
            >
            
            <div>
              <h1>Guides for Urbit Operators </h1>
              <h1>and Community Leaders</h1>
            </div>
          </div>
        </Section>

        <Section>
          <h2 className="m-0 p-0 mr-4">Getting Started</h2>
          <TwoUp className="mt-8">
            <GuideCard guide={inspectId} />
            <GuideCard guide={whichId} />
          </TwoUp>
        </Section>

        <Section>
          <h2 className="m-0 p-0 mr-4">Marketplaces</h2>
          <TwoUp className="mt-8">
            <BubbleLink
              href="https://starketplace.urbit.org"
              title="Starketplace"
              caption="DEX for stars"
            />
            <BubbleLink
              href="https://opensea.io/"
              title="OpenSea"
              caption="Discover, collect, and sell extraordinary NFTs"
            />
          </TwoUp>
          <TwoUp className="mt-0">
            <BubbleLink
              href="https://starketplace.urbit.org"
              title="Starketplace"
              caption="DEX for stars"
            />
            <BubbleLink
              href="https://opensea.io/"
              title="OpenSea"
              caption="Discover, collect, and sell extraordinary NFTs"
            />
          </TwoUp>
        </Section>

        <Section>
          <h2 className="m-0 p-0 mr-4">Operating your Node</h2>
          <TwoUp className="mt-8">
            <GuideCard guide={runningStar} />
            <GuideCard guide={runningGalaxy} />
          </TwoUp>
        </Section>

        <Section>
          <h2 className="m-0 p-0 mr-4">FAQ</h2>
        </Section>

      </SingleColumn>

      <Footer />
    </Container>
  );
}

export async function getStaticProps() {

  const inspectId = getPostBySlug('how-to-inspect-an-id', ['slug', 'title', 'description'], 'guides')
  const whichId = getPostBySlug('which-id-should-i-buy', ['slug', 'title', 'description'], 'guides')

  const runningStar = getPostBySlug('running-a-star', ['slug', 'title', 'description'], 'guides')
  const runningGalaxy = getPostBySlug('running-a-galaxy', ['slug', 'title', 'description'], 'guides')

  return {
    props: { 
      inspectId,
      whichId,
      runningStar,
      runningGalaxy,
    },
  };
}
