import React from "react";
import "../styles/Contact.css";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <button className="contact-button">
        <FaPaperPlane className="contact-icon" />
        SAY HELLO
      </button>

      <h2 className="contact-heading">Get In Touch</h2>

      <p className="contact-text">
        I'm actively exploring new opportunities and always open to connecting!
        <br />
        Feel free to reach out if you have any full-time opportunities, questions,
        or just want to say hello— I’ll do my best to respond!
      </p>
    </section>
  );
};

export default Contact;
