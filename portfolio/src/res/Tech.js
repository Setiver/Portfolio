import ILLUSTRATOR from './img/icons/Ai.png';
import PHOTOSHOP from './img/icons/Ps.png';
import PREMIERE from './img/icons/Pr.png';
import OFFICE from './img/icons/office.png';
import HTML from './img/icons/html.png';
import CSS from './img/icons/css.png';
import JS from './img/icons/js.png';
import REACT from './img/icons/react.png';
import GIT from './img/icons/git.png';

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
            <img src={JS} alt="javascript" ref={ref} className={`javascript  ${visible === true ? '' : 'flick'}`} />
            <img src={HTML} alt="html" ref={ref} className={`html  ${visible === true ? '' : 'flick'}`} />
            <img src={CSS} alt="css" ref={ref} className={`css  ${visible === true ? '' : 'flick'}`} />
            <img src={REACT} alt="react" ref={ref} className={`react  ${visible === true ? '' : 'flick'}`} />
            <img src={GIT} alt="git" ref={ref} className={`git  ${visible === true ? '' : 'flick'}`} />
            <img src={PREMIERE} alt="premiere" ref={ref} className={`premiere second-line-icons  ${visible === true ? '' : 'flick'}`} />
            <img src={PHOTOSHOP} alt="photoshop" ref={ref} className={`photoshop second-line-icons  ${visible === true ? '' : 'flick'}`} />
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Tech;
