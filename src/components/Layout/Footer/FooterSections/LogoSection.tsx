import * as React from "react";

const classes = require("./LogoSection.module.scss");
import Logo from "../../../Logo/Logo";

interface LogoSectionProps {
  className?: string;
}

function LogoSection(props: LogoSectionProps) {
  const { className } = props;
  return (
    <div className={className}>
      <Logo />
      <p>This is a DEMO</p>
    </div>
  );
}

export { LogoSection };
