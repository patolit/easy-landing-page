import * as React from "react";

const classes = require("./CommonSection.module.scss");

interface CommonSectionProps {
  className?: string;
  sectionTitle: string;
}

function CommonSection(props: CommonSectionProps) {
  const { className, sectionTitle } = props;
  return (
    <div className={className}>
      <h2>{sectionTitle}</h2>
      <div>Some links to other things </div>
    </div>
  );
}

export { CommonSection };
