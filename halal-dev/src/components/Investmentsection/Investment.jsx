import React from "react";
import "./Investment.css"; 

const InvestmentSection = () => {
  return (
    <div className="investment-section">
      
      <div className="investment-image">
        <img src="src/assets/Union.png" alt="Investment Opportunity" />
      </div>

      
      <div className="investment-text">
        <h2>
          Your Financial Future, The Halal Way
        </h2>
        <h1>
          Discover <span className="highlight">Investment Opportunities</span> That Align With <span className="highlight">Your Values.</span>
        </h1>
        <p>
          Halal Product Development Company (HPDC) investment strategies support the halal industry’s continued growth by empowering halal businesses and investors to make a real difference. With expert guidance and strong belief systems, HPDC focuses on sustainability, empowerment, and ethical investments.
        </p>
        <ul className="investment-points">
          <li>Support Halal Industry Growth</li>
          <li>Empowerment</li>
          <li>Sustainable Development</li>
          <li>Integration</li>
        </ul>
      </div>
    </div>
  );
};

export default InvestmentSection;
