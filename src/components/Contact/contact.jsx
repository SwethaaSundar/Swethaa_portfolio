import { Component } from "react";
import "./contact.css";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";

class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <div className="contact-container">
          <div className="contact-heading">
            <h1>Contact</h1>
          </div>
          <div className="contact-infos">
            <div className="contact-info">
              <div className="contact-item">
                <h1>Phone</h1>
                <h2>
                  <a href="tel:+4915168732738" className="link">
                    +49 151 6873 2738
                  </a>
                </h2>
              </div>
            </div>
            <div className="contact-info">
              <div className="contact-item">
                <h1>Email</h1>
                <h2>
                  <a href="mailto:swethaasundar@gmail.com" className="link">
                    swethaasundar@gmail.com
                  </a>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
