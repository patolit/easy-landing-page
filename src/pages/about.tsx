import * as React from "react";

import { Layout } from "../components/Layout/Layout";

const classes = require("./base.module.scss");

function AboutMe() {
  return (
    <Layout pageTitle="About">
      <h1>About me</h1>
      <p> HI there </p>
    </Layout>
  );
}

export default AboutMe;
