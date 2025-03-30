import React from "react";
import { FaAward } from "react-icons/fa";
import "../styles/Certifications.css";
import certImg from "../assets/aws-certified-ai-practitioner.png";

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-container full-section">
      <div className="certifications-inner">
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
        </div>
      </div>
    </section>
  );
};

export default Certifications;
