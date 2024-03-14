import React from 'react';
import './Fence.scss';

const Fence: React.FC = () => {
  return (
    <div className="fences">
      <div className="fencecontainer">
        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img
                className="fenceimage"
                src="https://raw.githubusercontent.com/AlexMalFrost/malfrostsolutions/pictures/kompyuter-monitor-minimalizm.jpg"
                alt="description"
              />
            </div>
            <div className="flip-box-back">
              <h2>Health</h2>
              <p>Solutions in medecine</p>
            </div>
          </div>
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img
                className="fenceimage"
                src="https://raw.githubusercontent.com/AlexMalFrost/malfrostsolutions/pictures/kompyuter-monitor-minimalizm.jpg"
                alt="description"
              />
            </div>
            <div className="flip-box-back">
              <h2>Logistics</h2>
              <p>Delivery business</p>
            </div>
          </div>
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img
                className="fenceimage"
                src="https://raw.githubusercontent.com/AlexMalFrost/malfrostsolutions/pictures/kompyuter-monitor-minimalizm.jpg"
                alt="description"
              />
            </div>
            <div className="flip-box-back">
              <h2>Languages</h2>
              <p>Use different languages</p>
            </div>
          </div>
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img
                className="fenceimage"
                src="https://raw.githubusercontent.com/AlexMalFrost/malfrostsolutions/pictures/kompyuter-monitor-minimalizm.jpg"
                alt="description"
              />
            </div>
            <div className="flip-box-back">
              <h2>Design</h2>
              <p>Unique products</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fence;
