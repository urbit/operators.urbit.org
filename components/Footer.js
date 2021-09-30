import Link from "next/link";
import SingleColumn from "./SingleColumn";
import Section from "./Section";
import { contact } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="mt-20 layout px-4 md:px-8 flex justify-between items-center pt-8 md:pt-10 lg:pt-12 pb-10 md:pb-12 lg:pb-24">
        <Link href="/">
          <a className="type-ui">The Urbit Guidebook</a>
        </Link>

        <a className="type-ui" href="urbit.org" target="_blank">Urbit.org ↗</a>
    </footer>
  );
}
