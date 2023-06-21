import BackNeon from './img/backneon.png';
import ja from './img/ja.png';

const Start = () => {
  return (
    <>
      <div className="photo-border">
        <img src={ja} alt="ja" className="photo" />
        <img src={BackNeon} alt="bakcneon" />
      </div>
      <div className="about-me">
        <p>
          Hi! My name is Łukasz and I'm an aspiring Front-End Developer. I want to develop and acquire new knowledge in this direction, and this page
          shows my current skills.
        </p>
      </div>
    </>
  );
};

export default Start;
