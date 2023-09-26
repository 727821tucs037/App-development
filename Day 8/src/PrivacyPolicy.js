import React from 'react';
import './PrivacyPolicy.css'; // Import your CSS file
import Header from './Header';
function PrivacyPolicy() {
  return (
    <section className="privacy-policy-container">
        <Header />
      <div className="privacy-policy-content">
        <h2 className="privacy-policy-heading">Privacy Policy</h2>
        <p className="privacy-policy-text">
          Welcome to Fitness Tracker! This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you use our platform.
        </p>

        <h3>1. Information We Collect</h3>
        <p>
          We may collect personal and non-personal information when you use Fitness Tracker. Personal information may include your name, email address, and other details you provide.
        </p>

        <h3>2. How We Use Your Information</h3>
        <p>
          We may use your information to provide and improve our services, personalize your experience, and communicate with you. We do not sell your personal information to third parties.
        </p>

        <h3>3. Cookies</h3>
        <p>
          We use cookies and similar tracking technologies to enhance your experience and collect information about your usage patterns. You can manage your cookie preferences in your browser settings.
        </p>

        <h3>4. Third-Party Services</h3>
        <p>
          Fitness Tracker may contain links to third-party websites or services. We are not responsible for the practices and policies of third-party services.
        </p>

        <h3>5. Security</h3>
        <p>
          We take security measures to protect your personal information. However, no method of data transmission over the internet is entirely secure.
        </p>

        <h3>6. Changes to this Privacy Policy</h3>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
        </p>

        <h3>7. Contact Us</h3>
        <p>
          If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:privacy@fitnesstracker.com">privacy@fitnesstracker.com</a>.
        </p>

        <p className="privacy-policy-text">
          Last updated: [Date]
        </p>
      </div>
    </section>
  );
}

export default PrivacyPolicy;
