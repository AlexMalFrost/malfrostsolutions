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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, expedita dolore
          commodi animi, quidem natus, officia eligendi laborum nihil debitis ipsam a aut porro
          nostrum enim eum amet dignissimos impedit! ipsum Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Doloremque, expedita dolore commodi animi, quidem natus, officia
          eligendi laborum nihil debitis ipsam a aut porro nostrum enim eum amet dignissimos
          impedit!
        </p>
      </div>
    </div>
  );
};

export default Slidebar;
