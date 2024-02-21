import React from 'react';
import Slidebar from '../../components/Slidebar/Slidebar';
import Header from '../../components/Header/Header';
import './Pages.scss';

const Pages: React.FC = () => {
  return (
    <div className="pages">
      <div className="leftside"></div>
      <div className="centerside">
        <div className="pages_header">
          <Header />
        </div>
        <div className="pages_slidebar">
          <Slidebar />
        </div>
      </div>
      <div className="rightside"></div>
    </div>
  );
};

export default Pages;