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
} from "@urbit/foundation-design-system";
import Meta from "../components/Meta";


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

export default function Home({
  inspectId,
  whichId,
  urbitidFaq,
  l2Stars,
  runningGalaxy,
  starBuyers,
  sellingPlanets,
  search,
  urbitSecurity,
  troubleshootingBasics
}) {
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
        <Section className="pb-12">
          {/* Hero statement */}
          <div className="flex flex-col space-y-4">
            <h1 className="max-w-prose">
              Additional Guides
            </h1>
          </div>
        </Section>


        <Section>
          <TwoUp>
            <GuideCard guide={troubleshootingBasics} />
            <GuideCard guide={urbitidFaq} />

          </TwoUp>

          <TwoUp>
            <GuideCard guide={inspectId} />
            <GuideCard guide={whichId} />
          </TwoUp>

          <TwoUp>
            <GuideCard guide={l2Stars} />
            <GuideCard guide={runningGalaxy} />
          </TwoUp>

          <TwoUp className="">
            <GuideCard guide={sellingPlanets} />
            <GuideCard guide={urbitSecurity} />
          </TwoUp>



        </Section>

        {/* <Section>
          <h2 className="m-0 p-0 mr-4">FAQ</h2>
          <FaqCard faq={faq} className="mt-8" />
        </Section> */}

      </SingleColumn>
      <Footer />
    </Container>
  );
}

export async function getStaticProps() {
  const inspectId = getPostBySlug(
    "how-to-inspect-an-id",
    ["slug", "title", "description"],
    "guides"
  );

    const troubleshootingBasics = getPostBySlug(
    "troubleshooting-basics",
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

  const sellingPlanets = getPostBySlug(
    "selling-planets",
    ["slug", "title", "description"],
    "guides"
  );

  const urbitidFaq = getPostBySlug(
    "urbit-id-faq",
    ["slug", "title", "description"],
    "guides"
  );

  const urbitSecurity = getPostBySlug(
    "urbit-security",
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
      urbitidFaq,
      runningStar,
      runningGalaxy,
      sellingPlanets,
      urbitSecurity,
      faq,
      troubleshootingBasics
    },
  };
}
