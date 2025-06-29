import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";
import { url } from "../../api";
import snth from "../assets/snth.jpg";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const UpdateProfilePage = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (user) {
      setFormData({
        username: user.username,
        email: user.email,
        phoneNumber: user.phoneNumber || "",
        password: "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await axios.put(
        `${url}users/profile/update`,
        { phoneNumber: formData.phoneNumber, password: formData.password },
        { headers: { Authorization: `${localStorage.getItem("token")}` } }
      );
      setMessage(response.data.message || "Profile updated successfully.");
    } catch (error) {
      // console.log("error", error);
      setMessage(error.response?.data?.message || "Failed to update profile.");
    }

    setLoading(false);
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="mx-auto w-full rounded-md bg-white p-4 shadow-md md:w-1/2">
        <div className="flex flex-row items-start justify-between">
          <Link to="/dashboard">
            <ArrowLeft />
          </Link>
          <div className="flex flex-col items-center justify-center">
            <img src={snth} alt="Logoipsum" style={{ width: "100px" }} />
            <h2 className="mb-4 text-xl font-semibold">Update Profile</h2>
          </div>
          <div />
        </div>

        {message && (
          <p className="text-center text-sm text-red-500">{message}</p>
        )}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="username"
            value={formData.username}
            disabled
            className="rounded border bg-gray-100 p-2"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            disabled
            className="rounded border bg-gray-100 p-2"
          />
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Phone Number"
            className="rounded border p-2"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="New Password"
            className="rounded border p-2"
          />
          <button
            type="submit"
            disabled={loading}
            className="rounded bg-[#35441B] p-2 text-white hover:bg-green-600"
          >
            {loading ? "Updating..." : "Update Profile"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfilePage;
