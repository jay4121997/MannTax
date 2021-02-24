import React, { useEffect } from "react";
// import classes from "./Services.module.css";
import ServicesCard from "../../components/UI/Services/ServicesCard";
import personalTax from "../../asserts/personalTax.jpg";
import corporateTax from "../../asserts/corporateTax.jpg";
import accountService from "../../asserts/accountService.jpg";
import businessRegistration from "../../asserts/businessRegistration.jpg";
import plan from "../../asserts/plan.jpg";

const Services = (props) => {
  useEffect(() => {
    window.scroll(0, 0);
    document.title = "Our Services | MANN TAX AND ACCOUNTING ";
  }, []);

  return (
    <div>
      <div style={{ marginTop: "100px" }}></div>
      <div data-aos='fade-up'>
        <ServicesCard
          url={personalTax}
          title="PERSONAL TAX RETURN-T1 FILING"
          subtitle="Saving You Money"
          text="We provide individualized
              services to help alleviate your financial uncertainty and stress.
              With many years of experience, we have the knowledge and expertise
              to handle any situation. We are experienced in filing all types of
              tax return including:"
          list={[
            "Employed, Unemployed or Self Employed Individuals",
            "New Immigrants Return",
            "Capital Gain/Loss",
            "Non resident",
            "Truck and Transportation/Long Haul Drivers",
            "Taxi Drivers/ Partners",
            "Ride Sharing Partners (Uber, Lyft etc.)",
            "HST Filing",
            "Foreign Income",
            "Rental Income",
            "Adjustments to Prior Filed Returns",
            "Missed Returns for Previous Years",
            "Seniors",
          ]}
        />
      </div>
      <div data-aos="fade-up">
        <ServicesCard
          alt
          url={corporateTax}
          title="CORPORATE TAX RETURN-T2 FILING"
          subtitle="Alleviating Stress"
          text="All resident corporations in Canada need to file a 
        corporation income tax (T2) return every tax year 
        even if there is no tax payable or corporation is inactive. 
        Our professional services will be assisting to file corporation tax return in timely manner. 
        We are experienced in: "
          list={[
            "HST Filing for corporation",
            "WSIB Remittances",
            "Payroll Remittances",
            "T Slip Preparation and Submission",
            "Corporate Tax-T2 Filing",
          ]}
        />
      </div>
      <div data-aos="fade-up">
        <ServicesCard
          url={accountService}
          title="ACCOUNTING SERVICES"
          subtitle="Enabling Growth"
          text="We stay up-to-date on all the regulatory and legislative developments 
        so you don’t waste time and energy trying to make sense of all the accounting complexities. 
        We can look after:"
          list={[
            "Day to Day Book Keeping Needs",
            "Payroll Services",
            "WSIB, HST Remittances",
            "Year End Accounting ",
            "Year End Corporate Tax Filing",
          ]}
        />
      </div>
      <div data-aos="fade-up">
        <ServicesCard
          alt
          url={businessRegistration}
          title="BUSINESS REGISTRATION"
          subtitle="Enabling Growth"
          text="Having your business registered gives you an unique identity and by having corporation registration, 
        your business gets a separate legal entity. We help in: "
          list={[
            "Business Name Registration",
            "Business Number Registration",
            "Corporation Registration",
            "HST Registration",
          ]}
        />
      </div>
      <div data-aos="fade-up">
        <ServicesCard
          url={plan}
          title="BUSINESS PLAN"
          subtitle="Saving You Money"
          text="Business Plan is a road map which outlines major activities and goals of your business.  A professionally developed business plan helps to get bank loans and  
        grants as it sets out exactly how your business will achieve the targeted goals.Our business plan covers:"
          list={[
            "Location Analysis",
            "Market Analysis",
            "Financial Projections",
            "Business Growth Projection and Demonstration",
          ]}
        />
      </div>
    </div>
  );
};

export default Services;
