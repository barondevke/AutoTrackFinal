import React, { useState } from 'react';
import './App.css';
import NavBar from './NavBar';

const HomePage = ({ isLoggedIn, userName }) => {
  const [backgroundImage, setBackgroundImage] = useState('');
  const [displayContent, setDisplayContent] = useState(<div><div className='belowSection'><div className='leftSection'><h4>BLACK BADGE</h4><h5>CULLINAN</h5></div><div className='rightSection'></div></div></div>);

  const changeBackgroundAndText = (image, content) => {
    setBackgroundImage(image);
    setDisplayContent(content);
  };

  return (
    <div className="homePage"  style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` }:{backgroundImage: "https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/3-7-5-bb-cullinan/components/rolls-royce-black-badge-cullinan-product-page-carousel-1-d.jpg/jcr:content/renditions/cq5dam.web.1920.webp"}}>
      <NavBar />
      {isLoggedIn ? <h2>Welcome back, {userName}!</h2> : null}
      <div className="divLinks">
        <ul>
          <li onClick={() => changeBackgroundAndText('https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/3-7-5-bb-cullinan/components/rolls-royce-black-badge-cullinan-product-page-carousel-1-d.jpg/jcr:content/renditions/cq5dam.web.1920.webp', <div className='belowSection'><div className='leftSection'><h4>BLACK BADGE</h4><h5>CULLINAN</h5></div><div className='rightSection'></div></div>)}></li>
          <li onClick={() => changeBackgroundAndText('https://www.luxuryandexpensive.com/pic/Bugatti-Chiron-in-black-very-nice-for-sale-images.69999_4.jpg', <div className='belowSection'><div className='leftSection'><h4> BUGATTI</h4><h5>CHIRON</h5></div><div className='rightSection'></div></div>)}></li>
          <li onClick={() => changeBackgroundAndText('https://cdn.motor1.com/images/mgl/vkg9A/s3/subaru-wrx-s4-sti-sport-sharp.webp', <div className='belowSection'><div className='leftSection'><h4>SUBARU</h4><h5> WRX</h5></div><div className='rightSection'></div></div>)}></li>
          <li onClick={() => changeBackgroundAndText('https://blackfoxmotors.de/wp-content/uploads/2023/01/DSC06719-scaled-1920x1080.jpg',  <div className='belowSection'><div className='leftSection'><h4>LAND ROVER</h4><h5>RANGE ROVER</h5></div><div className='rightSection'></div></div>)}></li>
        </ul>
      </div>
      {displayContent && <div>{displayContent}</div>}
    </div>
  );
};

export default HomePage;
