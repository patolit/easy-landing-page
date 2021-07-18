import * as React from "react";
import { Footer } from "../components/footer";

import { Layout } from "../components/layout";

function AboutMe() {
  return (
    <Layout pageTitle="About">
      <h1>About me</h1>
      <p> HI there </p>
      <Footer/>
    </Layout>
  );
}

export default AboutMe;
