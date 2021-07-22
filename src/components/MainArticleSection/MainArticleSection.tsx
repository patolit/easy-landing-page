import * as React from "react";

import HeroIMage from "../../assets/images/hero.png";

const classes = require("./MainArticleSection.module.css");

const MainArticleSection = () => {
  return (
    <div className={classes.mainHero}>
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
  );
};

export { MainArticleSection };
