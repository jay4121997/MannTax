import React, { useState,useEffect } from 'react'
import SectionTitle from '../../components/UI/SectionTitle/SectionTitle'
import classes from './ContactForm.module.css'
import axios from 'axios'

const baseURL=process.env.REACT_APP_MY_URL

const ContactForm = (props) => {
  const [dbEmail, setDbEmail]=useState("")
  const [dbAddress, setDbAddress]=useState("")
  const [dbMapUrl, setDbMapUrl]=useState("")
  const [dbPhone, setDbPhone]=useState("")
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState(number);
  const [encmessage, setEncMessage] = useState("");
  const [link, setLink] = useState("#");

  useEffect(() => {
    try {
      axios.get(`${baseURL}/contact.json`).then(
        (res) => {
          console.log('Receiving');
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
  },[])


  const onSubmitHandler = (event) => {
    event.preventDefault();
    document.location.href = link;
  };

  const onTextEncoding = (event) => {
    setMessage(event.target.value);
    let msg = message;
    let encsmg = encodeURI(msg);
    setEncMessage(encsmg);
    setLink(
      `mailto:${dbEmail}?subject=${subject}&body=Name%3A%20${name}%0AContact%20No%3A%20${number}%0A%0A ${encodeURI(
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
                  src={dbMapUrl}
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
                  <p>{dbAddress}</p>
                  <p>
                    <span className={classes.collig}>Phone :</span>{" "}
                    {dbPhone}
                  </p>
                  <p>
                    <span className={classes.collig}>E-mail :</span>{" "}
                    {dbEmail}
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
