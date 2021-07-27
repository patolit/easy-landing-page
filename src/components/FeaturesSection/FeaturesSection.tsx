import * as React from "react";
import clsx from "clsx";
import { FeatureDescription } from "./FeatureDescription/FeatureDescription";

const classes = require("./FeaturesSection.module.scss");
const commonClasses = require("../common.module.scss");

const FeatureSection = () => {
  return (
    <section className={clsx(classes.featuresSection, commonClasses.section)}>
      <div className={clsx(classes.featuresInnerSection, commonClasses.inner)}>
        <h2 className={commonClasses.title}>Features</h2>
        <p className={commonClasses.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a
          metus quis lorem malesuada luctus.
        </p>
        <div className={classes.list}>
          <FeatureDescription
            featureImage="https://themes.stackbit.com/demos/azimuth/images/feature1.png"
            featureTitle="The Best Feature of Your Services"
            featureText="Nam pulvinar ante eu ultricies volutpat. Aenean hendrerit, eros sed aliquet luctus, lorem risus volutpat dolor, nec dignissim diam neque consequat ex."
            featurePage="/"
            className={classes.item}
          />
          <FeatureDescription
            featureImage="https://themes.stackbit.com/demos/azimuth/images/feature2.png"
            featureTitle="Awesome Feature of Your Services"
            featureText="Etiam vel urna sed massa egestas vulputate eu a velit. Sed ut nisl nec sapien interdum luctus. Cras rhoncus condimentum metus sit amet auctor."
            featurePage="/"
            className={classes.item}
          />
        </div>
      </div>
    </section>
  );
};

export { FeatureSection };
