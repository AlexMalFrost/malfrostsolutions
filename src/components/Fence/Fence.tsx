import React from 'react';
import './Fence.scss';

const Fence: React.FC = () => {
  return (
    <div className="fences">
      <div className="fencecontainer">
        <img
          className="fenceimage"
          src="https://raw.githubusercontent.com/AlexMalFrost/malfrostsolutions/pictures/kompyuter-monitor-minimalizm.jpg"
          alt="description"
        />
        <img
          className="fenceimage"
          src="https://raw.githubusercontent.com/AlexMalFrost/malfrostsolutions/pictures/kompyuter-monitor-minimalizm.jpg"
          alt="description"
        />
        <img
          className="fenceimage"
          src="https://raw.githubusercontent.com/AlexMalFrost/malfrostsolutions/pictures/kompyuter-monitor-minimalizm.jpg"
          alt="description"
        />
        <img
          className="fenceimage"
          src="https://raw.githubusercontent.com/AlexMalFrost/malfrostsolutions/pictures/kompyuter-monitor-minimalizm.jpg"
          alt="description"
        />
      </div>
    </div>
  );
};

export default Fence;
