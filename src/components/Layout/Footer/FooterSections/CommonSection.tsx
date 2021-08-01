import clsx from "clsx";
import * as React from "react";
import { ReactNode } from "react";

const classes = require("./CommonSection.module.scss");

interface CommonSectionProps {
  className?: string;
  sectionTitle: string;
  children: ReactNode;
}

function CommonSection(props: CommonSectionProps) {
  const { className, sectionTitle, children } = props;
  return (
    <div className={clsx(className, classes.common)}>
      <h2>{sectionTitle}</h2>
      {children}
    </div>
  );
}

export { CommonSection };
