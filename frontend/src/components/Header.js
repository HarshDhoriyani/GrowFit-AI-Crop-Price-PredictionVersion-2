   import React from 'react';
   import { Link as ScrollLink } from 'react-scroll';

   const Header = () => {
     return (
       <header>
         <nav className="navbar">
           <div className="container">
             <h1 className="logo">
               <ScrollLink to="root" smooth={true} duration={500}>GrowFit</ScrollLink>
             </h1>
             <ul className="nav-links">
               <li><ScrollLink to="root" smooth={true} duration={500}>Home</ScrollLink></li>
               <li><ScrollLink to="about-section" smooth={true} duration={500}>About</ScrollLink></li>
               <li><ScrollLink to="contact-section" smooth={true} duration={500}>Contact</ScrollLink></li>
             </ul>
           </div>
         </nav>
       </header>
     );
   };

   export default Header;
   