import React, { useState } from "react";
import axios from "axios";
import { url } from "../../api";

const AddEarningPage = () => {
  const [username, setUsername] = useState("");
  const [amount, setAmount] = useState("");
  const [reason, setReason] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // 👈 loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setLoading(true); // 👈 Start loading

    const cleanUsername = username.trim().toLowerCase();

    if (!cleanUsername || !amount) {
      setError("Username and amount are required.");
      setLoading(false); // 👈 Stop loading
      return;
    }

    try {
      const response = await axios.post(
        `${url}transactions/${cleanUsername}/add-earning`,
        {
          amount: parseFloat(amount),
          reason,
        }
      );

      setMessage(response.data.message);
      setAmount("");
      setReason("");
    } catch (err) {
      setError(
        err.response?.data?.error || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false); // 👈 Stop loading
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-4">Add Earning to User</h2>

      {message && <p className="text-green-600 mb-3">{message}</p>}
      {error && <p className="text-red-600 mb-3">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Username</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value.trimStart())}
            required
            disabled={loading}
          />
        </div>

        <div>
          <label className="block font-medium">Amount ($)</label>
          <input
            type="number"
            className="w-full border p-2 rounded"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            disabled={loading}
          />
        </div>

        <div>
          <label className="block font-medium">Reason (optional)</label>
          <textarea
            className="w-full border p-2 rounded"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            disabled={loading}
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`${
            loading ? "bg-gray-400" : "bg-[#A2AC3E] hover:bg-blue-700"
          } text-white font-semibold py-2 px-4 rounded`}
        >
          {loading ? "Processing..." : "Add Earning"}
        </button>
      </form>
    </div>
  );
};

export default AddEarningPage;
