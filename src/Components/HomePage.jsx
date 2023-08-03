// import React from 'react';
// import { Link } from 'react-router-dom';

// const HomePage = ({ isLoggedIn, userName }) => {
//     return (
//         <div className='homepage'>
           
//             {isLoggedIn ? <h2>Welcome back, {userName}!</h2> : null}

//             <div className='home1'>
//                 <h1>
//                     Your One-Stop Destination for <br /> <span style={{ color: 'orange' }}>Buying</span> and{' '}
//                     <span style={{ color: 'orange' }}>Selling</span> <br /> Quality Cars
//                 </h1>

//                 <div className='car-image-container'>
//                     <img src="/images/Audi Q3 Sportback SUV.jpeg" alt="" className='car-image' />
//                 </div>
//             </div>

//             <p>
//                 <Link to="/login">Login to your account</Link>
//             </p>


//         </div>
//     );
// };

// export default HomePage;



import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = ({ isLoggedIn, userName }) => {
  const [showFirstImage, setShowFirstImage] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstImage((prevShowFirstImage) => !prevShowFirstImage);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clear the interval on component unmount

  }, []);

  return (
    <div className='homepage'>
      {isLoggedIn ? <h2>Welcome back, {userName}!</h2> : null}

      <div className='home1'>
        <h1>
          Your One-Stop Destination for <br /> <span style={{ color: 'orange' }}>Buying</span> and{' '}
          <span style={{ color: 'orange' }}>Selling</span> <br /> Quality Cars
        </h1>

        <div className='car-image-container'>
          {showFirstImage ? (
            <img src="public/images/_.jpeg" alt="Audi Q3 Sportback SUV" className='car-image' />
          ) : (
            <img src="public/images/Very beautiful black coloured Mahindra XUV300 car design.jpeg" alt="Other Car Image" className='car-image' />
          )}
        </div>
      </div>

      <p>
        <Link to="/login">Login to your account</Link>
      </p>
    </div>
  );
};

export default HomePage;
