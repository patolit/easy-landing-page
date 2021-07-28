import * as React from "react";
import clsx from "clsx";
//import RektLogo from "../../assets/images/rekt.png";
import RektLogo from "../../assets/images/logo.svg";
const classes = require("./Logo.module.css");

interface LogoProps {
  height?: string;
  className?: string;
}

const logo = (props: LogoProps) => {
  const { height, className } = props;

  return (
    <img
      src={RektLogo}
      className={clsx(classes.Logo, className)}
      style={{ height: height }}
      alt="MyLogo"
    />
  );
};
export default logo;
