import React from 'react';
import { FaTwitter, FaYoutube, FaInstagram, FaFacebook, FaDiscord } from 'react-icons/fa';

const links = [
  { href: 'https://x.com/VALORANTukn?mx=2', icon: <FaTwitter /> },
  { href: 'https://www.youtube.com/@Valorant', icon: <FaYoutube /> },
  { href: 'https://www.instagram.com/valorant/', icon: <FaInstagram /> },
  { href: 'https://www.facebook.com/VALORANT', icon: <FaFacebook /> },
  { href: 'https://discord.com/invite/valorant', icon: <FaDiscord /> }
];

const Footer = () => {
  return (
    <footer className="w-screen bg-gray-500 py-4 text-black">
      <div className="flex justify-center gap-4">
        {links.map((link, index) => (
          <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
            {link.icon}
          </a>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {/* Add your logo image URLs in the src */}
        <img 
          src="img/logo.webp" 
          alt="Logo 1" 
          className="w-20 h-auto object-contain" 
        />
        <img 
          src="img/logo3.png" 
          alt="Logo 2" 
          className="w-16 h-auto object-contain" 
        />
      </div>
      <div className="flex flex-wrap justify-center mt-4 px-4">
        <p className="text-xs sm:text-sm text-white text-center mt-2">
          © 2020-2024 Riot Games, Inc. All rights reserved. Riot Games, the Riot Games logo, VALORANT, and all related logos are trademarks or registered trademarks of Riot Games, Inc.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-4 px-4">
        {/* Text elements wrap on smaller devices */}
        <h1 className="text-white text-sm whitespace-nowrap">Privacy Notice</h1>
        <h1 className="text-white text-sm whitespace-nowrap">Terms of Service</h1>
        <h1 className="text-white text-sm whitespace-nowrap">Company Information</h1>
        <h1 className="text-white text-sm whitespace-nowrap">Cookie Preferences</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {/* Logos wrap properly on smaller screens */}
        <img 
          src="img/logo6.jpg" 
          alt="Logo 6" 
          className="w-24 h-24 object-contain" 
        />
        <img 
          src="img/logo5.png" 
          alt="Logo 5" 
          className="w-24 h-auto object-contain" 
        />
        <img 
          src="img/logo4.png" 
          alt="Logo 4" 
          className="w-24 h-auto object-contain" 
        />
      </div>
    </footer>
  );
};

export default Footer;
