import * as React from "react";

const classes = require("./NavigationItems.module.css");
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/">Home</NavigationItem>
    <NavigationItem link="/about">About us</NavigationItem>
  </ul>
);

export default navigationItems;
