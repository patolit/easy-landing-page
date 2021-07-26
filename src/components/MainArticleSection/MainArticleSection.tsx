import * as React from "react";
import clsx from "clsx";

import HeroIMage from "../../assets/images/hero.png";

const classes = require("./MainArticleSection.module.scss");
const commonClasses = require("../common.module.scss");

const MainArticleSection = () => {
  return (
    <section className={clsx(commonClasses.section, classes.mainSection)}>
      <div className={clsx(classes.mainHero, commonClasses.inner)}>
        <img className={classes.image} src={HeroIMage} />
        <div className={classes.content}>
          <h2>This Is A Big Hero Headline </h2>
          <div>
            Azimuth is the perfect theme for developers, designers and
            entrepreneurs who need a sleek, modern SaaS site.{" "}
          </div>
          <button className={classes.button}> Learn More</button>
        </div>
      </div>
    </section>
  );
};

export { MainArticleSection };
