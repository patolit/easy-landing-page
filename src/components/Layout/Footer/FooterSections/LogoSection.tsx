import * as React from "react";
import clsx from "clsx";

const classes = require("./LogoSection.module.scss");
import Logo from "../../../Logo/Logo";

interface LogoSectionProps {
  className?: string;
}

function LogoSection(props: LogoSectionProps) {
  const { className } = props;
  return (
    <div className={clsx(className, classes.logo)}>
      <Logo />
      <p>This is a demo</p>
    </div>
  );
}

export { LogoSection };
