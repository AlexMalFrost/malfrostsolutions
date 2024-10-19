import React from 'react';
import './Fence.scss';
import fenceData from '../Files/fence.json';
import { useSelector } from 'react-redux';
import type { RootState } from '../Redux/store';

/**
 * The Fence component renders a fence with 4 flipbox elements.
 * Each flipbox element contains a front and a back side.
 * The front side contains an image and the back side contains text.
 * The text and the image are controlled by the Redux store.
 * The Redux store is connected to the fenceNumber state and
 * the fenceNumber state is used to select the text and the image.
 * The text and the image are selected from the fenceData array.
 * The fenceData array is imported from the fence.json file.
 *
 * @returns The Fence component.
 */
const Fence: React.FC = () => {
  const fenceNumber = useSelector((state: RootState) => state.counter.value);
  const fence = fenceData[fenceNumber];
  const flipBoxFront = (src: string) => (
    <div className="flip-box-front">
      <img loading="lazy" className="fenceimage" src={src} alt="description" />
    </div>
  );
  const flipBoxBack = (header: string, text: string) => (
    <div className="flip-box-back">
      <h2>{header}</h2>
      <p>{text}</p>
    </div>
  );
  return (
    <div className="fences">
      <div className="fencecontainer">
        <div className="flip-box">
          <div className="flip-box-inner">
            {flipBoxFront(
              'https://raw.githubusercontent.com/AlexMalFrost/malfrostsolutions/pictures/kompyuter-monitor-minimalizm.jpg',
            )}
            {flipBoxBack(fence[0], fence[1])}
          </div>
          <div className="flip-box-inner">
            {flipBoxFront(
              'https://raw.githubusercontent.com/AlexMalFrost/malfrostsolutions/pictures/kompyuter-monitor-minimalizm.jpg',
            )}
            {flipBoxBack(fence[2], fence[3])}
          </div>
          <div className="flip-box-inner">
            {flipBoxFront(
              'https://raw.githubusercontent.com/AlexMalFrost/malfrostsolutions/pictures/kompyuter-monitor-minimalizm.jpg',
            )}
            {flipBoxBack(fence[4], fence[5])}
          </div>
          <div className="flip-box-inner">
            {flipBoxFront(
              'https://raw.githubusercontent.com/AlexMalFrost/malfrostsolutions/pictures/kompyuter-monitor-minimalizm.jpg',
            )}
            {flipBoxBack(fence[6], fence[7])}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fence;
