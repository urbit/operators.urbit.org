import Link from "next/link";
import SingleColumn from "./SingleColumn";
import Section from "./Section";
import { contact } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="bg-wall-100 dark:bg-antiwall-100 mt-20 w-full flex justify-center pb-32">
      <SingleColumn>
        <Section short className="flex flex-row flex-wrap">
          Footer
        </Section>
      </SingleColumn>
    </footer>
  );
}
