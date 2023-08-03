import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = ({ isLoggedIn, userName }) => {
  return (
    <div className='homepage'>
      <div className='logo-container'>
        <img
          src="/images/Car Logotype Premium Logo_ ilustración de stock 681412297 _ Shutterstock.jpeg"
          alt="Carlogo"
          className='logo-img logo1' 
        />
        <img
          src="/images/AT_ Monogram of Two letters A & T.jpeg"
          alt="Car 2"
          className='logo-img logo2'
        />
      </div>
      {isLoggedIn ? <h2>Welcome back, {userName}!</h2> : null}

      <div className='home1'>
        <h1>
          Your One-Stop Destination for <span style={{ color: 'orange' }}>Buying</span> and{' '}
          <span style={{ color: 'orange' }}>Selling</span> Quality Cars
        </h1>

        <div className='car-image-container'>
          <img src="/images/Audi Q3 Sportback SUV.jpeg" alt="" className='car-image' />
        </div>
      </div>

      <p className='watermark'>AutoTrack</p> 

      {!isLoggedIn && (
        <p>
          <Link to="/login">Sign In</Link> / <Link to="/signup">Sign Up</Link>
        </p>
      )}
    </div>
  );
};

export default HomePage;
