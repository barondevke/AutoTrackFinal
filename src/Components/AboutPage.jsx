import React from 'react';
import { Link } from 'react-router-dom'
/*import carImage from '/home/moringa/Documents/The-About/AutoTrackFinal/src/images/buga.avif'8*/


const AboutPage = () => {
    return (
        <div className="about-us-containerIM">
            <div className="car-image-containerIM">
                <img src='https://media.wired.com/photos/5927284ff3e2356fd800b9b4/master/w_1600%2Cc_limit/03_CHIRON_34-front_WEB.jpg' alt="Car" className="car-image" />
            </div>
            <div className="about-us-contentIM">

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
                <h3>Our Mission</h3>
                <p>
                    "AutoTrack is dedicated to revolutionizing the car buying and
                    selling experience by providing a seamless and transparent
                    platform for automotive enthusiasts. Our mission is to empower
                    customers with the information, tools, and resources they need
                    to make informed decisions when buying or selling a car. We strive
                    to offer a diverse and high-quality inventory, exceptional customer service,
                    and innovative solutions to create a positive and satisfying experience for
                    every customer. At AutoTrack, we aim to be the go-to destination for anyone
                    seeking their dream car or looking to sell their vehicle quickly and hassle-free."

                </p>

            </div>
        </div>
    );
};

export default AboutPage;