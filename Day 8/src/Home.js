import React from 'react';
import './Home.css'; // Import your CSS file
import Header from './Header';
import Footer from './Footer';
import img from './img 5.jpg';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <Header />
      <img className="background-image" src={img} alt="My Image" />

      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Fitness Tracker</h1>
          <p1>Embark on your fitness journey with us. 
            Our platform offers personalized workouts.</p1>
            <p2>Embark on your fitness journey with us. Our platform offers personalized workouts, nutrition plans, and expert guidance.</p2>
            <p3>Start today and take the first step towards a healthier and happier you.</p3>
          <button className="cta-button"><Link to="/signup">Sign Up Now</Link></button>
        </div>
      </section>

      <section className="features">
        {/* ... (features section remains the same as in the previous example) */}
      </section>

      <section className="call-to-action">
        {/* ... (call-to-action section remains the same as in the previous example) */}
      </section>

      <Footer />
    </div>
  );
}

export default Home;

