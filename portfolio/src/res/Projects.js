import Line from './Line';
import TTRPG from './img/site/TTRPG.png';
import GUESS from './img/site/guess.png';
import SEARCHER from './img/site/Search.png';
import Fade from 'react-reveal/Fade';

const Projects = () => {
  //
  return (
    <>
      <div className="third-part">
        <Line text="WHAT I DID" />
        <Fade left>
          <div className="ttrpg-container">
            <a href="https://calculatorfantasy.netlify.app/" rel="noreferrer" target="_blank">
              <img src={TTRPG} alt="TTRPG" title="TTRPG" className="ttrpg "></img>
              <div className={`hovering`}>
                <p className="hovering-text">CLICK</p>
              </div>
            </a>
            <p className="ttrpg-text">
              I created this for me and my friends for easier fights in our TTRPG campaigns. I did it entirely by myself including pictures and the
              whole site is an original idea. There is an 'Instruction' button for all information about how everything works. It's a full React.js
              project.
            </p>
          </div>
        </Fade>
        <Fade right>
          <div className="guess-container">
            <a href="https://guessthenumberlj.netlify.app/" rel="noreferrer" target="_blank">
              <img src={GUESS} alt="GUESS" title="guess" className="guess"></img>
              <div className={`hovering guess`}>
                <p className="hovering-text">CLICK</p>
              </div>
            </a>
            <p className="guess-text">
              It's a fully vanilla JavaScript game. The rules are simple: guess a number from 1 to 50. Game shows if your guess is above or below a
              number that was randomly chosen.
            </p>
          </div>
        </Fade>
        <Fade left>
          <div className="searcher-container">
            <a href="https://foodsearcherer.netlify.app/" rel="noreferrer" target="_blank">
              <img src={SEARCHER} alt="SEARCHER" title="searcher" className="searcher"></img>
              <div className={`hovering`}>
                <p className="hovering-text">CLICK</p>
              </div>
            </a>
            <p className="searcher-text">It's an API searcher for random food. It shows a recipe, ingredients, YouTube video and final result.</p>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Projects;
