import Tech from './Tech';
import { useRef } from 'react';
import FirstPart from './FirstPart';

const Main = () => {
  const techSectionRef = useRef(null);
  const startSectionRef = useRef(null);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSectionClick = section => {
    section.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="navbar-div">
        <p className="navbar-text start" onClick={handleScrollToTop}>
          Start
        </p>
        <p className="navbar-text tech" onClick={() => handleSectionClick(techSectionRef)}>
          Tech
        </p>
        <p className="navbar-text">Sites</p>
        <p className="navbar-text">Kontakt</p>
        <p className="navbar-text">CV</p>
      </div>
      <div ref={startSectionRef} className="start-section">
        <FirstPart />
      </div>
      <div ref={techSectionRef} className="tech-section">
        {' '}
      </div>
      <Tech />
    </>
  );
};

export default Main;
