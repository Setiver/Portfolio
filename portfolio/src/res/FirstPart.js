import BackNeon from './img/backneon.png';
import hah from './img/hah.jpg';

const FirstPart = () => {
  return (
    <>
      <img src={hah} alt="hah" className="photo" />
      <img src={BackNeon} alt="bakcneon" />
      <div className="about-me">
        <p>Hi! My name is Łukasz and i'm aspiring Front-End Developer.</p>
      </div>
    </>
  );
};

export default FirstPart;
