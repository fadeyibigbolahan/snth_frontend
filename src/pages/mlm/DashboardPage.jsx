import React, { useEffect, useState, useContext } from "react";
import {
  CreditCard,
  DollarSign,
  Package,
  Users,
  Copy,
  BriefcaseBusiness,
  Network,
} from "lucide-react";
// import { url } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { url } from "@/store/api";

const DashboardPage = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [invitationLink, setInvitationLink] = useState("");
  const [copied, setCopied] = useState(false);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    console.log("User:", user);
  }, [user]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`${url}auth/profile`, {
          withCredentials: true,
        });

        const data = await response.data;
        console.log("Profile Data:", data?.user); // Log response data
        setProfile(data?.user);
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  useEffect(() => {
    if (profile) {
      setInvitationLink(
        `https://saynotohunger.com/#/signup?r=${profile.username}`
      );
    }
  }, [profile]);

  // useEffect(() => {
  //   const fetchProfile = async () => {
  //     // console.log("Token:", localStorage.getItem("token"));

  //     try {
  //       const response = await fetch(`${url}users/profile`, {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `${localStorage.getItem("token")}`, // Ensure Bearer token format
  //         },
  //       });

  //       // console.log("Profile Response:", response);
  //       // console.log("Response Status:", response.status);

  //       if (!response.ok) {
  //         const errorText = await response.text(); // Log non-JSON responses (e.g., 401 errors)
  //         console.error("Error Response:", errorText);
  //         throw new Error(`Failed to fetch profile: ${errorText}`);
  //       }

  //       const data = await response.json();
  //       // console.log("Profile Data:", data); // Log response data
  //       setProfile(data);
  //     } catch (error) {
  //       console.error("Error fetching profile:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchProfile();
  // }, []);

  const handleCopy = (textToCopy) => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2 sec
      })
      .catch((err) => console.error("Failed to copy text: ", err));
  };

  return (
    <div className="flex flex-col gap-y-4 p-4 md:p-6">
      <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row">
        <h1 className="title">{`Hi, ${profile?.username || "User"}`}</h1>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="card">
          <div className="card-header">
            <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
              <CreditCard size={26} />
            </div>
            <p className="card-title">Credit Balance</p>
          </div>
          <div className="card-body bg-blue-500/20 transition-colors dark:bg-slate-950">
            <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">{`${
              profile?.earnings || "0.00"
            } USD`}</p>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
              <BriefcaseBusiness size={26} />
            </div>
            <p className="card-title">Point Value (PV)</p>
          </div>
          <div className="card-body bg-blue-500/20 transition-colors dark:bg-slate-950">
            <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">{`${
              profile?.pv || "0"
            }`}</p>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
              <BriefcaseBusiness size={26} />
            </div>
            <p className="card-title">Personal Volume (PV)</p>
          </div>
          <div className="card-body bg-blue-500/20 transition-colors dark:bg-slate-950">
            <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">{`${
              profile?.weeklyPV || "0"
            }`}</p>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
              <BriefcaseBusiness size={26} />
            </div>
            <p className="card-title">Group Volume (GV)</p>
          </div>
          <div className="card-body bg-blue-500/20 transition-colors dark:bg-slate-950">
            <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">{`${
              profile?.weeklyGV || "0"
            }`}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="card col-span-1 md:col-span-2 lg:col-span-4">
          <div className="card-header">
            <p className="card-title">Overview</p>
          </div>
          <div className="card-body flex flex-col gap-3 p-0 md:flex-row">
            <div className="flex h-[100px] w-full flex-row items-center justify-start gap-2 rounded-md bg-[#F1F5F9] p-4 md:w-1/2">
              <div className="w-fit rounded-full bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                <Package size={20} />
              </div>
              <div className="gap-0 p-0">
                <p className="font-bold">{`${
                  profile?.referrals.length || "0"
                }`}</p>
                <p className="text-sm">Downlines</p>
              </div>
            </div>
            <div className="flex h-[100px] w-full flex-row items-center justify-start gap-2 rounded-md bg-[#F1F5F9] p-4 md:w-1/2">
              <div className="w-fit rounded-full bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                <Package size={20} />
              </div>
              <div className="gap-0 p-0">
                <p className="font-bold">{`${
                  profile?.earnings || "0.00"
                } USD`}</p>
                <p className="text-sm">Earning Balance</p>
              </div>
            </div>
          </div>
          <div className="card-body flex flex-col gap-3 p-0 md:flex-row">
            <div className="flex h-[100px] w-full flex-row items-center justify-start gap-2 rounded-md bg-[#F1F5F9] p-4 md:w-1/2">
              <div className="w-fit rounded-full bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                <Package size={20} />
              </div>
              <div className="gap-0 p-0">
                <p className="font-bold">{`${
                  profile?.totalEarnings || "0.00"
                } USD`}</p>
                <p className="text-sm">Total Earnings</p>
              </div>
            </div>
            <div className="flex h-[100px] w-full flex-row items-center justify-start gap-2 rounded-md bg-[#F1F5F9] p-4 md:w-1/2">
              <div className="w-fit rounded-full bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                <Package size={20} />
              </div>
              <div className="gap-0 p-0">
                <p className="font-bold">{`${
                  profile?.totalWithdrawals || "0.00"
                } USD`}</p>
                <p className="text-sm">Total Withdrawals</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card col-span-1 md:col-span-2 lg:col-span-3">
          <div className="card-header">
            <p className="card-title">Affiliate Link</p>
          </div>
          <div className="relative card-body flex flex-row items-center justify-between gap-3 p-0">
            <div className="flex flex-col gap-2 p-0 w-[90%]">
              <p className="text-sm font-semibold text-black break-words w-full">
                {invitationLink}
              </p>
              <p className="text-xs text-gray-500">
                Copy and share your link to earn commissions.
              </p>
            </div>
            <Copy
              onClick={() => handleCopy(invitationLink)}
              className="cursor-pointer rounded-md bg-[#35441B] p-1 text-white shadow-lg absolute right-0"
            />
          </div>
          {copied && (
            <span style={{ color: "blue", marginLeft: "10px", fontSize: 12 }}>
              Copied!
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
