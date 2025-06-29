import React, { useState, useEffect } from "react";
import axios from "axios";
import { ChevronRightCircle, Package, Sparkles } from "lucide-react";
import { url } from "../../api"; // Ensure this is the correct API base URL
import { useAuth } from "../contexts/AuthContext";

const AffiliateUpgradePage = () => {
  const [packages, setPackages] = useState([]);
  const [clickedPackage, setClickedPackage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [upgradeLoading, setUpgradeLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const { user, updateUser } = useAuth(); // Ensure updateUser is available to refresh user data

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await axios.get(`${url}package`);
        setPackages(response.data);
      } catch (err) {
        setError("Failed to load packages.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  const handleUpgrade = async () => {
    if (!clickedPackage) {
      alert("Please select a package first.");
      return;
    }

    setUpgradeLoading(true);
    setError("");
    setSuccessMessage("");

    try {
      const response = await axios.put(
        `${url}package/upgrade-package`,
        {
          newPackageId: clickedPackage._id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${localStorage.getItem("token")}`, // Ensure Bearer token format
          },
        }
      );

      setSuccessMessage(response.data.message || "Upgrade successful!");

      // Update user data after upgrade
      updateUser();
    } catch (err) {
      setError(err.response?.data?.message || "Upgrade failed. Try again.");
      console.error(err);
    } finally {
      setUpgradeLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-y-4">
      <h1 className="title">Package Upgrade</h1>
      <div className="flex flex-col gap-y-4">
        <h2 className="text-xs font-semibold md:text-lg">
          Select a package for your SNTH Account upgrade
        </h2>

        {loading ? (
          <p>Loading packages...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="flex w-full flex-col items-center justify-between md:flex-row">
            <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 md:w-[420px]">
              {packages.map((p, index) => (
                <div
                  onClick={() => setClickedPackage(p)}
                  key={index}
                  className={`relative flex w-full cursor-pointer flex-row gap-2 rounded-md border bg-white p-2 hover:bg-[#35441B50] md:w-[200px] ${
                    clickedPackage?._id === p?._id
                      ? "border-2 border-green-400"
                      : ""
                  }`}
                >
                  <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-green-200">
                    <Package size={20} color="green" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-base font-semibold">{p.name}</h3>
                    <h3 className="text-xs font-semibold text-black/50">
                      USD {p.price}
                    </h3>
                  </div>
                  {user?.package === p?._id && (
                    <Sparkles size={15} className="absolute right-2" />
                  )}
                </div>
              ))}
            </div>

            {clickedPackage && (
              <div className="mt-4 flex flex-col items-start justify-start gap-4 md:w-1/2 w-full">
                <p className="text-gray-500">Package benefits</p>
                <div className="flex md:flex-row flex-col gap-2 md:gap-4">
                  <ul className="flex flex-col gap-2 md:gap-4">
                    <li className="flex items-center justify-start gap-2 text-sm">
                      <ChevronRightCircle size={16} /> {clickedPackage.PV} PV
                    </li>
                    <li className="flex items-center justify-start gap-2 text-sm">
                      <ChevronRightCircle size={16} />
                      USD {clickedPackage.price * 0.2} Signup Bonus
                    </li>
                  </ul>
                  <ul className="flex flex-col gap-2 md:gap-4">
                    <li className="flex items-center justify-start gap-2 text-sm">
                      <ChevronRightCircle size={16} />
                      Earn up to level {clickedPackage.commissionLevels.length}
                    </li>
                    <li className="flex items-center justify-start gap-2 text-sm">
                      <ChevronRightCircle size={16} />
                      Unlimited referrals
                    </li>
                  </ul>
                </div>

                {error && <p className="text-red-500">{error}</p>}
                {successMessage && (
                  <p className="text-green-500">{successMessage}</p>
                )}

                <button
                  onClick={handleUpgrade}
                  disabled={upgradeLoading}
                  className="flex w-full items-center justify-center rounded-md bg-[#35441B] p-2 text-white hover:bg-black md:w-2/3"
                >
                  {upgradeLoading ? "Upgrading..." : "Upgrade your package"}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AffiliateUpgradePage;
