import React from 'react';
import './contact.css'; // Import your CSS file
import Header from './Header';
import Footer from './Footer';

function ContactUs() {
  return (
    <section className="contact-us-container">
        <Header />
      <div className="contact-us-content">
        <h2 className="contact-us-heading">Contact Us</h2>
        <p className="contact-us-description">
          Have questions or feedback? Feel free to reach out to us.
        </p>
        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="Name" />
          </div>
          <div className="form-group">
            <input type="email" placeholder="abcd@gmail.com" />
          </div>
          <div className="form-group">
            <textarea placeholder="Message"></textarea>
          </div>
          <button className="cta-button">Send Message</button>
        </form>
      </div>
      <Footer />
    </section>
  );
}

export default ContactUs;
