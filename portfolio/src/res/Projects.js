import Fade from 'react-reveal/Fade';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Line from './Line';

const Projects = () => {
  return (
    <>
      <div className="third-part">
        <Line text="WHAT I DID" />
        <div class="frame-container">
          <div className="ttrpg-container">
            <iframe src="https://calculatorfantasy.netlify.app/" title="TTRPG" className="ttrpg"></iframe>
            <p className="ttrpg-text">
              I created this for me and my friends for easier fights in our TTRPG camapains. I did it entirely by myself and the whole site is an
              original idea. There is a 'Instruction' button for all informations about how everything works. It's a full React.js project.
            </p>
          </div>
          <div className="guess-container">
            <iframe src="https://guessthenumberlj.netlify.app/" title="guess" className="guess"></iframe>
            <p className="guess-text">
              It's a fully vanilla JavaScript game. The rules are simple: guess a number from 1 to 50. Game shows if your guess is above or below a
              number that was randomly choosed.
            </p>
          </div>
          <div className="searcher-container">
            <iframe src="https://foodsearcherer.netlify.app/" title="searcher" className="searcher"></iframe>
            <p className="searcher-text">Thats a API searcher for random food. It's show a recipe, ingredients, yt video and final result.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
