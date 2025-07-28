   import React from 'react';
   import { useInView } from 'react-intersection-observer';

   const ContactSection = () => {
     const { ref, inView } = useInView({
       triggerOnce: true,
       threshold: 0.1,
     });

     const handleContactSubmit = (event) => {
       event.preventDefault();
       alert('Thank you for your message! We will get back to you soon.');
       // You would typically send this form data to a backend API here
       event.target.reset(); // Clear form
     };

     return (
       <section id="contact-section" ref={ref} className={`contact-section section-common ${inView ? 'slide-in-up' : ''}`}>
         <div className="container">
           <h2>Contact Us</h2>
           <p className="section-description">Have questions or feedback? We'd love to hear from you!</p>
           <div className="contact-content">
             <div className="contact-info">
               <h3>Get in Touch</h3>
               <p><i className="fas fa-map-marker-alt"></i> 123 Farm Lane, Agri-City, AG 12345</p>
               <p><i className="fas fa-phone"></i> +91 98765 43210</p>
               <p><i className="fas fa-envelope"></i> info@growfit.com</p>
             </div>
             <form className="contact-form" onSubmit={handleContactSubmit}>
               <div className="form-group">
                 <label htmlFor="contact-name">Your Name:</label>
                 <input type="text" id="contact-name" name="name" required />
               </div>
               <div className="form-group">
                 <label htmlFor="contact-email">Your Email:</label>
                 <input type="email" id="contact-email" name="email" required />
               </div>
               <div className="form-group">
                 <label htmlFor="contact-message">Message:</label>
                 <textarea id="contact-message" name="message" rows="5" required></textarea>
               </div>
               <button type="submit" className="btn btn-primary">Send Message</button>
             </form>
           </div>
         </div>
       </section>
     );
   };

   export default ContactSection;
   