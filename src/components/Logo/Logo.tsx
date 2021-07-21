import * as React from "react";

import RektLogo from "../../assets/images/rekt.png";
const classes = require("./Logo.module.css");

interface LogoProps {
  height?: string;
}

const logo = (props: LogoProps) => {
  const { height } = props;

  return (
    <img
      src={RektLogo}
      className={classes.Logo}
      style={{ height: height }}
      alt="MyLogo"
    />
  );
};
export default logo;
