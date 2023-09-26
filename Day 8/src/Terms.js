import React from 'react';
import './Terms.css'; // Import your CSS file
import Header from './Header';
import Footer from './Footer';

function TermsOfService() {
  return (
    <section className="terms-of-service-container">
        <Header />
      <div className="terms-of-service-content">
        <h2 className="terms-of-service-heading">Terms of Service</h2>
        <p className="terms-of-service-text">
          Welcome to Fitness Tracker! These Terms of Service outline the rules and regulations for using our platform.
        </p>

        <h3>1. Acceptance of Terms</h3>
        <p>
          By accessing or using Fitness Tracker, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our platform.
        </p>

        <h3>2. User Responsibilities</h3>
        <p>
          Users are responsible for maintaining the confidentiality of their accounts and agree not to share login credentials. Users must also use the platform in compliance with applicable laws and regulations.
        </p>

        <h3>3. Privacy</h3>
        <p>
          We respect your privacy and handle personal data in accordance with our Privacy Policy. By using Fitness Tracker, you consent to our data practices as described in the Privacy Policy.
        </p>

        <h3>4. Modifications</h3>
        <p>
          We reserve the right to modify or update these Terms of Service at any time. It is your responsibility to review these terms periodically for changes.
        </p>

        <h3>5. Termination</h3>
        <p>
          We may terminate or suspend your access to Fitness Tracker without notice for violations of these Terms of Service or any other misconduct.
        </p>

        <h3>6. Contact Information</h3>
        <p>
          For any questions or concerns regarding these Terms of Service, please contact us at <a href="mailto:contact@fitnesstracker.com">contact@fitnesstracker.com</a>.
        </p>

        <p className="terms-of-service-text">
          Last updated: [30/09/2022]
        </p>
      </div>
    </section>
  );
}

export default TermsOfService;
