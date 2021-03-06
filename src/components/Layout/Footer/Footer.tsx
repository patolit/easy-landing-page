import * as React from "react";
import clsx from "clsx";

import { CommonSection } from "./FooterSections/CommonSection";
import { SubscribeSection } from "./FooterSections/SubscribeSection";
import { LogoSection } from "./FooterSections/LogoSection";
import { Link } from "gatsby";

const classes = require("./Footer.module.scss");
const commonClasses = require("../../common.module.scss");

function Footer() {
  return (
    <footer className={clsx(classes.footer, commonClasses.section)}>
      <div className={clsx(classes.top)}>
        <div className={clsx(classes.innerFooter, commonClasses.inner)}>
          <LogoSection />
          <CommonSection
            sectionTitle={"Company"}
            className={classes.footerElement}
          >
            <Link to="/about">About Us</Link>
            <Link to="/contactUs">Contact Us</Link>
          </CommonSection>
          <CommonSection
            sectionTitle={"Community"}
            className={classes.footerElement}
          >
            <div>Space</div>
          </CommonSection>
          <SubscribeSection className={classes.footerElement} />
        </div>
      </div>
      <div className={clsx(classes.bottom, classes.outer)}>
        <div className={commonClasses.inner}>
          Terms of Service Privacy Policy © Stackbit. All rights reserved. This
          Jamstack site was created with Stackbit . Create yours now .
        </div>
      </div>
    </footer>
  );
}

export { Footer };
