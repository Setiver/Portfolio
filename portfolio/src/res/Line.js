import Fade from 'react-reveal/Fade';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Line = ({ text }) => {
  const [visibleLine, setVisibleLine] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setVisibleLine(true);
    }
  }, [inView]);

  return (
    <>
      <div className="what-i-use">
        <Fade bottom>
          <p className="what-i-use-text" ref={ref}>
            {text}
          </p>
        </Fade>
        <div className={`line left ${visibleLine === true ? 'show' : ''}`}></div>
        <div className={`line right ${visibleLine === true ? 'show' : ''}`}></div>
      </div>
    </>
  );
};

export default Line;
