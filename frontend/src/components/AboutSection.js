import React from 'react';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // New image URL for the About section: Wheat field
  const aboutImage = 'https://images.unsplash.com/photo-1518977676601-527e0b57e79a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTY3MHwwfDF8c2VhcmNofDR8fHdoZWF0JTIwZmllbGR8ZW58MHx8fHwxNzIwOTk5NzEw&ixlib=rb-4.0.3&q=80&w=1080';

  return (
    <section id="about-section" ref={ref} className={`about-section section-common ${inView ? 'slide-in-up' : ''}`}>
      <div className="container">
        <h2>About GrowFit: AI-Powered Crop Price Prediction</h2>
        <p className="section-description">GrowFit is an innovative platform dedicated to empowering the agricultural community with data-driven insights. Our mission is to provide accurate and timely crop price predictions, helping farmers, traders, and agricultural businesses make smarter decisions.</p>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Our Vision</h3>
            <p>To revolutionize agriculture by making advanced AI technology accessible, fostering sustainable practices, and improving the economic well-being of farmers worldwide.</p>
            
            <h3>How It Works</h3>
            <p>Our sophisticated AI model analyzes a multitude of factors including historical market prices, regional data, seasonal patterns, soil types, weather conditions (rainfall, temperature, humidity), fertilizer usage, market demand, and supply quantities. By identifying complex correlations within this data, GrowFit provides robust and reliable price forecasts.</p>
          </div>
          <div className="about-image">
            <img 
              src={aboutImage} 
              alt="About GrowFit" 
              onError={(e) => { e.target.onerror = null; e.target.src="https://via.placeholder.com/400x300?text=Image+Load+Error" }} 
            />
          </div>
        </div>

        <h3>Our Commitment</h3>
        <ul className="commitment-list">
          <li><i className="fas fa-check-circle"></i> **Accuracy:** We continuously refine our models with the latest data and advanced algorithms to ensure the highest possible prediction accuracy.</li>
          <li><i className="fas fa-check-circle"></i> **Accessibility:** We strive to make our platform user-friendly and accessible to everyone, regardless of their technical expertise.</li>
          <li><i className="fas fa-check-circle"></i> **Impact:** We believe in the power of technology to drive positive change in agriculture, leading to more efficient markets and prosperous farming communities.</li>
        </ul>
        
        <p className="contact-prompt">For more information or inquiries, please contact us at <a href="mailto:info@growfit.com">info@growfit.com</a>.</p>
      </div>
    </section>
  );
};

export default AboutSection;
