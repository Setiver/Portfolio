import BackNeon from './img/backneon.png';
import hah from './img/hah.jpg';

const Start = () => {
  return (
    <>
      <div className="photo-border">
        <img src={hah} alt="hah" className="photo" />
        <img src={BackNeon} alt="bakcneon" />
      </div>
      <div className="about-me">
        <p>Hi! My name is Łukasz and i'm aspiring Front-End Developer.</p>
      </div>
    </>
  );
};

export default Start;
