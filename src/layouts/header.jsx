import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronsLeft, Bell } from "lucide-react";
import PropTypes from "prop-types";
import axios from "axios";
import { url } from "@/store/api";

import { Button } from "@/components/ui/button";

export const Header = ({ collapsed, setCollapsed }) => {
  const [modal, setModal] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/shop/home");
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`${url}notification`, {
          withCredentials: true,
        });

        const data = await response.data;
        console.log("Notifications Data:", data);
        setNotifications(data);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  return (
    <>
      <header className="relative w-full z-10 flex h-[60px] items-center justify-between bg-white px-4 shadow-md dark:bg-slate-900">
        <div className="flex items-center gap-x-3">
          <button
            className="btn-ghost size-10"
            onClick={() => setCollapsed(!collapsed)}
          >
            <ChevronsLeft className={collapsed ? "rotate-180" : ""} />
          </button>
        </div>
        <div className="flex items-center gap-x-3">
          <button
            onClick={() => {
              setModal(!modal);
              setClicked(true);
            }}
            className="btn-ghost relative size-10"
          >
            <Bell size={20} />
            {!clicked && (
              <div className="absolute right-1 top-2 h-[8px] w-[8px] rounded-full bg-red-700"></div>
            )}
          </button>
          <Button
            onClick={handleGoBack}
            className="inline-flex gap-2 items-center rounded-md px-4 py-2 text-sm font-medium shadow"
          >
            Shop
          </Button>
        </div>
      </header>

      {modal && (
        <div className="absolute md:right-10 right-3 top-[70px] w-full max-w-xs md:max-w-sm z-10">
          <div className="flex flex-col rounded-md bg-white p-4 shadow-md h-[300px] w-full md:w-[400px]">
            {/* Header */}
            <div className="flex items-center justify-between border-b-2 border-gray-200 pb-2">
              <h2 className="text-md font-semibold">NOTIFICATIONS</h2>
              <button
                onClick={() => setModal(false)}
                className="btn-ghost size-8"
              >
                ✕
              </button>
            </div>

            {/* Content Wrapper with Scroll */}
            <div className="flex-1 overflow-y-auto mt-2">
              {loading ? (
                <p className="py-4 text-center">Loading notifications...</p>
              ) : error ? (
                <p className="py-4 text-center text-red-500">{error}</p>
              ) : notifications.length === 0 ? (
                <p className="py-4 text-center text-gray-500">
                  No notifications found.
                </p>
              ) : (
                <ul className="space-y-2">
                  {notifications.map((notification, index) => (
                    <li key={index} className="rounded-md border p-2 text-sm">
                      {notification.message}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

Header.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  setCollapsed: PropTypes.func.isRequired,
};
