import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Contact.css";

class Contact extends React.Component {
  render() {
    return (
      <div class="animate__animated animate__wobble">
        <div className="contact-card">
          <div className="contact-card-title">
            <h4>C O N T A C T</h4>
          </div>

          <div className="contact-card-content">
            <div className="contact-card-center">
              <div className="contact-card-right">
                <h3 className="contact-card-right-email">
                  tk.engineer@google.com
                </h3>
              </div>
              <div className="contact-card-logos">
                <a href="https://github.com/tomo-0131" className="git">
                  <FontAwesomeIcon icon={["fab", "github-square"]} size={"3x"} className="logos" /> </a>
                <a href="https://twitter.com/tk_engineers" className="twitter" >
                  <FontAwesomeIcon icon={["fab", "twitter-square"]} size={"3x"} className="logos" /> </a>
                <a href="https://twitter.com/tk_engineers" className="facebook" >
                  <FontAwesomeIcon icon={["fab", "facebook-square"]} size={"3x"} className="logos" /> </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;
