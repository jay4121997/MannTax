import React,{useState,useEffect} from "react";
import "./Footer.css";
import Logo from "../../components/Logo/Logo";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import axios from "axios";
const baseURL=process.env.REACT_APP_MY_URL


const Footer = (props) => {
  const [dbEmail, setDbEmail]=useState("")
  const [dbAddress, setDbAddress]=useState("")
  const [dbMapUrl, setDbMapUrl]=useState("")
  const [dbPhone, setDbPhone] = useState("")
  
  useEffect(() => {
    try {
      axios.get(`${baseURL}/contact.json`).then(
        (res) => {
          const data =res.data
          setDbAddress(data.address)
          setDbEmail(data.email)
          setDbMapUrl(data.mapurl)
          setDbPhone(data.number)
        }
      )
      .catch(e=>console.log(e))
    } catch (error) {
      console.error(error)
    }
  }, [])
  
  let year = new Date();


  return (
    <div className="body" >
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
                  {dbAddress}
                </a>
              </li>

              <li>
                <a href={`tel:${dbPhone}`}>{dbPhone}</a>
              </li>

              <li>
                <Link to="contact-us">{dbEmail}</Link>
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
                <a href={`tel:${dbPhone}`} className="icon FaPhoneAlt">
                  <FaPhoneAlt />
                </a>
              </li>

              <li>
                <a
                  href={`https://api.whatsapp.com/send?phone=${dbPhone}`}
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
