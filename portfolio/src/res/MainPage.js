import { useState, useEffect, useRef } from 'react';

const MainPage = () => {
  const [value, setValue] = useState('ala');

  return (
    <>
      <div className="background-site">
        <div className="background-center-div">
          <div>{value}</div>
          <div>{value}</div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
