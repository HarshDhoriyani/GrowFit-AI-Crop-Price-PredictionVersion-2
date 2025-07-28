import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Updated image URL for the hero section background: Farmer with a tractor and crops
  const heroBackgroundImage = 'https://images.unsplash.com/photo-1544321035-6453e02d6b8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTY3MHwwfDF8c2VhcmNofDR8fGZhcm1lciUyMHRyYWN0b3IlMjBjcm9wc3xlbnwwfHx8fDE3MjEwMDExNTg&ixlib=rb-4.0.3&q=80&w=1080';

  return (
    <section 
      ref={ref} 
      className={`hero-section ${inView ? 'fade-in' : ''}`}
      style={{ backgroundImage: `linear-gradient(rgba(56, 142, 60, 0.7), rgba(56, 142, 60, 0.7)), url('${heroBackgroundImage}')` }}
    >
      <div className="hero-content">
        <h1>AI-Powered Crop Price Prediction</h1>
        <p>Empowering farmers with accurate forecasts for better planning and increased profitability.</p>
        <ScrollLink to="prediction-section" smooth={true} duration={500} className="btn btn-primary">
          Get Started
        </ScrollLink>
      </div>
    </section>
  );
};

export default Hero;
