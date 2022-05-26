import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Container from "../components/Container";
import Section from "../components/Section";
import SingleColumn from "../components/SingleColumn";
import Header from "../components/Header";
import Footer from "../components/Footer";

import TwoUp from "../components/TwoUp";
import { getPostBySlug } from "../lib/lib";
import BubbleLink from "../components/BubbleLink";

function GuideCard({ guide, className }) {
  return (
    <div
      className={
        "bg-wall-100 dark:bg-antiwall-100 rounded-xl cursor-pointer aspect-w-none aspect-h-none md:aspect-w-5 md:aspect-h-4 " +
        className
      }
    >
      <Link href={`/guides/${guide.slug}`}>
        <div className="p-8 measure ">
          <h4 className="mb-4">{guide.title}</h4>
          <p>{guide.description}</p>
        </div>
      </Link>
    </div>
  );
}

GuideCard.defaultProps = {
  className: "",
};

function BuyersCard({ guide, className }) {
  return (
    <div
      className={
        "bg-wall-100 dark:bg-antiwall-100 rounded-xl cursor-pointer mt-8 h-96 " +
        className
      }
    >
      <Link href={`/guides/${guide.slug}`}>
        <div className="p-8 measure ">
          <h4 className="mb-4">{guide.title}</h4>
          <p>{guide.description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function Home({
  inspectId,
  whichId,
  l2Stars,
  runningGalaxy,
  faq,
  starBuyers,
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
          <div className="relative w-full bg-gray-200 rounded-2xl hero-image-height overflow-hidden bg-hero-img">
            <div className="absolute text-black dark:text-white flex w-full h-full items-center p-4 md:p-8 lg:p-12">
              <div>
                <h1>Guides for Urbit Operators </h1>
                <h1>and Community Leaders</h1>
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <h2 className="m-0 p-0 mr-4">Getting Started</h2>
          <BuyersCard guide={starBuyers} />
          <TwoUp className="mt-8">
            <GuideCard guide={inspectId} />
            <GuideCard guide={whichId} />
          </TwoUp>
        </Section>

        <Section>
          <h2 className="m-0 p-0 mr-4">Marketplaces</h2>
          <TwoUp className="mt-8">
            <BubbleLink
              href="https://urbitex.io"
              title="Urbitex"
              caption="An automated Urbit address marketplace"
            >
              <img
                alt="Urbitex logo"
                className="max-w-none w-12 h-12 rounded-full"
                src="/images/urbitex-logo.png"
              />
            </BubbleLink>
            <BubbleLink
              href="https://opensea.io/assets/urbit-id"
              title="OpenSea"
              caption="A large, general NFT marketplace"
            >
              <img
                alt="opensea logo"
                className="max-w-none w-12 h-12 rounded-full"
                src="https://opensea.io/static/images/logos/opensea.svg"
              />
            </BubbleLink>
          </TwoUp>
          <TwoUp className="mt-0">
            <BubbleLink
              href="https://urbit.live"
              title="Urbit.live"
              caption="A specialized market for Urbit planets"
            >
              <img
                alt="urbitlive logo"
                className="max-w-none w-12 h-12 rounded-full"
                src="https://urbit.live/static/media/urbit-live-logo-png-400.6ec9a92b.png"
              />
            </BubbleLink>
            <BubbleLink
              href="https://urbit.org/groups/~tirrel/the-marketplace"
              title="The Marketplace"
              caption="An Urbit group for trading address space"
            >
              <img
                alt="Marketplace logo"
                className="max-w-none w-12 h-12 rounded-full"
                src="/images/the-marketplace-logo.png"
              />
            </BubbleLink>
          </TwoUp>
        </Section>

        <Section>
          <h2 className="m-0 p-0 mr-4">Operating your Node</h2>
          <TwoUp className="mt-8">
            <GuideCard guide={l2Stars} />
            <GuideCard guide={runningGalaxy} />
          </TwoUp>
        </Section>

        {/* <Section>
          <h2 className="m-0 p-0 mr-4">FAQ</h2>
          <FaqCard faq={faq} className="mt-8" />
        </Section> */}

        <Section>
          <h2 className="m-0 p-0 mr-4 measure">Help and Support</h2>
          <p className="pb-12 mt-8 measure">
            Need help operating your star or galaxy? Don't be a stranger. Reach
            out to us at the email below.
          </p>
          {/* <Link href="/faq">
            <button className="button-lg type-ui text-white bg-wall-600 mb-4">
            Check out the FAQ
            </button>
          </Link> */}
          <div className="table">
            <a
              href="mailto:support@urbit.org"
              className="button-lg type-ui text-white bg-wall-600 dark:bg-antiwall-100"
            >
              support@urbit.org
            </a>
          </div>
        </Section>

        <Footer />
      </SingleColumn>
    </Container>
  );
}

export async function getStaticProps() {
  const inspectId = getPostBySlug(
    "how-to-inspect-an-id",
    ["slug", "title", "description"],
    "guides"
  );
  const whichId = getPostBySlug(
    "which-id-should-i-buy",
    ["slug", "title", "description"],
    "guides"
  );

  const runningStar = getPostBySlug(
    "running-a-star",
    ["slug", "title", "description"],
    "guides"
  );
  const runningGalaxy = getPostBySlug(
    "running-a-galaxy",
    ["slug", "title", "description"],
    "guides"
  );

  const l2Stars = getPostBySlug(
    "layer-2-for-stars",
    ["slug", "title", "description"],
    "guides"
  );

  const starBuyers = getPostBySlug(
    "star-buyers-guide",
    ["slug", "title", "description"],
    "guides"
  );

  const faq = getPostBySlug("faq", ["slug", "title", "description"], "/");

  return {
    props: {
      inspectId,
      l2Stars,
      starBuyers,
      whichId,
      runningStar,
      runningGalaxy,
      faq,
    },
  };
}
