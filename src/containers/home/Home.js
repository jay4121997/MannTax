import React, { useEffect } from "react";
import classes from "./Home.module.css";
import SectionTitle from "../../components/UI/SectionTitle/SectionTitle";
import AboutUs from "../../components/AboutUs/AboutUs";
import OurServices from "../../components/OurServices/OurServices";
import ContactForm from "../../components/ContactForm/ContactForm";

const Home = (props) => {
  useEffect(() => {
    document.title = "Home | MANN TAX AND ACCOUNTING ";
    setTimeout(() => {
      window.scroll(0, 0);
    }, 100);
  }, []);
  return (
    <React.Fragment>
      <div className={classes.image_container} data-aos="zoom-in-down">
        <div className={classes.text}>MANN TAX AND ACCOUNTING</div>
      </div>

      <div data-aos="fade-up">
        <SectionTitle title="About Us"></SectionTitle>
        <AboutUs />
      </div>
      <div data-aos="fade-up">
        <OurServices />
      </div>
      <div data-aos="fade-up">
        <ContactForm />
      </div>
    </React.Fragment>
  );
};

export default Home;
