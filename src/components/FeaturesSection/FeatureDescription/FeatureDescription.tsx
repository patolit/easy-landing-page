import * as React from "react";
import { Link } from "gatsby";

const classes = require("./FeatureDescription.module.scss");

interface FeatureDescriptionProps {
  featureImage: string;
  featureTitle: string;
  featureText: string;
  featurePage: string;
  className?: string;
}

const FeatureDescription = (props: FeatureDescriptionProps) => {
  const { featureImage, featureTitle, featureText, featurePage, className } =
    props;

  return (
    <div className={className}>
      <img className={classes.featureImage} src={featureImage} />
      <div className={classes.content}>
        <h3 className={classes.title}>{featureTitle}</h3>
        <p className={classes.text}>{featureText}</p>
        <div className={classes.buttonBlock}>
          <Link to={featurePage} className={classes.button}>
            Learn More...
          </Link>
        </div>
      </div>
    </div>
  );
};

export { FeatureDescription };
