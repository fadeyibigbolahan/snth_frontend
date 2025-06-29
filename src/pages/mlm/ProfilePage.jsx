import React, { useEffect, useState } from "react";
import {
  LogOut,
  UserPen,
  KeyRound,
  TrendingUp,
  ArrowLeft,
  Settings,
  Star,
  Mail,
  Calendar,
} from "lucide-react";

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    username: "johndoe123",
    email: "john@example.com",
    joinDate: "January 2024",
  });
  const [loading, setLoading] = useState(false);

  // Mock functions for demo
  const logout = () => console.log("Logout clicked");
  const goBack = () => console.log("Go back clicked");
  const navigateTo = (path) => console.log(`Navigate to: ${path}`);

  const actionCards = [
    {
      icon: UserPen,
      title: "UPDATE PROFILE",
      subtitle: "Edit your personal information",
      color: "from-blue-500 to-blue-600",
      action: () => navigateTo("/update-profile"),
    },
    {
      icon: KeyRound,
      title: "CHANGE PASSWORD",
      subtitle: "Update your security credentials",
      color: "from-purple-500 to-purple-600",
      action: () => navigateTo("/change-password"),
    },
    {
      icon: TrendingUp,
      title: "AFFILIATE UPGRADE",
      subtitle: "Unlock premium features",
      color: "from-green-500 to-green-600",
      action: () => navigateTo("/dashboard/affiliates-upgrade"),
    },
    {
      icon: Settings,
      title: "SETTINGS",
      subtitle: "Manage app preferences",
      color: "from-gray-500 to-gray-600",
      action: () => navigateTo("/settings"),
    },
  ];

  if (loading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-emerald-600 to-emerald-700 shadow-lg">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative flex items-center justify-between p-6 max-w-4xl mx-auto">
          <button
            onClick={goBack}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-200"
          >
            <ArrowLeft size={20} className="text-white" />
          </button>
          <h1 className="text-xl font-bold text-white">Profile</h1>
          <div className="w-10"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Profile Section */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200/60 overflow-hidden mb-8">
          <div className="relative h-32 bg-gradient-to-r from-emerald-500 to-teal-600">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          <div className="relative px-8 pb-8 -mt-16">
            <div className="flex flex-col items-center text-center">
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 p-1 shadow-2xl">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                    <div className="w-28 h-28 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                      <span className="text-3xl font-bold text-slate-600">
                        {profile?.name?.charAt(0) || "U"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                  <Star size={16} className="text-white fill-current" />
                </div>
              </div>

              {/* Profile Info */}
              <div className="space-y-4 w-full max-w-md">
                <div>
                  <h2 className="text-3xl font-bold text-slate-800 mb-2">
                    {profile?.name || "Loading..."}
                  </h2>
                  <div className="flex items-center justify-center gap-2 text-slate-600">
                    <span className="text-sm">@{profile?.username}</span>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-6 text-sm text-slate-500 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <Mail size={16} />
                    <span>{profile?.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>Joined {profile?.joinDate}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {actionCards.map((card, index) => (
            <button
              key={index}
              onClick={card.action}
              className="group relative bg-white rounded-xl shadow-lg border border-slate-200/60 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>
              <div className="relative p-6 flex items-center gap-4">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-r ${card.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <card.icon size={24} className="text-white" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-bold text-slate-800 group-hover:text-slate-900 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">{card.subtitle}</p>
                </div>
                <div className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-slate-400 transition-colors"></div>
              </div>
            </button>
          ))}
        </div>

        {/* Logout Button */}
        <div className="flex justify-center">
          <button
            onClick={logout}
            className="group flex items-center gap-3 px-8 py-4 bg-red-50 hover:bg-red-500 text-red-600 hover:text-white rounded-xl border-2 border-red-200 hover:border-red-500 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
          >
            <LogOut
              size={20}
              className="group-hover:rotate-12 transition-transform duration-300"
            />
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
