import React, { useState } from 'react';
import './css files/ContactMe.css';

import Image from "./images/Laptop.jpg";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    console.log('Form submitted:', formData);

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div class = "container">
    <div class = "Box">
       <div>
            <h2>Contact Me</h2>
            <div class = "line">
            <img src = {Image} />
            </div>
            

      </div>
      <div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>
      </div>
    </div>
    </div>
  );
};

export default ContactMe;
