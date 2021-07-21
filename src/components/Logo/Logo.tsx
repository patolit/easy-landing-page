import * as React from "react";

import RektLogo from "../../assets/images/rekt.png";
const classes = require("./Logo.module.css");

interface LogoProps {
  height?: string;
}

const logo = (props: LogoProps) => {
  const { height } = props;

  return (
    <div className={classes.Logo}>
      <img src={RektLogo} style={{ height: height }} alt="MyBurger" />
    </div>
  );
};
export default logo;
