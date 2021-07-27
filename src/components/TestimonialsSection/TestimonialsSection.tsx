import * as React from "react";
import clsx from "clsx";
import { TestimonialCard } from "./TestimonialCard/TestimonialCard";
const commonClasses = require("../common.module.scss");
const classes = require("./TestimonialsSection.module.scss");

function TestimonialsSection() {
  return (
    <section
      className={clsx(commonClasses.section, classes.testimonialsSection)}
    >
      <div className={commonClasses.inner}>
        <h2 className={commonClasses.title}>Testimonials</h2>
        <p className={commonClasses.subtitle}>
          Aliquam malesuada ligula eget est fringilla blandit. Integer finibus
          semper libero id sodales.
        </p>
        <div className={classes.list}>
          <TestimonialCard
            text="Vestibulum a nunc ut eros condimentum posuere. Nullam dapibus quis nunc non interdum. Pellentesque tortor ligula, gravida ac commodo eu."
            authorImageUrl="https://themes.stackbit.com/demos/azimuth/images/review1.jpg"
            authorName="Eric Widget"
            className={classes.item}
          ></TestimonialCard>

          <TestimonialCard
            text="Sed laoreet magna commodo libero euismod sodales. Nunc ac libero convallis, interdum ligula vel, pretium diam. Integer commodo sem at dui sollicitudin, vel posuere justo laoreet."
            authorImageUrl="https://themes.stackbit.com/demos/azimuth/images/review2.jpg"
            authorName="Parsley Montana"
            className={classes.item}
          ></TestimonialCard>

          <TestimonialCard
            text="Integer consectetur purus neque, ac porttitor enim convallis vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus."
            authorImageUrl="https://themes.stackbit.com/demos/azimuth/images/review3.jpg"
            authorName="Jonquil Von Haggerston"
            className={classes.item}
          ></TestimonialCard>
        </div>
      </div>
    </section>
  );
}

export { TestimonialsSection };
