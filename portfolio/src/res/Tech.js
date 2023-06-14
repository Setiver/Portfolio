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
import { useState } from 'react';

const Tech = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className="second-part">
        <div className="what-i-use">
          <Fade bottom>
            <div className="line left"></div>
            <p>WHAT I USE</p>
            <div className="line right"></div>
          </Fade>
        </div>
        <Fade big>
          <div className="icons-apps">
            <img src={JS} alt="javascript" className={`javascript ${visible === true ? '' : 'flick'}`} />
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Tech;
