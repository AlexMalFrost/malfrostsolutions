import React from 'react';
import Slidebar from '../../components/Slidebar/Slidebar';
import Header from '../../components/Header/Header';
import Fence from '../../components/Fence/Fence';
import Footer from '../../components/Footer/Footer';
import Skeleton from '../../components/Skeleton/Skeleton';
import './Pages.scss';
import { sendMessage } from '../../components/Message/message';

const Pages: React.FC = () => {
  const [text, setText] = React.useState('');
  const handleSubmit = async (event: any): Promise<void> => {
    event.preventDefault();
    console.log(text);
    try {
      await sendMessage(text);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="pages">
      <div className="leftside"></div>
      <div className="centerside">
        <div className="pages_header">
          <Header />
        </div>
        {/*<Skeleton />*/}
        <div className="pages_skeleton">
          <div className="pages_slidebar">
            <Slidebar />
          </div>
          <div className="pages_fence">
            <Fence />
          </div>
        </div>
        <div className="pages_input">
          <input
            className="pages_input_input"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="input_button" onClick={handleSubmit}>
            Send
          </button>
          {text && (
            <svg
              onClick={() => setText('')}
              className="input_clear"
              height="48"
              viewBox="0 0 48 48"
              width="48"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z" />
              <path d="M0 0h48v48h-48z" fill="none" />
            </svg>
          )}
        </div>
        <div className="pages_footer">
          <Footer />
        </div>
      </div>
      <div className="rightside"></div>
    </div>
  );
};

export default Pages;
