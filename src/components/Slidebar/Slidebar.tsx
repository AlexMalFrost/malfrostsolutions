import React from 'react';
import './Slidebar.scss';
import { useSelector } from 'react-redux';
import type { RootState } from '../Redux/store';
import langdData from '../Files/languages.json';

const Slidebar: React.FC = () => {
  const [loaded, setLoaded] = React.useState(false);
  const langNumber = useSelector((state: RootState) => state.counter.value);
  const lang = langdData[langNumber];
  return (
    <div className="parallax">
      <div className={loaded ? 'slideh1' : 'displaynone'}>
        <div className="slideh1row">
          <h1>{lang[0]}</h1>
          <h1>{lang[1]}</h1>
        </div>
        <h1>{lang[2]}</h1>
      </div>

      <div className="slidecontainer">
        <img
          loading="lazy"
          className={loaded ? 'transparent' : 'displaynone'}
          onLoad={() => setLoaded(true)}
          src="https://raw.githubusercontent.com/AlexMalFrost/malfrostsolutions/pictures/Buildingmalfrost1.png"
        />
      </div>
      <div className={loaded ? 'displaynone' : 'skelseton'}>
        <h1 className="blob">Loading!</h1>
      </div>
      <div className={loaded ? 'topslidetext' : 'displaynone'}>
        <h2 className="slideh2">{lang[3]}</h2>
        <p className="slidep">{lang[4]}</p>
        <div className={loaded ? 'downslidetext' : 'displaynone'}>
          <p>{lang[5]}</p>
        </div>
      </div>
    </div>
  );
};

export default Slidebar;
