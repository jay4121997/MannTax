import React from "react";
import "./Footer.css";
import Logo from "../../components/Logo/Logo";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const Footer = (props) => {
  let year = new Date();

  return (
    <div className="body" data-aos='fade-up'>
      <footer className="footer">
        <div className="footer__addr">
          <div className="footer__logo">
            <Logo width={window.innerWidth < 500 ? "50%" : "60%"} />
          </div>
        </div>

        <ul className="footer__nav">
          <li className="nav__item">
            <h2 className="nav__title">Contact Details</h2>

            <ul className="nav__ul">
              <li>
                <a
                  href="https://www.google.com/maps?ll=43.788064,-79.258725&z=17&t=m&hl=en&gl=CA&mapclient=embed&q=360+Pitfield+Rd+Scarborough,+ON+M1S+2V9"
                  target="blank"
                >
                  360 Pitfield Road, Scaborough, ON M1S 3E6
                </a>
              </li>

              <li>
                <a href="tel:+16477742131">+1(647)-774-2131</a>
              </li>

              <li>
                <Link to="contact-us">dinakesaria@gmail.com</Link>
              </li>
            </ul>
          </li>

          <li className="nav__item">
            <h2 className="nav__title">Links</h2>

            <ul className="nav__ul">
              <li>
                <Link to="about">About</Link>
              </li>

              <li>
                <Link to="services">Services</Link>
              </li>

              <li>
                <Link to="document-checklist">Document Checklist</Link>
              </li>

              <li>
                <Link to="know-more">Forms</Link>
              </li>
            </ul>
          </li>

          <li className="nav__item">
            <h2 className="nav__title">Quick Connect</h2>

            <ul className="nav__ul">
              <li>
                <a href="tel:+16477742131" className="icon FaPhoneAlt">
                  <FaPhoneAlt />
                </a>
              </li>

              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=16477742131"
                  target="blank"
                  className="icon FaWhatsapp"
                >
                  <FaWhatsapp />
                </a>
              </li>
            </ul>
          </li>
        </ul>
        
        <div className="legal">
        <br />
          <p>&copy; {year.getFullYear()} by M.K. Tax. All rights reserved.</p>

          {/* <div className="legal__links">
            <span>
              Made with <span className="heart">♥</span>
            </span>
          </div> */}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
