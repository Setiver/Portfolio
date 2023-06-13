import Navbar from './Navbar';
import BackNeon from './img/backneon.png';
import hah from './img/hah.jpg';
import Tech from './Tech';

const MainPage = () => {
  return (
    <>
      <Navbar />
      <div className="background-center-div">
        <img src={hah} alt="hah" className="photo" />
        <img src={BackNeon} alt="bakcneon" />
        <div className="about-me">
          <p>Hi! My name is Łukasz and i'm aspiring Front-End Developer.</p>
        </div>
        {/* second part */}
      </div>
    </>
  );
};

export default MainPage;
