import React from "react";
import './NewsCard.css'
const NewsCard = () => {
    return (
        <>
            <div className="news-card">
                <img src="src/assets/image11.png" alt="Islamic Development Bank Group" className="news-image" />
                <div className="news-content">
                    <h3>Islamic Development Bank Group Signs MoU with Halal Products Development Company</h3>
                    <p>The agreement aims to raise awareness and increase investment in Saudi Arabia’s halal industry.</p>
                </div>
            </div>
            <div className="news-card">
                <img src="src/assets/image12.png" alt="Islamic Development Bank Group" className="news-image" />
                <div className="news-content">
                    <h3>Strategic Partnerships Between Halal Products Development Company and Tanmiah Food Company Announced</h3>
                    <p>The agreement aims to raise awareness and increase investment in Saudi Arabia’s halal industry..</p>
                </div>
            </div>
            <div className="news-card">
                <img src="src/assets/image13.png" alt="Islamic Development Bank Group" className="news-image" />
                <div className="news-content">
                    <h3>Halal Products Development Company to Sponsor IsDB Group’s Private Sector Forum</h3>
                    <p>The agreement aims to raise awareness and increase investment in Saudi Arabia’s halal industry..</p>
                </div>
            </div>
        </>
    );
};

export default NewsCard;
