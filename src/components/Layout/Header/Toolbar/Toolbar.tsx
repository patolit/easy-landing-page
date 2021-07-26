import * as React from "react";
import clsx from "clsx";

import Logo from "../../../Logo/Logo";
import NavigationItems from "./NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const classes = require("./Toolbar.module.scss");
const commonClasses = require("../../../common.module.scss");

interface ToolBarProps {
  drawerToggleClicked: () => void;
}

const Toolbar = (props: ToolBarProps) => {
  return (
    <section className={clsx(classes.Toolbar)}>
      <header className={clsx(classes.innerToolbar, commonClasses.inner)}>
        <Logo />
        <nav className={classes.DesktopOnly}>
          <NavigationItems />
        </nav>
        <DrawerToggle clicked={props.drawerToggleClicked} />
      </header>
    </section>
  );
};

export default Toolbar;
