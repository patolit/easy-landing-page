import * as React from "react";

import { Layout } from "../components/Layout/Layout";
import { MainArticleSection } from "../components/MainArticleSection/MainArticleSection";
import { FeatureSection } from "../components/FeaturesSection/FeaturesSection";
import { TestimonialSection } from "../components/TestimonialsSection/TestimonialSection";

const classes = require("./base.module.css");

function IndexPage() {
  return (
    <Layout pageTitle="Home Page">
      <MainArticleSection />
      <FeatureSection />
      <TestimonialSection />
    </Layout>
  );
}
export default IndexPage;
