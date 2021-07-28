import * as React from "react";

const classes = require("./SubscribeSection.module.scss");

interface SubscribeSectionnProps {
  className?: string;
}

function SubscribeSection(props: SubscribeSectionnProps) {
  const { className } = props;
  return (
    <div className={className}>
      <h2>Subscribe</h2>
      <div>Some links to other things </div>
    </div>
  );
}

export { SubscribeSection };
