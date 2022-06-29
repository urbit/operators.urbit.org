import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import MenuTray from "./MenuTray";
import classnames from "classnames";

function ActiveLink({ children, href, className, currentPath }) {
  const firstCrumb = currentPath.split("/")[1];

  const activeClassName = classnames({
    "text-wall-600": "/" + firstCrumb === href,
    "text-wall-500": "/" + firstCrumb !== href,
  });

  return (
    <Link href={href} passHref>
      <a className={`${className} ${activeClassName}`}>{children}</a>
    </Link>
  );
}

export default function Header(props) {
  const [isOpen, setTray] = useState(false);

  const currentPath = useRouter().asPath;

  const routeDepth = currentPath.split("/").length;

  const firstCrumb = currentPath.split("/")[1];
  return (
    <header className="layout px-4 md:px-8 flex justify-between items-center pt-8 md:pt-10 lg:pt-12 pb-10 md:pb-12 lg:pb-24">
      <Link href="/">
        <a className="font-semibold text-lg flex items-center">
          Urbit Operators
        </a>
      </Link>

      <nav className="flex">
        {/* <Link href="/faq">
          <a className="type-ui mr-4">FAQ</a>
        </Link> */}
      </nav>
      <MenuTray isOpen={isOpen} setTray={setTray} search={props.search}>
        <Link href="/" passHref>
          <a className="font-semibold mb-4">Urbit Operators</a>
        </Link>
        <Link href="https://urbit.org" passHref>
          <a className="mt-2">Urbit.org</a>
        </Link>
        <Link href="/" passHref>
          <a className="font-semibold mt-2">Operators</a>
        </Link>
        <Link href="https://developers.urbit.org" passHref>
          <a className="mt-2 mb-4">Developers</a>
        </Link>
        <hr className="border-wall-200" />
        {/* <ActiveLink
          currentPath={currentPath}
          className="mt-4 mr-5 mb-4"
          href="/manual"
        >
          Manual
        </ActiveLink>
        <ActiveLink
          currentPath={currentPath}
          className="mr-5 mb-4"
          href="/blog"
        >
          Blog
        </ActiveLink>
        <ActiveLink
          currentPath={currentPath}
          className="mr-5 mb-4"
          href="/events"
        >
          Events
        </ActiveLink>
        <ActiveLink
          currentPath={currentPath}
          className="mr-5 mb-4 text-green-400"
          href="/getting-started"
        >
          Get Started
        </ActiveLink>
        <ActiveLink currentPath={currentPath} className="mr-5 mb-4" href="/faq">
          FAQ
        </ActiveLink> */}
      </MenuTray>
    </header>
  );
}
