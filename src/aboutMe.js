import React from "react";
import meme from "./images/Code-doesnt-work.jpg";
import "./css files/aboutMe.css";

function aboutMe() {
  return (
    <div>
      <div className="container">
        <div className="memeDiv">
          <img src={meme} alt="Coding Meme" className="memeImage" />
        </div>

        <div className="aboutMe">
          <h3>About Me</h3>
          <h2>
            Artifical Intelligence Undergraduate from SRM IST, based in Chennai,
            India
          </h2>
          <p>
            With a foundation in HTML, CSS, JavaScript, and React, I specialize
            in developing captivating and user-friendly web applications. My
            expertise extends beyond web development, delving into the realm of
            machine learning where I leverage libraries like NumPy and Pandas
            for effective data manipulation, and TensorFlow for implementing
            advanced algorithms. With a keen eye for detail and a love for
            problem-solving, I am dedicated to delivering high-quality
            solutions. <br />
          </p>
          Life of a programmer: Debugging, coffee, repeat. Take a break, enjoy a
          chuckle 😎.
        </div>
      </div>
    </div>
  );
}

export default aboutMe;
