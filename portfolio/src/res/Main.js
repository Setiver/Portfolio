import Tech from './Tech';
import { useRef, useState, useEffect } from 'react';
import Start from './Start';
import Projects from './Projects';
import Fade from 'react-reveal/Fade';

const Main = () => {
  const startSectionRef = useRef(null);
  const techSectionRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  const [isBlack, setIsBlack] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsBlack(false);
    }, 5000);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSectionClick = section => {
    section.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="navbar-div">
        <p className={`navbar-text start ${isBlack === true ? 'light-off-start' : ''} `} onClick={handleScrollToTop}>
          Start
        </p>
        <p className={`navbar-text  ${isBlack === true ? 'light-off-tech' : ''} `} onClick={() => handleSectionClick(techSectionRef)}>
          Tech
        </p>
        <p className={`navbar-text  ${isBlack === true ? 'light-off-projects' : ''} `} onClick={() => handleSectionClick(projectsSectionRef)}>
          PROJECTS
        </p>
        <p className={`navbar-text  ${isBlack === true ? 'light-off-contact' : ''} `} onClick={() => handleSectionClick(contactSectionRef)}>
          Contact
        </p>
      </div>
      <div ref={startSectionRef} className="start-section">
        <Start />
      </div>
      <div ref={techSectionRef} className="tech-section"></div>
      <Tech />
      <div ref={projectsSectionRef} className="pojects-section"></div>
      <Projects />
      <div ref={contactSectionRef} className="contact-section"></div>
      <Fade>
        <div className="fourth-part">
          <p className="contacts">Email: lukasjaniak44@gmail.com</p>
          <p className="contacts">Phone: +48 506 835 751</p>
          <p className="contacts">GitHub: https://github.com/Setiver</p>
        </div>
      </Fade>
    </>
  );
};

export default Main;
