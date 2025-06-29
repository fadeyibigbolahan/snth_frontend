import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, User, Lock, ArrowRight, Heart } from "lucide-react";

import snth from "../../assets/snth.jpg";
import loginbg from "../../assets/loginbg.jpg";

import { useToast } from "@/components/ui/use-toast";
import { loginUser } from "@/store/auth-slice";
import { useDispatch } from "react-redux";

const SigninPage = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  // const { login } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { toast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "username" ? value.trim().toLowerCase() : value,
    });

    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    if (!formData.username || !formData.password) {
      setError("⚠️ Username and password are required");
      setLoading(false);
      return;
    }

    try {
      dispatch(loginUser(formData)).then((data) => {
        if (data?.payload?.success) {
          toast({
            title: data?.payload?.message,
          });
        } else {
          toast({
            title: data?.payload?.message,
            variant: "destructive",
          });
        }
      });
    } catch (error) {
      console.error("Login error:", error);
      setError(
        error.response?.data?.message ||
          "❌ Login failed! Please check your credentials."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      {/* Main Container */}
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Form */}
        <div className="w-full max-w-md mx-auto lg:mx-0">
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
                    <Heart className="w-6 h-6 text-emerald-400 animate-pulse" />
                  </div>
                </div>
              </div>

              <h1 className="text-3xl font-bold text-white mb-2">
                Welcome Back!
              </h1>
              <p className="text-gray-300">
                Sign in to your SNTH account and continue making a difference
              </p>
            </div>

            {/* Success Message */}
            {success && (
              <div className="mb-6 p-4 bg-emerald-500/20 border border-emerald-500/30 rounded-xl">
                <p className="text-emerald-300 text-sm text-center font-medium">
                  {success}
                </p>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-xl">
                <p className="text-red-300 text-sm text-center font-medium">
                  {error}
                </p>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Username Field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300"
                  placeholder="Enter your username"
                />
              </div>

              {/* Password Field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-12 pr-12 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300"
                  placeholder="Enter your password"
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

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-emerald-500/25 transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign In
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>

            {/* Footer */}
            <div className="mt-8 text-center">
              <p className="text-gray-300">
                Don't have an account?{" "}
                <Link
                  to="/auth/register"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold hover:underline transition-colors"
                >
                  Sign up here
                </Link>
              </p>

              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-gray-400 text-sm">
                  Forgot your password?{" "}
                  <button className="text-blue-400 hover:text-blue-300 font-medium hover:underline transition-colors">
                    Reset it
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Hero Content */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Background Image with Overlay */}
            <div
              className="h-[600px] rounded-3xl bg-cover bg-center bg-no-repeat relative overflow-hidden"
              style={{ backgroundImage: `url(${loginbg})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/80 via-blue-600/70 to-purple-600/80"></div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-center text-white">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <h2 className="text-4xl font-bold mb-4">
                    Empowering Communities
                  </h2>
                  <p className="text-xl text-white/90 mb-6 max-w-md">
                    Join our mission to create sustainable change through food
                    security and skills training
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                      <div className="text-2xl font-bold">1000+</div>
                      <div className="text-sm text-white/80">
                        Lives Impacted
                      </div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                      <div className="text-2xl font-bold">50+</div>
                      <div className="text-sm text-white/80">Communities</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                      <div className="text-2xl font-bold">24/7</div>
                      <div className="text-sm text-white/80">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Hero Section */}
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

export default SigninPage;
