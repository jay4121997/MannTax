import React, { useState } from 'react'
import SectionTitle from '../../components/UI/SectionTitle/SectionTitle'
import classes from './ContactForm.module.css'

const ContactForm = (props) => {
    const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState(number);
  const [encmessage, setEncMessage] = useState("");
  const [link, setLink] = useState("#");
  const onSubmitHandler = (event) => {
    event.preventDefault();
    document.location.href = link;
  };

  const onTextEncoding = (event) => {
    setMessage(event.target.value);
    let msg = message;
    let encsmg = encodeURI(msg);
    console.log("Msg", message);
    console.log("EncMsg", encsmg);
    setEncMessage(encsmg);
    setLink(
      `mailto:dinakesaria@gmail.com?subject=${subject}&body=Name%3A%20${name}%0AContact%20No%3A%20${number}%0A%0A ${encodeURI(
        event.target.value
      )}`
    );
  };
  
    return (
        <div>
                  <div className={classes.container}>
        <div className={classes.innerwrap}>
          <section className={[classes.section1, classes.clearfix].join(" ")}>
            <SectionTitle title="Get in touch" />
          </section>
          <section className={[classes.section2, classes.clearfix].join(" ")}>
            <div
              className={[classes.col2, classes.column1, classes.first].join(
                " "
              )}
            >
              <div>
                <iframe
                  title="Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.308621601586!2d-79.26054638462888!3d43.78720867911686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d10fae38eb8b%3A0x2d6d204e1437c3d1!2s360%20Pitfield%20Rd%2C%20Scarborough%2C%20ON!5e0!3m2!1sen!2sca!4v1612931197404!5m2!1sen!2sca"
                  frameBorder="0"
                  style={{ border: "0" }}
                  allowFullScreen
                  aria-hidden="false"
                  height={window.innerWidth < 960 ? "400px" : "550px"}
                  width="100%"
                  tabIndex="0"
                ></iframe>
              </div>
            </div>
            <div
              className={[classes.col2, classes.column2, classes.last].join(
                " "
              )}
            >
              <div className={classes.sec2innercont}>
                <div className={classes.sec2addr}>
                  <p>360 Pitfield Road, Scaborough, ON M1S 3E6</p>
                  <p>
                    <span className={classes.collig}>Phone :</span>{" "}
                    +1(647)-774-2131
                  </p>
                  <p>
                    <span className={classes.collig}>E-mail :</span>{" "}
                    dinakesaria@gmail.com
                  </p>
                </div>
              </div>
              <div className={classes.sec2contactform}>
                <h3 className={classes.sec2frmtitle}>
                  How Can We Help???
                </h3>
                <form onSubmit={onSubmitHandler}>
                  <div className={classes.clearfix}>
                    <input
                      required
                      className={[classes.col2, classes.first].join(" ")}
                      type="text"
                      placeholder="Full Name"
                      value={name}
                      onChange={(event) => {
                        setLink(
                          `mailto:dinakesaria@gmail.com?subject=${subject}&body=Name%3A%20${event.target.value}%0AContact%20No%3A%20${number}%0A%0A ${encmessage}`
                        );
                        return setName(event.target.value);
                      }}
                    />
                    <input
                      required
                      className={[classes.col2, classes.last].join(" ")}
                      type="text"
                      placeholder="Subject"
                      value={subject}
                      onChange={(event) => {
                        setLink(
                          `mailto:dinakesaria@gmail.com?subject=${event.target.value}&body=Name%3A%20${name}%0AContact%20No%3A%20${number}%0A%0A ${encmessage}`
                        );
                        return setSubject(event.target.value);
                      }}
                    />
                  </div>
                  <div className={classes.clearfix}>
                    <input
                      required
                      className={[classes.col2, classes.first].join(" ")}
                      type="Email"
                      placeholder="Email"
                      value={email}
                      onChange={(event) => {
                        setLink(
                          `mailto:dinakesaria@gmail.com?subject=${subject}&body=Name%3A%20${name}%0AContact%20No%3A%20${number}%0A%0A ${encmessage}`
                        );
                        return setEmail(event.target.value);
                      }}
                    />
                    <input
                      required
                      className={[classes.col2, classes.last].join(" ")}
                      type="text"
                      placeholder="Contact Number"
                      value={number}
                      onChange={(event) => {
                        setLink(
                          `mailto:dinakesaria@gmail.com?subject=${subject}&body=Name%3A%20${name}%0AContact%20No%3A%20${event.target.value}%0A%0A ${encmessage}`
                        );
                        return setNumber(event.target.value);
                      }}
                    />
                  </div>
                  <div className={classes.clearfix}>
                    <textarea
                      required
                      name="textarea"
                      id=""
                      cols="30"
                      rows="7"
                      placeholder="Your message here..."
                      value={message}
                      onChange={onTextEncoding}
                    ></textarea>
                  </div>
                  <div className={classes.clearfix}>
                    <input type="submit" value="Send" />
                    {/* <a href={link} onClick={formCheck}>
                      Email Us
                    </a> */}
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
        </div>
    )
}

export default ContactForm
