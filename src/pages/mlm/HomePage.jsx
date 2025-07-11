import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Users,
  Target,
  Heart,
  Leaf,
  Droplets,
  Scissors,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import snth from "../../assets/snth.jpg"; // Adjust the path as necessary
import Footer from "../../components/shopping-view/footer";

export default function Homepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Saponification & Toiletry Training",
      items: ["Washing soap", "Tie soap", "Chloride", "Liquid soap"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Modern Crop & Animal Farming",
      items: [
        "Chicken",
        "Fish",
        "Pig",
        "Cassava",
        "Palm tree",
        "Green House farm",
      ],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Cosmetology",
      items: [
        "Professional beauty training",
        "Skill development",
        "Career preparation",
      ],
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
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
              <Link to="/product">
                <a className="hover:text-emerald-400 transition-colors">
                  Product
                </a>
              </Link>
              <Link to="/contact-vendor">
                <a className="hover:text-emerald-400 transition-colors">
                  Get code
                </a>
              </Link>

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

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[#35441B] backdrop-blur-sm"></div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-20 pb-10">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Empowering people for Change
          </h1>

          <p className="text-xl sm:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
            Building sustainable futures through food security, skills training,
            and community empowerment
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/auth/register">
              <button className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-emerald-500/25 transform hover:scale-105 transition-all duration-300">
                Get Involved
              </button>
            </Link>
            <Link to="/product">
              <button className="border border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#9EA73E] mb-8">
                Our Story &
                <span className="block bg-[#35441B] bg-clip-text text-transparent">
                  Leadership
                </span>
              </h2>

              <p className="text-black text-lg mb-6 leading-relaxed">
                Founded and led by CEO{" "}
                <strong className="text-emerald-400">
                  Willifred Kebeh Bemah
                </strong>
                , Say No To Hunger is driven by the belief that sustainable
                change begins with equipping people with the tools they need to
                thrive.
              </p>

              <p className="text-black text-lg mb-8 leading-relaxed">
                We are a dynamic non-profit organization dedicated to empowering
                individuals and uplifting communities through our multi-faceted
                approach to development and growth.
              </p>

              <button className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Meet Our Team
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
            </div>

            <div className="space-y-8">
              {/* Vision Card */}
              <div className="bg-[#35441B] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-emerald-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Vision</h3>
                </div>
                <p className="text-white leading-relaxed">
                  To be a leading network in providing food security and
                  empowerment solutions across communities, fostering an
                  environment of growth, sustainability, and resilience.
                </p>
              </div>

              {/* Mission Card */}
              <div className="bg-[#35441B] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-purple-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Mission</h3>
                </div>
                <p className="text-white leading-relaxed">
                  To improve lives through effective distribution of food
                  products, empower individuals and communities with financial
                  resources, and provide essential skills training for personal
                  and professional growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-[#9EA73E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Our
              <span className="bg-[#35441B] bg-clip-text text-transparent">
                {" "}
                Services
              </span>
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Comprehensive training programs designed to empower communities
              with practical skills and sustainable solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:shadow-2xl hover:shadow-emerald-500/10 transform hover:scale-105 transition-all duration-500"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                  {service.title}
                </h3>

                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-center text-black"
                    >
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 opacity-70"></div>
                      {item}
                    </li>
                  ))}
                </ul>

                <button className="mt-6 w-full bg-gradient-to-r from-white/10 to-white/5 border border-white/20 text-white py-3 rounded-xl font-semibold hover:bg-gradient-to-r hover:from-emerald-500/20 hover:to-blue-500/20 hover:border-emerald-400/50 transition-all duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Are Special Section */}
      <section className="py-20 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#35441B] mb-6">
              Why We Are
              <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                {" "}
                Special
              </span>
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Our unique distributor platform offers transparent pricing and
              rewarding commission structure designed for your success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Registration Fee */}
            <div className="bg-[#9EA73E] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl mb-6">
                <span className="text-white font-bold text-2xl">$15</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Registration Fee
              </h3>
              <p className="text-black leading-relaxed mb-4">
                A one-time fee of $15 to join as a distributor. This fee grants
                you access to our distributor platform, essential training
                platforms, and your personalized e-commerce link.
              </p>
              <p className="text-sm text-white italic">
                *This fee does not contribute to your PV or GV.
              </p>
            </div>

            {/* Point Value System */}
            <div className="bg-[#9EA73E] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-6">
                <span className="text-white font-bold text-xl">PV</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Point Value System
              </h3>
              <p className="text-black leading-relaxed mb-4">
                Each product has an assigned Point Value. For simplicity, $1 in
                product sales equals 1 PV.
              </p>
              <div className="space-y-2 text-sm text-white">
                <div className="flex justify-between">
                  <span>$5 product</span>
                  <span className="text-white">= 5 PV</span>
                </div>
                <div className="flex justify-between">
                  <span>$20 product</span>
                  <span className="text-white">= 20 PV</span>
                </div>
              </div>
            </div>

            {/* Volume Tracking */}
            <div className="bg-[#9EA73E] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 md:col-span-2 lg:col-span-1">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Volume Tracking
              </h3>
              <div className="space-y-4 text-black">
                <div>
                  <h4 className="font-semibold text-white mb-2">
                    Personal Volume (PV)
                  </h4>
                  <p className="text-sm">
                    Total PV from your personal purchases within a commission
                    period (weekly).
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">
                    Group Volume (GV)
                  </h4>
                  <p className="text-sm">
                    Total PV from you and your entire downline organization
                    within a commission period (weekly).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Commission Period Notice */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center bg-[#35441B] border border-yellow-500/30 rounded-full px-8 py-4">
              <Target className="w-6 h-6 text-yellow-400 mr-3" />
              <span className="text-white font-semibold">
                Commission Period: All qualifications and earnings are
                calculated on a weekly basis
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join us in our mission to empower communities and create lasting
            change. Together, we can build a future where no one goes hungry.
          </p>

          <div className="border-2 p-2 border-white rounded-md">
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              All you need to do is to purchase a registration code of $15, and
              register on the platform.
            </p>
            <button className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              Register Now
            </button>
          </div>
        </div>
      </section>

      {/* Compensation Plan Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-slate-900 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Nourish & Grow
              <span className="block bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Compensation Plan
              </span>
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Multiple earning opportunities designed to reward your efforts and
              growth
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Direct Sponsor Bonus */}
            <div className="bg-gradient-to-br from-emerald-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl mr-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Direct Sponsor Bonus
                  </h3>
                  <p className="text-emerald-400 font-semibold">(Fast Start)</p>
                </div>
              </div>
              <p className="text-white leading-relaxed mb-4">
                For every new distributor you personally sponsor who pays the
                $15 registration fee, you receive a{" "}
                <span className="text-emerald-400 font-bold">
                  $5 Direct Sponsor Bonus
                </span>
                .
              </p>
              <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-lg p-4">
                <p className="text-emerald-300 text-sm font-semibold">
                  This is a one-time bonus per new registration
                </p>
              </div>
            </div>

            {/* Personal Volume Commission */}
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mr-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Personal Volume
                  </h3>
                  <p className="text-purple-400 font-semibold">Commission</p>
                </div>
              </div>
              <p className="text-white leading-relaxed mb-6">
                You earn a direct commission on your own personal sales (PV)
                each month. The commission rate increases as your personal
                purchase volume grows.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center bg-white/5 rounded-lg p-3">
                  <span className="text-white">0 - 99 PV</span>
                  <span className="text-emerald-400 font-bold">15%</span>
                </div>
                <div className="flex justify-between items-center bg-white/5 rounded-lg p-3">
                  <span className="text-white">100 - 299 PV</span>
                  <span className="text-blue-400 font-bold">20%</span>
                </div>
                <div className="flex justify-between items-center bg-white/5 rounded-lg p-3">
                  <span className="text-white">300+ PV</span>
                  <span className="text-purple-400 font-bold">25%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Group Volume Commission */}
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mr-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">
                  Group Volume Commission
                </h3>
                <p className="text-blue-400 font-semibold">
                  Earn from your downline network
                </p>
              </div>
            </div>

            <p className="text-white leading-relaxed mb-8">
              You earn a percentage of the Commissionable Volume (CV) generated
              by distributors in your downline across multiple levels.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Primary Levels */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4">
                  Primary Levels
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-lg p-4">
                    <span className="text-white font-semibold">Level 1</span>
                    <span className="text-emerald-400 font-bold text-xl">
                      10%
                    </span>
                  </div>
                  <div className="flex justify-between items-center bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-4">
                    <span className="text-white font-semibold">Level 2</span>
                    <span className="text-blue-400 font-bold text-xl">7%</span>
                  </div>
                  <div className="flex justify-between items-center bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-4">
                    <span className="text-white font-semibold">Level 3</span>
                    <span className="text-purple-400 font-bold text-xl">
                      5%
                    </span>
                  </div>
                  <div className="flex justify-between items-center bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-lg p-4">
                    <span className="text-white font-semibold">Level 4</span>
                    <span className="text-pink-400 font-bold text-xl">3%</span>
                  </div>
                  <div className="flex justify-between items-center bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-lg p-4">
                    <span className="text-white font-semibold">Level 5</span>
                    <span className="text-orange-400 font-bold text-xl">
                      2%
                    </span>
                  </div>
                </div>
              </div>

              {/* Extended Levels */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4">
                  Extended Levels
                </h4>
                <div className="bg-gradient-to-r from-yellow-500/20 to-cyan-500/20 rounded-lg p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-white font-semibold text-lg">
                      Levels 6-10
                    </span>
                    <span className="text-yellow-400 font-bold text-2xl">
                      1%
                    </span>
                  </div>
                  <p className="text-white text-sm">
                    Earn 1% commission on each of levels 6 through 10 in your
                    downline network
                  </p>
                </div>

                <div className="mt-6 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-cyan-500/30 rounded-lg p-4">
                  <p className="text-cyan-300 text-sm font-semibold text-center">
                    Total potential: Up to 10 levels deep!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
