import React from 'react';
import Slidebar from '../../components/Slidebar/Slidebar';
import Header from '../../components/Header/Header';
import Fence from '../../components/Fence/Fence';
import Footer from '../../components/Footer/Footer';
import './Pages.scss';
import { sendMessage } from '../../components/Message/message';

const Pages: React.FC = () => {
  const [text, setText] = React.useState('');
  const [stopThrottle, setStopThrottle] = React.useState(true);
  const timeoutIdRef = React.useRef<ReturnType<typeof setTimeout>>();
  /*************  ✨ Codeium Command 🌟  *************/
  /**
   * Handles form submission, sends message to the chat and resets form.
   * Implements debouncing, so that the function is not called too often.
   */
  const handleSubmit = async () => {
    /**
     * If the function was called too recently, do not call it again
     * to prevent too frequent calls.
     */
    if (stopThrottle) {
      try {
        /**
         * Sends message to the chat and resets the form.
         */
        await sendMessage(text);
        setText('');
      } catch (e) {
        console.log(e);
      }
      /**
       * Set the flag to prevent too frequent calls.
       */
      setStopThrottle(false);
    }

    /**
     * Set the timeout to call the function again after 4 seconds.
     */
    timeoutIdRef.current = setTimeout(() => {
      /**
       * Reset the flag to allow calling the function again.
       */
      setStopThrottle(true);
    }, 4000);
    /**
     * Clear the timeout to prevent calling the function again.
     */
    return () => clearTimeout(timeoutIdRef.current);
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
          <div className="input_inputcover">
            <input
              className="pages_input_input"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
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
          <button className="input_button" onClick={handleSubmit}>
            Send
          </button>
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
