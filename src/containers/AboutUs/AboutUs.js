import React, { useEffect } from "react";
import classes from "./AboutUs.module.css";

const AboutUs = (props) => {
  useEffect(() => {
    window.scroll(0, 0);
    document.title="About Us | MANN TAX AND ACCOUNTING "
  }, []);

  return (
    <div data-aos='fade-up'>
      <div className={classes.aboutus}>
        <div className={classes.content}>
          <h1 className={classes.title}>Who We Are...</h1>
          <p>
            Connect with us and feel the difference from experience, expertise
            and best client services. I, Dina Kesaria, founder and Director of
            Mann Tax And Accounting Solutions Inc. have 23 years of experience
            in Taxation, Book keeping and Accounting, Tutoring in Accounting and
            Auditing government bodies.
            <br />
            <br /> I have been serving in Taxation, Bookkeeping, Accounting,
            Payroll, HST registration and filing services, Business registration
            and filing services and Business plans. I am available all year
            around and happy to assist in any area of services offered. I can be
            reached at 647-774-2131 via direct call or whatsapp or/and email as
            provided. Be a part of journey of success and let us focus on your
            book keeping, accounting and taxation issues so you can concentrate
            on your business growth and development
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
