   import React from 'react';
   import { useInView } from 'react-intersection-observer';

   const FeaturesSection = () => {
     const { ref, inView } = useInView({
       triggerOnce: true,
       threshold: 0.2, // Trigger when 20% of the component is visible
     });

     const features = [
       { icon: "fas fa-chart-line", title: "Accurate Predictions", description: "Leverage advanced AI models for highly precise crop price forecasts." },
       { icon: "fas fa-mobile-alt", title: "Easy to Use", description: "Intuitive interface designed for farmers, accessible on any device." },
       { icon: "fas fa-handshake", title: "Empowering Farmers", description: "Make data-driven decisions to optimize planting and selling strategies." },
       { icon: "fas fa-lightbulb", title: "Insightful Data", description: "Understand market trends and factors influencing crop prices." },
     ];

     return (
       <section id="features-section" ref={ref} className={`features-section section-common ${inView ? 'slide-in-up' : ''}`}>
         <div className="container">
           <h2>Why Choose GrowFit?</h2>
           <div className="features-grid">
             {features.map((feature, index) => (
               <div key={index} className="feature-item">
                 <i className={`${feature.icon} feature-icon`}></i>
                 <h3>{feature.title}</h3>
                 <p>{feature.description}</p>
               </div>
             ))}
           </div>
         </div>
       </section>
     );
   };

   export default FeaturesSection;
   