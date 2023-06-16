import Tech from './Tech';
import { useRef, useState } from 'react';
import Start from './Start';
import Projects from './Projects';

const Main = () => {
  const startSectionRef = useRef(null);
  const techSectionRef = useRef(null);
  const projectsSectionRef = useRef(null);

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
        <p className="navbar-text" onClick={() => handleSectionClick(techSectionRef)}>
          Tech
        </p>
        <p className="navbar-text" onClick={() => handleSectionClick(projectsSectionRef)}>
          PROJECTS
        </p>
        <p className="navbar-text">Kontakt</p>
        <p className="navbar-text">CV</p>
      </div>
      <div ref={startSectionRef} className="start-section">
        <Start />
      </div>
      <div ref={techSectionRef} className="tech-section"></div>
      <Tech />
      <div ref={projectsSectionRef} className="pojects-section"></div>
      <Projects />
    </>
  );
};

export default Main;
