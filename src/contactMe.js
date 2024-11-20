import React from "react";
import "./css files/ContactMe.css";
import img from "./images/ContactMe.jpg";

const ContactMe = () => {
  return (
    <div className="container">
      <div className="Box">
        <div>
          <h2>Contact Me</h2>
          <div className="line">
            <img src={img} alt="Contact Image" />
          </div>
        </div>
        <div className="contact-details">
          <p>
            <strong>Phone:</strong> +91 9398421099
          </p>
          <p>
            <strong>Email:</strong> meghanand1234@gmail.com
          </p>
          <div className="social-links">
            <p>
              <strong>Find me on:</strong>
            </p>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/meghanand-gejjela-802406247/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Megh-Zyke"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
