import * as React from "react";
import { useState } from "react";
import { ReactNode } from "react";
import Toolbar from "./Navigation/Toolbar/Toolbar";
import SideDrawer from "./Navigation/SideDrawer/SideDrawer";
import { Footer } from "./Footer/Footer";

import { Helmet } from "react-helmet";
//import styles from "./layout.module.css";
const styles = require("./layout.module.css");
const base = require("../../pages/base.module.css");

interface LayoutProps {
  pageTitle: string;
  children: ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { pageTitle, children } = props;
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    const updatedState = !showSideDrawer;
    setShowSideDrawer(updatedState);
  };

  return (
    <div className={base.root}>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <Toolbar drawerToggleClicked={sideDrawerToggleHandler} />
      <SideDrawer open={showSideDrawer} close={sideDrawerClosedHandler} />
      <main className={base.main}>{children}</main>
      <Footer />
    </div>
  );
};

export { Layout };
