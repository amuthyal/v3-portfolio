import React from "react";
import { motion } from "framer-motion";
import "../styles/Contact.css";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-section full-section" id="contact">
      <motion.div
        className="contact-inner"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <button className="contact-button">
          <FaPaperPlane className="contact-icon" />
          SAY HELLO
        </button>

        <h2 className="contact-heading">Get In Touch</h2>

        <p className="contact-text">
          I'm actively exploring new opportunities and always open to connecting!
          <br />
          Feel free to reach out if you have any full-time opportunities, questions,
          or just want to say hello — I’ll do my best to respond!
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
