import * as React from "react";
import clsx from "clsx";
import { Link } from "gatsby";

const classes = require("./CommonPage.module.scss");
const commonClasses = require("../common.module.scss");

interface CommonPageProps {
  image: string;
  title: string;
  text: string;
  subtitle?: string;
  className?: string;
}

const CommonPage = (props: CommonPageProps) => {
  const { image, title, text, subtitle, className } = props;

  return (
    <section className={clsx(commonClasses.section, className)}>
      <div
        className={clsx(
          commonClasses.inner,
          commonClasses.mainSection,
          classes.commonPage
        )}
      >
        <h1 className={clsx(commonClasses.title, classes.title)}>{title}</h1>
        <p className={clsx(commonClasses.subtitle, classes.subtitle)}>
          {subtitle}
        </p>
        <img className={classes.image} src={image} />
        <p className={classes.mainText}>{text}</p>
      </div>
    </section>
  );
};

export { CommonPage };
