import ILLUSTRATOR from './img/icons/Ai.png';
import PHOTOSHOP from './img/icons/Ps.png';
import PREMIERE from './img/icons/Pr.png';
import HTML from './img/icons/html.png';
import CSS from './img/icons/css.png';
import JS from './img/icons/js.png';
import REACT from './img/icons/react.png';
import GIT from './img/icons/git.png';
import OFFICE from './img/icons/office.png';

import Fade from 'react-reveal/Fade';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Tech = () => {
  const [visible, setVisible] = useState(false);
  const [visibleLine, setVisibleLine] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setVisible(true);
      }, 5000);
      setVisibleLine(true);
    }
  }, [inView]);

  return (
    <>
      <div className="second-part">
        <div className="what-i-use">
          <Fade bottom>
            <p className="what-i-use-text">WHAT I USE</p>
          </Fade>
          <div className={`line left ${visibleLine === true ? 'show' : ''}`}></div>
          <div className={`line right ${visibleLine === true ? 'show' : ''}`}></div>
        </div>
        <Fade big>
          <div className="icons-apps">
            <img src={JS} alt="javascript" ref={ref} className={`javascript icons-position-transform ${visible === true ? '' : 'flick'}`} />
            <img src={HTML} alt="html" ref={ref} className={`html icons-position-transform ${visible === true ? '' : 'flick'}`} />
            <img src={CSS} alt="css" ref={ref} className={`css icons-position-transform ${visible === true ? '' : 'flick'}`} />
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Tech;
