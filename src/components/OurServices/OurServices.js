import React from "react";
import SectionTitle from "../UI/SectionTitle//SectionTitle";
import classes from "./OurServices.module.css";
import ServiceCard from "../UI/ServiceCard/ServiceCard";
import ButtonLink from "../UI/ButtonLink/ButtonLink";

const OurServices = (props) => {
  return (
    <div>
      <SectionTitle title="Our Services"></SectionTitle>

      <div className={classes.servicesSection}>
        <div className={classes.card}>
          <p className={classes.title}>Your Business Matters.....</p>
          <p className={classes.text}>
            We have built an excellent reputation taking care of a wide variety
            of tax and accounting needs for our valued clients. Whether you need
            assistance with accounting, tax filings, business registration,
            business plan or something more complex, check out our list of
            specialties and get in touch to find out why so many businesses and
            individuals rely on us to manage their finances.
          </p>
          <br></br>
          <ButtonLink link="/services">Our Offerings...</ButtonLink>
        </div>
      </div>
      <div className={classes.padding}>
        <div className={classes.flexbox}>
          <div data-aos="fade-up">
            <ServiceCard
              color="color1"
              icon="FaUserFriends"
              title="PERSONAL TAX"
              text="Our advisors provide individualized services to help alleviate your financial uncertainty and stress. With many years of experience, our experts have the knowledge and expertise to handle any situation."
            />
          </div>
          <div data-aos="fade-up">
            <ServiceCard
              color="color2"
              icon="FaCity"
              title="CORPORATE TAX"
              text="No matter what type of financial situation you have, our team of experts will provide the best course of action. We serve clients in the greater San Francisco area with both individual and business needs."
            />
          </div>
          <div data-aos="fade-up">
            <ServiceCard
              color="color3"
              icon="FaHandHoldingUsd"
              title="ACCOUNTING"
              text="We stay up-to-date on all the regulatory and legislative developments so you don’t waste time and energy trying to make sense of all the accounting complexities. Contact us today and see how we can help you."
            />
          </div>
          <div data-aos="fade-up">
            <ServiceCard
              color="color4"
              icon="FaRoute"
              title="BUSINESS PLAN"
              text="We stay up-to-date on all the regulatory and legislative developments so you don’t waste time and energy trying to make sense of all the accounting complexities. Contact us today and see how we can help you."
            />
          </div>
          <div data-aos="fade-up">
            <ServiceCard
              color="color5"
              icon="FaSearchDollar"
              title="FREE OVERLOOK"
              text="We offer free look up services for our clients*. With this services we have happy  client base with extra missed $$$!!!
            Contact us to find out whether  you are eligible for this!!"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
