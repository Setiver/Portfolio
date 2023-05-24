import { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';

const MainPage = () => {
  const [value, setValue] = useState('ala');

  return (
    <>
      <Navbar />
      <div className="background-center-div">
        <div>{value}</div>
        <div>{value}</div>
      </div>
    </>
  );
};

export default MainPage;
