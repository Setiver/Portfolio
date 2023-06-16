import Fade from 'react-reveal/Fade';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Line from './Line';

const Projects = () => {
  return (
    <>
      <div className="third-part">
        <Line text="WHAT I DID" />
      </div>
    </>
  );
};

export default Projects;
