import React from 'react';
import { Link } from 'react-router-dom'
import carImage from './images/image.avif';


const AboutPage = () => {
  return (
    <div className="about-us-container">
      <div className="car-image-container">
        <img src= {carImage} alt="Car" className="car-image" />
      </div>
      <div className="about-us-content">
        <h2>About Us</h2>
        <p>
        Welcome to AutoTrack, your ultimate 
        destination for all things automotive!
         We are a premier online platform where car
          enthusiasts can buy, sell, and explore a vast 
          array of quality vehicles. Whether you're a 
          passionate car collector or a first-time car buyer, 
          AutoTrack is designed to cater to all your automotive needs.
          </p>
          <p>
            Our team of experts is dedicated to bringing you the latest news,
            reviews, and buying guides to help you make informed decisions about
            your next car purchase.
          </p>
          <p>
            Whether you are a car enthusiast or a casual buyer, we hope our website
            helps you find the perfect car that suits your needs and preferences.
          </p>
        <Link to="/buy-sell">
          <button className='btnm'>Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;
