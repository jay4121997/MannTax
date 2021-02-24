import React, { useEffect } from "react";
import classes from "./Checklist.module.css";
import SectionTitle from "../../components/UI/SectionTitle/SectionTitle";
import ServiceCard from "../../components/UI/ServiceCard/ServiceCard";

const Checklist = (props) => {
  useEffect(() => {
    window.scroll(0, 0);
    document.title = "Document Checklist | MANN TAX AND ACCOUNTING ";
  }, []);

  return (
    <div className={classes.padding}>
      <div style={{ marginTop: "90px" }}></div>
      <SectionTitle title="What to provide" />
      <div className={classes.flexbox}>
        <div data-aos="fade-up">
          <ServiceCard
            title="Personal Identification"
            documentList={[
              "Any Photo ID",
              "Full Mailing Address",
              "Marital Status",
              "Contact Number",
              "Email",
            ]}
            color="color1"
          />
        </div>
        <div data-aos="fade-up">
          <ServiceCard
            title="Relevant Income Slips"
            documentList={[
              "T4",
              "T4A",
              "T3",
              "T5",
              "T4E",
              "T4RSP",
              "T5007",
              "Others",
            ]}
            color="color2"
          />
        </div>
        <div data-aos="fade-up">
          <ServiceCard
            title="Tax Credit Slips/documents"
            documentList={[
              "T2202",
              "Charitable Donations",
              "Medical Expenses",
              "Others",
            ]}
            color="color3"
          />
        </div>
        <div data-aos="fade-up">
          <ServiceCard
            title="Tax Deduction slips/details"
            documentList={[
              "RRSP contribution",
              "Union Dues",
              "Moving Expenses",
            ]}
            color="color3"
          />
        </div>
        <div data-aos="fade-up">
          <ServiceCard
            title="Details regarding Dependant"
            documentList={["Full Name", "Date Of Birth", "SIN"]}
            color="color2"
          />
        </div>
        <div data-aos="fade-up">
          <ServiceCard
            title="Business Related Information"
            documentList={[
              "Business Income Summary",
              "Business expenses Details",
            ]}
            color="color1"
          />
        </div>
      </div>
    </div>
  );
};

export default Checklist;
