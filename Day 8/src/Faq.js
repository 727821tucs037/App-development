import React, { useState } from 'react';
import './Faq.css'; // Import your CSS file
import Header from './Header';
import Footer from './Footer';

function Faq() {
  // Define an array of FAQ items with questions and answers
  const faqData = [
    {
      question: 'What is Fitness Tracker?',
      answer: 'Fitness Tracker is a comprehensive platform that helps you track your fitness progress, manage your workouts, and plan your nutrition to achieve your health and wellness goals.'
    },
    {
      question: 'How can I get started?',
      answer: 'To get started, sign up for a Fitness Tracker account. Once logged in, you can explore workout plans, track your progress, and access nutrition guides.'
    },
    {
      question: 'Is Fitness Tracker free to use?',
      answer: 'Yes, Fitness Tracker offers a free basic membership with access to essential features. However, premium features and personalized plans are available with a subscription.'
    },
    // Add more FAQ items as needed
  ];

  // State to track which FAQ items are expanded
  const [expandedItems, setExpandedItems] = useState([]);

  // Function to toggle the expanded state of a FAQ item
  const toggleItem = (index) => {
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter((item) => item !== index));
    } else {
      setExpandedItems([...expandedItems, index]);
    }
  };

  return (
    <section className="faq-container">
        <Header />
      <div className="faq-content">
        <h2 className="faq-heading">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${expandedItems.includes(index) ? 'expanded' : ''}`}
              onClick={() => toggleItem(index)}
            >
              <div className="faq-question">{item.question}</div>
              <div className="faq-answer">{item.answer}</div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Faq;
