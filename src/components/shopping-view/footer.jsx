import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black/90 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Say No To Hunger
            </div>
            <p className="text-gray-400 mb-4">
              Empowering communities through sustainable solutions and skills
              development.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-gray-400">
              <div className="hover:text-emerald-400 cursor-pointer transition-colors">
                About Us
              </div>
              <div className="hover:text-emerald-400 cursor-pointer transition-colors">
                Our Services
              </div>
              <div className="hover:text-emerald-400 cursor-pointer transition-colors">
                Get Involved
              </div>
              <div className="hover:text-emerald-400 cursor-pointer transition-colors">
                Contact
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
            <p className="text-gray-400 mb-2">Ready to join our mission?</p>
            <button className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Say No To Hunger. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
