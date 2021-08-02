import * as React from "react";
import clsx from "clsx";
import emailjs from "emailjs-com";

const classes = require("./ContactUsForm.module.scss");
const commonClasses = require("../common.module.scss");

const ContactUsForm = () => {
  function sendEmail(e: any): void {
    e.preventDefault();

    emailjs
      .sendForm(
        "Tab Control SMTP",
        "contact_form",
        e.target,
        "user_4jchLuycWRUfYt1t5ZATw"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <section className={clsx(commonClasses.section)}>
      <div
        className={clsx(
          commonClasses.inner,
          commonClasses.mainSection,
          classes.commonPage
        )}
      >
        <h1 className={clsx(commonClasses.title, classes.title)}>Contact Us</h1>
        <p className={clsx(commonClasses.subtitle, classes.subtitle)}>
          Send us your information and the subject of your inquire so we can
          contact you.
        </p>
        <form className={classes.contactForm} onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" />
          <label>Name</label>
          <input type="text" name="from_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <div className={classes.submitButton}>
            <input type="submit" value="Send" />
          </div>
        </form>
      </div>
    </section>
  );
};

export { ContactUsForm };
