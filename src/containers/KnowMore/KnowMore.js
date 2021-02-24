import React, { useEffect } from "react";
import SectionTitle from "../../components/UI/SectionTitle/SectionTitle";
import classes from "./KnowMore.module.css";
import RentReceipt from "../../asserts/RENT_RECEIPT.docx";

const KnowMore = () => {
  useEffect(() => {
    window.scroll(0, 0);
    document.title="Know More | MANN TAX AND ACCOUNTING "
  }, []);

  return (
    <div data-aos='fade-up'>
      <SectionTitle title="Document Samples" />
      <div style={{ marginTop: "100px" }}></div>
      <div className={[classes.link, classes.one].join(" ")}>
        <a
          href="https://4339dede-c426-4131-a21e-d7b96d3763c3.filesusr.com/ugd/74d3f8_90c005186c6543d49cb2f55fe5e3dd8b.pdf"
          target="blank"
        >
          T-Slips
        </a>
      </div>
      <div className={[classes.link, classes.two].join(" ")}>
        <a href={RentReceipt} download="Rent Receipt.docx">
          Rent Receipt
        </a>
      </div>
    </div>
  );
};

export default KnowMore;
