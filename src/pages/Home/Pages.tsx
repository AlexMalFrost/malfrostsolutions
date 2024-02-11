import React from 'react';
import Header from '../../components/Header/Header';
import './Pages.scss';

const Pages: React.FC = () => {
  return (
    <div className="pages">
      <div className="leftside"></div>
      <div>
        <Header />
      </div>
      <div className="rightside"></div>
    </div>
  );
};

export default Pages;
