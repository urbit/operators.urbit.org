import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { MenuTray } from "@urbit/foundation-design-system";
import classnames from "classnames";

function ActiveLink({ children, href, className, currentPath }) {
  const activeClassName = classnames({
    "text-wall-600": href === currentPath,
    "text-wall-500": href !== currentPath,
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

      <nav className="hidden md:flex">
        <ActiveLink
          currentPath={currentPath}
          className="mr-4 type-ui"
          href="/manual"
        >
          Manual
        </ActiveLink>
        <ActiveLink
          currentPath={currentPath}
          className="mr-4 type-ui"
          href="/#urbit-ids"
        >
          Urbit IDs
        </ActiveLink>
        <ActiveLink
          currentPath={currentPath}
          className="mr-4 type-ui"
          href="/guides/star-buyers-guide"
        >
          Star Buyer's Guide
        </ActiveLink>
        <ActiveLink
          currentPath={currentPath}
          className="type-ui"
          href="/#node-operation"
        >
          Node Operation
        </ActiveLink>
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
          <a className="mt-2">Developers</a>
        </Link>
        <Link href="https://roadmap.urbit.org" passHref>
          <a className="mt-2 mb-4">Roadmap</a>
        </Link>
        <hr className="border-wall-200 mt-2 mb-4" />
        <ActiveLink
          currentPath={currentPath}
          className="mt-2 type-ui"
          href="/manual"
        >
          Manual
        </ActiveLink>
        <ActiveLink
          currentPath={currentPath}
          className="mt-2 type-ui"
          href="/#urbit-ids"
        >
          Urbit IDs
        </ActiveLink>

        <ActiveLink
          currentPath={currentPath}
          className="mt-2 type-ui"
          href="/guides/star-buyers-guide"
        >
          Star Buyer's Guide
        </ActiveLink>
        <ActiveLink
          currentPath={currentPath}
          className="mt-2 type-ui"
          href="/#node-operation"
        >
          Node Operation
        </ActiveLink>
      </MenuTray>
    </header>
  );
}
