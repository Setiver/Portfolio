import Tech from './Tech';
import { useRef } from 'react';
import FirstPart from './FirstPart';
const Main = () => {
  const techSectionRef = useRef(null);

  const handleTechClick = () => {
    techSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="navbar-div">
        <p className="navbar-text start">Start</p>
        <p className="navbar-text tech" onClick={handleTechClick}>
          Tech
        </p>
        <p className="navbar-text">Sites</p>
        <p className="navbar-text">Kontakt</p>
        <p className="navbar-text">CV</p>
      </div>
      <div className="background-center-div">
        <FirstPart />
        <div ref={techSectionRef} className="tech-section">
          <Tech />
        </div>
      </div>
    </>
  );
};

export default Main;
