import React from "react";
import "./Technical.css"; 

const TechnicalServicesSection = () => {
  return (
    <div className="technical-services-section">
      
      <div className="technical-image">
        <img src="src/assets/Union3.png" alt="Technical Services" />
      </div>

      
      <div className="technical-text">
        <h2>Halal <span className="highlight">Technical Services</span></h2>
        <p>
          HPA offers access to a full network of halal technical experts & third-party testing to guarantee product safety and assurance of non-halal ingredients.
        </p>
        <ul className="technical-points">
          <li>Efficient Halal Audits</li>
          <li>Third-Party Testing</li>
          <li>Product Safety Assurance</li>
          <li>Halal Compliance</li>
        </ul>
      </div>
    </div>
  );
};

export default TechnicalServicesSection;
