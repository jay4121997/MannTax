import React, { useState, useEffect } from "react";
import classes from "./ContactUs.module.css";
import SectionTitle from "../../components/UI/SectionTitle/SectionTitle";
import ContactForm from "../../components/ContactForm/ContactForm";
const ContactUs = (props) => {
  useEffect(() => {
    window.scroll(0, 0);
    document.title = "Contact Us | MANN TAX AND ACCOUNTING ";
  }, []);

  
  return (
    <div>
      <section data-aos='fade-up'>
        <ContactForm />
      </section>
      <section className={classes.hours} data-aos='fade-up'>
        <SectionTitle title="Hours Of Operation" />
        <div className={classes.box}>
          <div>
            <ul className={classes.times}>
              <li>
                <b>Mon - Sat:</b> 8.00 am - 10.00 pm (February 01 to May 15)
              </li>
              <li>
                <b> Sun:</b> 9.00 am - 9.00 pm (February 01 to May 15)
              </li>
              <br />
              <br />
              <li>
                <center>
                  <b>Regular hours (all year around)</b>
                </center>
                <br />
              </li>
              <li>
                <b>Mon-Fri:</b> 10.00 am - 9.00 pm
              </li>
              <li>
                <b>Sun:</b> 11.00 am - 6.00 pm
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
