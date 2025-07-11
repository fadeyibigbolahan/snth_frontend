import React, { useEffect, useState } from "react";
import {
  CircleUserRound,
  ArrowLeft,
  MessageCircle,
  Phone,
  Star,
  ExternalLink,
} from "lucide-react";

// Mock data for vendors since we don't have the constants
const vendors = [
  {
    _id: 1,
    name: "Sierra Leone",
    url: "https://wa.me/+23278255632",
    rating: 4.9,
    responseTime: "~2 mins",
  },
  {
    _id: 2,
    name: "Nigeria",
    url: "https://wa.me/+2348060629000",
    rating: 4.9,
    responseTime: "~2 mins",
  },
  {
    _id: 3,
    name: "Liberia",
    url: "https://wa.me/+231886342048",
    rating: 4.9,
    responseTime: "~2 mins",
  },
];

const ContactVendorPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredVendor, setHoveredVendor] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleVendorClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-[#35441B] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <div
          className={`relative backdrop-blur-xl bg-black/20 border-b border-white/10 transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }`}
        >
          <div className="flex items-center justify-between p-6 max-w-4xl mx-auto">
            <button
              onClick={() => window.history.back()}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <ArrowLeft size={20} className="text-white" />
            </button>

            <div className="text-center">
              <h1 className="text-xl font-bold text-white">Coupon Vendors</h1>
              <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mx-auto mt-2"></div>
            </div>

            <div className="w-10 h-10"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 px-6 py-8 max-w-6xl mx-auto w-full">
          {/* Hero Section */}
          <div
            className={`text-center mb-12 transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Connect with
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {" "}
                Premium{" "}
              </span>
              Vendors
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Get instant access to exclusive deals and coupons from our
              verified vendors. Fast responses guaranteed!
            </p>
          </div>

          {/* Stats Bar */}
          <div
            className={`grid grid-cols-3 gap-4 mb-12 transition-all duration-1000 delay-500 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-2xl font-bold text-white">
                {vendors.length}+
              </div>
              <div className="text-gray-400 text-sm">Active Vendors</div>
            </div>
            <div className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-2xl font-bold text-white">4.8</div>
              <div className="text-gray-400 text-sm">Avg Rating</div>
            </div>
            <div className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-2xl font-bold text-white">&lt;5min</div>
              <div className="text-gray-400 text-sm">Response Time</div>
            </div>
          </div>

          {/* Vendors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vendors.map((vendor, index) => (
              <div
                key={vendor._id}
                className={`group relative transition-all duration-700 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${700 + index * 100}ms` }}
                onMouseEnter={() => setHoveredVendor(vendor._id)}
                onMouseLeave={() => setHoveredVendor(null)}
              >
                <div
                  className="relative p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer"
                  onClick={() => handleVendorClick(vendor.url)}
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <CircleUserRound size={24} className="text-white" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-lg">
                            {vendor.name}
                          </h3>
                          <div className="flex items-center space-x-1">
                            <Star
                              size={14}
                              className="text-yellow-400 fill-current"
                            />
                            <span className="text-gray-300 text-sm">
                              {vendor.rating}
                            </span>
                          </div>
                        </div>
                      </div>
                      <ExternalLink
                        size={16}
                        className="text-gray-400 group-hover:text-white transition-colors duration-300"
                      />
                    </div>

                    {/* Response Time */}
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-gray-300 text-sm">
                        Responds {vendor.responseTime}
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <div className="flex-1 flex items-center justify-center py-3 px-4 rounded-2xl bg-[#35441B]/20 border border-green-500/30 hover:bg-[#35441B]/30 transition-all duration-300">
                        <MessageCircle
                          size={18}
                          className="text-green-400 mr-2"
                        />
                        <span className="text-white text-sm font-medium">
                          WhatsApp
                        </span>
                      </div>
                    </div>

                    {/* Hover Animation */}
                    <div
                      className={`absolute inset-0 rounded-3xl border-2 border-purple-400/50 transition-all duration-500 ${
                        hoveredVendor === vendor._id
                          ? "scale-100 opacity-100"
                          : "scale-95 opacity-0"
                      }`}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div
            className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="p-8 rounded-3xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-xl border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-3">
                Need Help Choosing?
              </h3>
              <p className="text-gray-300 mb-6">
                All vendors are verified and offer premium coupon services with
                fast response times.
              </p>
              <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300 cursor-pointer">
                <MessageCircle size={20} />
                <span>Contact Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactVendorPage;
