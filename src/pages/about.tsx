import * as React from "react";

import { Layout } from "../components/Layout/Layout";

const classes = require("./base.module.scss");
const commonClasses = require("../components/common.module.scss");

function AboutMe() {
  return (
    <Layout pageTitle="About">
      <section className={commonClasses.section}>
        <div className={commonClasses.inner}>
          <h1>About me</h1>
          <p> HI there </p>
        </div>
      </section>
    </Layout>
  );
}

export default AboutMe;
