import React from 'react';
import './Blacksection.css';

const Blacksection = () => {
  return (
   
    <div>
      <video width="600"  autoPlay muted>
        <source src="src/assets/HPDC.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Blacksection;
