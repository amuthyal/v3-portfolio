import React from "react";
import { FaAward } from "react-icons/fa"; // ✅ Import certification icon
import "../styles/Certifications.css";
import certImg from "../assets/aws-certified-ai-practitioner.png"; // ✅ Import image

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-container">
      {/* ✅ Certifications Button with Icon */}
      <button className="certifications-button">
        <FaAward className="cert-icon" /> CERTIFICATIONS
      </button>

      <div className="certification-list">

        {/* ✅ AWS Certified AI Practitioner */}
        <div className="certification-item">
          <div className="certification-info">
            <h3>AWS Certified AI Practitioner</h3>
            <p className="issued-by">Issued by Amazon Web Services Training and Certification</p>
            <h4>Skills:</h4>
            <ul>
              <li>Artificial Intelligence (AI)</li>
              <li>AWS Services</li>
              <li>Foundation Models</li>
              <li>Generative AI</li>
              <li>Machine Learning (ML)</li>
            </ul>
            <p className="earning-criteria">Successfully passed the AWS Certified AI Practitioner exam.</p>
          </div>
          <img src={certImg} alt="AWS Certification" className="certification-image" />
        </div>

        {/* ✅ Add more certifications as needed */}
      </div>
    </section>
  );
};

export default Certifications;
