import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  Award,
  Globe,
  Car,
  Home,
  Users,
  DollarSign,
  Utensils,
  Menu,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import snth from "../../assets/snth.jpg"; // Adjust the path as necessary

// Mock images - replace with your actual imports
const mockImages = {
  food: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=500&h=300&fit=crop",
  money:
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
  trip: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=300&fit=crop",
  car: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500&h=300&fit=crop",
  appliances:
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=300&fit=crop",
  team: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=300&fit=crop",
};

const sections = [
  {
    title: "Business Grant",
    text: "By investing directly in our members' entrepreneurial ventures, we are not just providing funds; we are nurturing dreams and building a stronger, more prosperous future for all. This is another step in our commitment to empowering individuals beyond hunger.",
    img: mockImages.money,
    icon: DollarSign,
    gradient: "from-yellow-500 to-orange-600",
    delay: 100,
  },
  {
    title: "Car Award",
    text: "This prestigious award is designed to celebrate those who go above and beyond in advancing our mission of skill acquisition, food provision, and community empowerment. ",
    img: mockImages.car,
    icon: Car,
    gradient: "from-red-500 to-pink-600",
    delay: 300,
  },
  {
    title: "Home Appliances",
    text: "Empowering our members not just with financial benefits, but also with essential household appliances that add value to daily living to reduce expenses on appliances, making life easier also to motivate them.",
    img: mockImages.appliances,
    icon: Home,
    gradient: "from-purple-500 to-indigo-600",
    delay: 400,
  },
];

const ProductCard = ({ section, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = section.icon;

  return (
    <div
      className={`group relative transform transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
      style={{ transitionDelay: `${section.delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative overflow-hidden rounded-3xl bg-white shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 ${
          index % 2 !== 0 ? "md:flex-row-reverse" : ""
        } flex flex-col md:flex-row`}
      >
        {/* Animated background gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${section.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
        />

        {/* Image section */}
        <div className="relative md:w-1/2 h-64 md:h-auto overflow-hidden">
          <img
            src={section.img}
            alt={section.title}
            className="w-full h-full object-cover transition-transform duration-700 transform group-hover:scale-110"
          />

          {/* Overlay with icon */}
          <div
            className={`absolute inset-0 bg-gradient-to-r ${section.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
          />
          <div className="absolute top-4 left-4">
            <div
              className={`p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 transition-all duration-500 ${
                isHovered ? "scale-110 bg-white/30" : ""
              }`}
            >
              <Icon className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Floating particles effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-2 h-2 bg-white/40 rounded-full transition-all duration-1000 ${
                  isHovered ? "animate-bounce" : ""
                }`}
                style={{
                  left: `${20 + i * 30}%`,
                  top: `${30 + i * 20}%`,
                  animationDelay: `${i * 200}ms`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Content section */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center relative">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-r ${section.gradient} p-3 transform transition-transform duration-300 group-hover:rotate-12`}
              >
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                {section.title}
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed text-base md:text-lg group-hover:text-gray-700 transition-colors duration-300">
              {section.text}
            </p>

            {/* Action button */}
            <div className="pt-4">
              <button
                className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${section.gradient} text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0`}
              >
                Learn More
                <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-gradient-to-r opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity duration-500" />
        </div>
      </div>
    </div>
  );
};

const ProductPage = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleCards((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    const cards = document.querySelectorAll("[data-card]");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <img
              src={snth}
              alt="say no to hunger"
              className="w-[50px]"
              srcset=""
            />

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 text-white">
              <Link to="/">
                <a className="hover:text-emerald-400 transition-colors">Home</a>
              </Link>
              <ScrollLink to="about" smooth={true} duration={500}>
                <a className="hover:text-emerald-400 transition-colors">
                  About
                </a>
              </ScrollLink>
              <a className="hover:text-emerald-400 transition-colors">
                Product
              </a>
              <Link to="/contact-vendor">
                <a className="hover:text-emerald-400 transition-colors">
                  Get code
                </a>
              </Link>
              <a className="hover:text-emerald-400 transition-colors">
                Contact
              </a>
              <Link to="/auth/login">
                <a className="hover:text-emerald-400 transition-colors">
                  Signin
                </a>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-black/90 backdrop-blur-md rounded-lg mt-2 py-4">
              <div className="flex flex-col space-y-4 px-4 text-white">
                <Link to="/">
                  <a className="hover:text-emerald-400 transition-colors">
                    Home
                  </a>
                </Link>
                <ScrollLink to="about" smooth={true} duration={500}>
                  <a className="hover:text-emerald-400 transition-colors">
                    About
                  </a>
                </ScrollLink>
                <Link to="/product">
                  <a className="hover:text-emerald-400 transition-colors">
                    Products
                  </a>
                </Link>
                <Link to="/contact-vendor">
                  <a className="hover:text-emerald-400 transition-colors">
                    Get code
                  </a>
                </Link>
                <a className="hover:text-emerald-400 transition-colors">
                  Contact
                </a>
                <Link to="/auth/login">
                  <a className="hover:text-emerald-400 transition-colors">
                    Sign in
                  </a>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                backgroundSize: "30px 30px",
              }}
            />
          </div>
        </div>

        <div className="relative px-6 py-20 text-center">
          <div className="max-w-4xl mx-auto pt-14">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Products
              </span>{" "}
              &{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Training
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Discover our comprehensive reward system designed to transform
              your journey into success
            </p>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Rewards That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Inspire
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each reward is carefully crafted to motivate, celebrate, and
              empower your success journey
            </p>
          </div>

          <div className="space-y-16">
            {sections.map((section, index) => (
              <div key={index} data-card data-index={index} className="w-full">
                <ProductCard
                  section={section}
                  index={index}
                  isVisible={visibleCards.has(index)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join thousands of successful members who have transformed their
            lives through our reward system
          </p>
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            Get Started Today
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
