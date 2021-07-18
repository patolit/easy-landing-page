import * as React from "react";
import { Link } from "gatsby";
import { ReactNode } from "react";

interface LayoutProps {
  pageTitle: string;
  children: ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { pageTitle, children } = props;

  return (
    <main>
      <title>{pageTitle}</title>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <h1>{pageTitle}</h1>
      {children}
    </main>
  );
};

export { Layout };
