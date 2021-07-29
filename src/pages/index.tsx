import * as React from "react";

import { Layout } from "../components/Layout/Layout";
import { MainArticleSection } from "../components/MainArticleSection/MainArticleSection";
import { FeatureSection } from "../components/FeaturesSection/FeaturesSection";
import { TestimonialsSection } from "../components/TestimonialsSection/TestimonialsSection";

function IndexPage() {
  return (
    <Layout pageTitle="Home Page">
      <MainArticleSection />
      <FeatureSection />
      <TestimonialsSection />
    </Layout>
  );
}
export default IndexPage;
