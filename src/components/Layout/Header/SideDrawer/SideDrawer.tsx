import * as React from "react";
import Backdrop from "../../../Backdrop/Backdrop";

import Logo from "../../../Logo/Logo";
import NavigationItems from "../Toolbar/NavigationItems/NavigationItems";
const classes = require("./SideDrawer.module.scss");

interface SideDrawerProps {
  open: boolean;
  close: () => void;
}

const SideDrawer = (props: SideDrawerProps) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <>
      <Backdrop show={props.open} clicked={props.close} />
      <div className={attachedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  );
};

export default SideDrawer;
