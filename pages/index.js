import Head from "next/head";
import Link from "next/link";
import Image from "next/image"

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

function GuideCard({ guide, className }) {
  return (
    <div className={"bg-wall-100 dark:bg-antiwall-100 rounded-xl cursor-pointer aspect-w-4 aspect-h-5 md:aspect-w-5 md:aspect-h-4 " + className}>
      <Link href={`/guides/${guide.slug}`}>
        <div className="p-8 measure">
          <h4 className="mb-4">{guide.title}</h4>
          <p>{guide.description}</p>
        </div>
      </Link>
    </div>
  )
}

function FaqCard({ faq, className }) {
  return (
    <div className={"bg-green-100 dark:bg-antiwall-100 rounded-xl cursor-pointer h-96 " + className}>
      <Link href={`/faq`}>
        <div className="p-8 measure">
          <h4 className="mb-4">{faq.title}</h4>
          <p>{faq.description}</p>
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
  faq,
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
          <div className="relative w-full bg-black dark:bg-yellow-300 rounded-2xl hero-image-height overflow-hidden">
            <div style={{ mixBlendMode:'exclusion' }}>
              <Image unoptimized={true} loading='eager' src="/images/hero-img.png" layout="fill" objectFit='cover' alt="Guide hero image gradient"/>
            </div>
            <div className="absolute flex w-full h-full items-center p-4 md:p-8 lg:p-12">
              <div>
                <h1>Guides for Urbit Operators </h1>
                <h1>and Community Leaders</h1>
              </div>
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
          <FaqCard faq={faq} className="mt-8" />
        </Section>
        <Footer />
      </SingleColumn>
    </Container>
  );
}

export async function getStaticProps() {

  const inspectId = getPostBySlug('how-to-inspect-an-id', ['slug', 'title', 'description'], 'guides')
  const whichId = getPostBySlug('which-id-should-i-buy', ['slug', 'title', 'description'], 'guides')

  const runningStar = getPostBySlug('running-a-star', ['slug', 'title', 'description'], 'guides')
  const runningGalaxy = getPostBySlug('running-a-galaxy', ['slug', 'title', 'description'], 'guides')

  const faq = getPostBySlug('faq', ['slug', 'title', 'description'], '/')

  return {
    props: {
      inspectId,
      whichId,
      runningStar,
      runningGalaxy,
      faq,
    },
  };
}
