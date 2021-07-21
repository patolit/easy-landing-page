import { ReactNode } from "react";
import * as React from "react";
import { Link } from "gatsby";

const classes = require("./NavigationItem.module.css");

interface NavigationItemProps {
  link: string;
  children: ReactNode;
}

const navigationItem = (props: NavigationItemProps) => {
  const { link, children } = props;

  return (
    <li className={classes.NavigationItem}>
      <Link to={link} activeClassName={classes.active}>
        {children}
      </Link>
    </li>
  );
};

export default navigationItem;
