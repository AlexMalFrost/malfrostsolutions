import React from 'react';
import './Slidebar.scss';

const Slidebar: React.FC = () => {
  return (
    <div className="parallax">
      <div className="slideh1">
        <div className="slideh1row">
          <h1>Your City</h1>
          <h1>Your Life</h1>
        </div>
        <h1>Your Rules!</h1>
      </div>
      <div className="slidecontainer">
        <img
          className="responcive"
          src="https://raw.githubusercontent.com/AlexMalFrost/malfrostsolutions/pictures/mybackimage.png"
          alt="description"
        />
        <img
          className="transparent"
          src="https://raw.githubusercontent.com/AlexMalFrost/malfrostsolutions/pictures/Buildingmalfrost1.png"
          alt="description"
        />
        <img
          className="transparentt"
          src="https://raw.githubusercontent.com/AlexMalFrost/malfrostsolutions/pictures/buildingmalfrost2.png"
          alt="description"
        />
      </div>
      <div className="topslidetext">
        <h2 className="slideh2">Making business easier!</h2>
        <p className="slidep">We do Solutions, You do Profit.</p>
      </div>
      <div className="downslidetext">
        <p>
          Welcome to the world of high speeds and precise results! We are team of professionals
          specializing in providing innovative business solutions and advanced IT technologies. Our
          goal is to help your business harmoniously fit into a dynamic urban environment, ensuring
          rapid growth and maximum profit. Our company has flexibility and adaptability, allowing us
          to find optimal solutions for the most complex tasks. We guarantee the confidentiality and
          security of your data, as well as the efficiency of performing all assigned tasks. Your
          success is our main goal! We are ready to make the most daring and ambitious ideas come
          true, so your business becomes even more successful and competitive.
        </p>
      </div>
    </div>
  );
};

export default Slidebar;
