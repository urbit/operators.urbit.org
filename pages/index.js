import Head from "next/head";
import Link from "next/link";
import Stars from "../components/icons/stars.svg";
import Header from "../components/Header";
import Footer from "../components/Footer";
import OneUp from "../components/OneUp";
import {
  IntraNav,
  Section,
  Container,
  SingleColumn,
  TwoUp,
  getPostBySlug,
  getAllPosts
} from "@urbit/foundation-design-system";
import Meta from "../components/Meta";
import HighlightCard from "../components/HighlightCard";


function GuideCard({ guide, className }) {

  const post = {
    title: "Urbit Operators",
    description: "Learn best practices for running your own urbit and hosting digital communities.",
    image: "https://storage.googleapis.com/media.urbit.org/site/opengraph/operators.png"
  };

  return (
    <>

    <Head>
      <title>Urbit Operators</title>
      {Meta(post, false, true)}
    </Head>


      <div
        className={"bg-wall-100 rounded-xl cursor-pointer h-full " + className}
      >
        <div className="p-8 measure flex justify-between flex-col">
          <div>
            <h4 className="mb-4">{guide.title}</h4>
            <p>{guide.description}</p>
          </div>
          <Link href={`/guides/${guide.slug}`}>
            <a
              passHref
              className="bg-green-400 text-white rounded-lg flex justify-center p-3 w-20 mt-4"
            >
              Read
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

GuideCard.defaultProps = {
  className: "",
};

function BuyersCard({ guide, className = "" }) {
  return (
    <div
      className={
        "rounded-xl items-center flex flex-col md:flex-row space-y-24 mt-8 md:space-x-8 md:space-y-0" +
        className
      }
    >
      <Stars className="filter overflow-visible" style={{ flexBasis: "25%" }} />
      <div className="flex flex-col space-y-8" style={{ flexBasis: "75%" }}>
        <p>{guide.description}</p>
        <Link passHref href={`/guides/${guide.slug}`}>
          <a className="button-lg bg-green-400 text-white w-40">View Guide</a>
        </Link>
      </div>
    </div>
  );
}

export default function Home({search, starBuyers, highlights}) {
  return (
    <Container>
      <Head>
        <title>Home · Operator's Manual · Urbit</title>
      </Head>
      <IntraNav ourSite="https://operators.urbit.org" search={search} />
      <SingleColumn>
        <Header search={search} />
        {
          // Hero Statement
        }
        <Section className="pb-36">
          {/* Hero statement */}
          <div className="flex flex-col space-y-4">
            <h1 className="max-w-prose">
              Learn about the network and best practices for running your urbit.
            </h1>
          </div>
        </Section>

        <Section className="pb-36">
          <HighlightCard highlight={highlights[0]} key={highlights[0].slug} />
        </Section>


        <Section>
          <h2 className="m-0 p-0 mr-4">Operator's Manual</h2>
          <div
            className={
              "mt-8 items-center flex flex-col md:flex-row space-y-24 md:space-y-0 md:space-x-8"
            }
          >
            <img src="/images/operators-manual.svg" className="basis-1/4" />
            <div
              className="flex flex-col space-y-8"
              style={{ flexBasis: "75%" }}
            >
              <p>
                A series of guides and reference material for assisting you in
                the usage and operations of your ship.
              </p>
              <Link passHref href="/manual">
                <a className="button-lg bg-green-400 text-white w-40">
                  View Guide
                </a>
              </Link>
            </div>
          </div>
        </Section>


        <Section>
          <h2 className="m-0 p-0 mr-4">Star Buyer's Guide</h2>
          <BuyersCard guide={starBuyers} />
        </Section>

        {/* <Section>
          <h2 className="m-0 p-0 mr-4">FAQ</h2>
          <FaqCard faq={faq} className="mt-8" />
        </Section> */}


        <Section>
          <h2 className="m-0 p-0 mr-4">Additional Guides</h2>
          <div
            className={
              "mt-8 items-center flex flex-col md:flex-row space-y-24 md:space-y-0 md:space-x-8"
            }
          >
            <div
              className="flex flex-col space-y-8"
              style={{ flexBasis: "75%" }}
            >
              <p>
                Learn more about common troubleshooting issues, Urbit ID, running stars and galaxies, and more.
              </p>
              <Link passHref href="/guides">
                <a className="button-lg bg-green-400 text-white w-40">
                  View Guides
                </a>
              </Link>
            </div>
          </div>
        </Section>



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
              className="button-lg type-ui text-white bg-wall-600"
            >
              support@urbit.org
            </a>
          </div>
        </Section>
      </SingleColumn>
      <Footer />
    </Container>
  );
}

export async function getStaticProps() {

  const highlights = getAllPosts(
    ["title", "slug", "image", "url", "description"],
    "highlights"
  );


  const starBuyers = getPostBySlug(
    "star-buyers-guide",
    ["slug", "title", "description"],
    "guides"
  );


  const faq = getPostBySlug("faq", ["slug", "title", "description"], "/");

  return {
    props: {
      starBuyers,
      highlights
    },
  };
}
