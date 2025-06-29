import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import {
  Eye,
  EyeOff,
  User,
  Mail,
  Phone,
  Lock,
  Tag,
  UserPlus,
  ArrowRight,
  Heart,
  CheckCircle,
  Shield,
} from "lucide-react";

import snth from "../../assets/snth.jpg";
import network from "../../assets/network.jpg";
import loginbg from "../../assets/loginbg.jpg";
import { url } from "../../store/api";

const SignupPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    referredBy: "",
    name: "",
    username: "",
    email: "",
    phoneNumber: "",
    code: "",
    // role: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  useEffect(() => {
    const r = searchParams.get("r");
    if (r) {
      setFormData((prevData) => ({ ...prevData, referredBy: r }));
    }
  }, [searchParams]);

  // Password strength checker
  useEffect(() => {
    const password = formData.password;
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    setPasswordStrength(strength);
  }, [formData.password]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "username" ? value.trim().toLowerCase() : value,
    });

    // Clear error when user types
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (
      !formData.name ||
      !formData.username ||
      !formData.code ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(`${url}auth/register`, formData);
      navigate("/auth/login");
    } catch (err) {
      console.error("Signup failed:", err);
      setError(
        err.response?.data?.message || "Signup failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength === 0) return "bg-gray-300";
    if (passwordStrength === 1) return "bg-red-500";
    if (passwordStrength === 2) return "bg-yellow-500";
    if (passwordStrength === 3) return "bg-blue-500";
    return "bg-[#35441B]";
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength === 0) return "Enter password";
    if (passwordStrength === 1) return "Weak";
    if (passwordStrength === 2) return "Fair";
    if (passwordStrength === 3) return "Good";
    return "Strong";
  };

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      {/* Main Container */}
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Hero Content */}
        <div className="hidden lg:block order-2 lg:order-1">
          <div className="relative">
            {/* Background Image with Overlay */}
            <div
              className="h-[700px] rounded-3xl bg-cover bg-center bg-no-repeat relative overflow-hidden"
              style={{ backgroundImage: `url(${loginbg})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/80 via-blue-600/70 to-purple-600/80"></div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-center text-white">
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <UserPlus className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  <h2 className="text-4xl font-bold mb-4">Join Our Mission</h2>
                  <p className="text-xl text-white/90 mb-8 max-w-md">
                    Become part of a community dedicated to empowering lives and
                    creating sustainable change
                  </p>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <CheckCircle className="w-6 h-6 text-emerald-300" />
                      <span>Skills Training Programs</span>
                    </div>
                    <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <Shield className="w-6 h-6 text-blue-300" />
                      <span>Community Empowerment</span>
                    </div>
                    <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <Heart className="w-6 h-6 text-pink-300" />
                      <span>Food Security Solutions</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                      <div className="text-2xl font-bold">5K+</div>
                      <div className="text-sm text-white/80">Members</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                      <div className="text-2xl font-bold">100+</div>
                      <div className="text-sm text-white/80">Programs</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full max-w-lg mx-auto lg:mx-0 order-1 lg:order-2">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl">
            {/* Logo and Header */}
            <div className="text-center mb-8">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <img
                    src={snth}
                    alt="SNTH Logo"
                    className="w-20 h-20 rounded-2xl shadow-lg"
                  />
                  <div className="absolute -top-2 -right-2">
                    <UserPlus className="w-6 h-6 text-emerald-400 animate-pulse" />
                  </div>
                </div>
              </div>

              <h1 className="text-3xl font-bold text-white mb-2">
                Join Us Now!
              </h1>
              <p className="text-gray-300">
                Start by creating your SNTH account and be part of the change
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-xl">
                <p className="text-red-300 text-sm text-center font-medium">
                  {error}
                </p>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Referrer ID */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Tag className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="referredBy"
                  value={formData.referredBy}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300"
                  placeholder="Referrer ID (optional)"
                />
              </div>

              {/* Full Name */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300"
                  placeholder="Full name *"
                  required
                />
              </div>

              {/* Username */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300"
                  placeholder="Username *"
                  required
                />
              </div>

              {/* Email */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300"
                  placeholder="Email (optional)"
                />
              </div>

              {/* Phone Number */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Phone className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300"
                  placeholder="Phone number (optional)"
                />
              </div>

              {/* Package Code */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Tag className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="code"
                  value={formData.code}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300"
                  placeholder="Package code *"
                  required
                />
                <div className="mt-2 text-center">
                  <span className="text-gray-300 text-sm">
                    Don't have a code?{" "}
                    <Link
                      to="/contact-vendor"
                      className="text-emerald-400 hover:text-emerald-300 font-semibold hover:underline transition-colors"
                    >
                      Get Code
                    </Link>
                  </span>
                </div>
              </div>

              {/* Password */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-12 pr-12 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300"
                  placeholder="Password *"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>

              {/* Password Strength Indicator */}
              {formData.password && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">
                      Password strength:
                    </span>
                    <span
                      className={`text-sm font-medium ${
                        passwordStrength >= 3
                          ? "text-green-400"
                          : passwordStrength >= 2
                          ? "text-blue-400"
                          : passwordStrength >= 1
                          ? "text-yellow-400"
                          : "text-red-400"
                      }`}
                    >
                      {getPasswordStrengthText()}
                    </span>
                  </div>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4].map((level) => (
                      <div
                        key={level}
                        className={`h-2 flex-1 rounded-full transition-colors ${
                          level <= passwordStrength
                            ? getPasswordStrengthColor()
                            : "bg-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Confirm Password */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full pl-12 pr-12 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300"
                  placeholder="Confirm password *"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>

              {/* Password Match Indicator */}
              {formData.confirmPassword && (
                <div className="flex items-center gap-2">
                  {formData.password === formData.confirmPassword ? (
                    <>
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-green-400">
                        Passwords match
                      </span>
                    </>
                  ) : (
                    <>
                      <div className="w-4 h-4 rounded-full border-2 border-red-400"></div>
                      <span className="text-sm text-red-400">
                        Passwords don't match
                      </span>
                    </>
                  )}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-emerald-500/25 transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 mt-6"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Creating Account...
                  </>
                ) : (
                  <>
                    Create Account
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>

            {/* Footer */}
            <div className="mt-8 text-center">
              <p className="text-gray-300">
                Already have an account?{" "}
                <Link
                  to="/auth/login"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold hover:underline transition-colors"
                >
                  Sign in here
                </Link>
              </p>

              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-gray-400 text-xs">
                  By creating an account, you agree to our{" "}
                  <button className="text-blue-400 hover:text-blue-300 hover:underline transition-colors">
                    Terms of Service
                  </button>{" "}
                  and{" "}
                  <button className="text-blue-400 hover:text-blue-300 hover:underline transition-colors">
                    Privacy Policy
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Hero Background */}
      <div className="lg:hidden fixed inset-0 -z-10">
        <div
          className="h-full w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${loginbg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-purple-900/90 to-slate-900/90"></div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
