import React from 'react';
import './Slidebar.scss';

const Slidebar: React.FC = () => {
  return (
    <div className="parallax">
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
    </div>
  );
};

export default Slidebar;
