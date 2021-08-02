import * as React from "react";

import { Layout } from "../components/Layout/Layout";

import { ContactUsForm } from "../components/ContactUsForm/ContactUsForm";

const classes = require("./base.module.scss");
const commonClasses = require("../components/common.module.scss");

function ContactUs() {
  return (
    <Layout pageTitle="Contact Us">
      <ContactUsForm />
    </Layout>
  );
}

export default ContactUs;
