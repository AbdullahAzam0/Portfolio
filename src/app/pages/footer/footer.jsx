import React from 'react';

const Footer = () => {
  return (
    <div className="bg-black text-white py-8">
      <div className="container mx-auto text-center">
        {/* Back to Top */}
        <div className="mb-4">
          <a href="#" className="text-white">
            &uarr; BACK TO TOP
          </a>
        </div>

        {/* Social Icons */}
        <div className="mb-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mx-2">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="mx-2">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mx-2">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="mailto:someone@example.com" className="mx-2">
            <i className="fas fa-envelope"></i>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm">
          &copy; 2020 Tomasz Gajda. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
