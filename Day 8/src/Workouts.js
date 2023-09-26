import React from 'react';
import './Workouts.css'; // Import your CSS file
import Header from './Header';
import Footer from './Footer';
import Features1 from "./110011.png";
import Features2 from "./features2.svg";
import Features3 from "./features3.svg";
import Features4 from "./features4.svg";

function Workout() {
  return (
    <div className="workout-container">
      <Header />

      <section className="workout-content">
        <h1 className="workout-heading">Workout Plans</h1>
        <p className="workout-description">
          Choose from a variety of workout plans tailored to your fitness goals.
        </p>

        <div className="workout-list">
          <div className="workout-plan">
            <h2 className="plan-title">Beginner's Full Body Workout</h2>
            <p className="plan-description">
              A beginner-friendly workout routine to get you started.ut also stores the username in local storage for future retrieval. Make sure to handle errors appropriately, as local storage operations can fail in certain scenarios (e.g., when storage is disabled or full).
              
            </p>
            <button className="cta-button">Start Workout</button>
          </div>
          <img className="ggg11" src={Features1} alt="" />

          {/* Add more workout plans here */}
        </div>
      </section>

      

      <Footer />
    </div>
  );
}

export default Workout;
