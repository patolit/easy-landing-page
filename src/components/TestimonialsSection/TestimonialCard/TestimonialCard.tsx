import * as React from "react";
import clsx from "clsx";
const classes = require("./TestimonialCard.module.scss");

interface TestimonialCardProps {
  text: string;
  authorImageUrl: string;
  authorName: string;
  className?: string;
}

function TestimonialCard(props: TestimonialCardProps) {
  const { text, authorImageUrl, authorName, className } = props;
  return (
    <div className={clsx(classes.root, className)}>
      <p className={classes.text}>{text}</p>
      <div className={classes.author}>
        <img className={classes.authorImage} src={authorImageUrl} />
        <span className={classes.authorName}>{authorName}</span>
      </div>
    </div>
  );
}

export { TestimonialCard };
