import React from "react";
import "./Advisory.css"; 

const AdvisorySection = () => {
  return (
    <div className="advisory-section">
    
      <div className="advisory-text">
        <h2>Delivering World-Class <span className="highlight">Advisory Services</span></h2>
        <p>
          Through HALALDEVCO Advisory (HPA), we provide consultancy on meeting halal product standards, propelling Saudi Arabia towards global leadership in the halal industry.
        </p>
        <ul className="advisory-points">
          <li>Global Leadership</li>
          <li>Industry Excellence</li>
          <li>Strategic Guidance</li>
          <li>Governance on Halal Standards</li>
          <li>Market Competitiveness</li>
        </ul>
      </div>

    
      <div className="advisory-image">
        <img src="src/assets/Union2.png" alt="Advisory Services" />
      </div>
    </div>
  );
};

export default AdvisorySection;
