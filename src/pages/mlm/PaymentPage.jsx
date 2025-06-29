import React, { useState } from "react";
import axios from "axios";
import { url } from "@/store/api"; // Adjust the import path as necessary

const PaymentPage = () => {
  const [amount, setAmount] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    // Simple validation
    if (!amount || !bankName || !accountNumber || !accountName) {
      setError("Please fill in all the fields.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        `${url}transactions/withdrawal`,
        {
          amount,
          accountDetails: `${bankName}, ${accountNumber}, ${accountName}`,
        },
        {
          withCredentials: true,
        }
      );
      console.log("response", response.data);

      setSuccess("Withdrawal request submitted successfully.");
      setAmount("");
      setBankName("");
      setAccountNumber("");
      setAccountName("");
    } catch (err) {
      // console.log("error", err.response?.data?.message);
      setError(
        err.response?.data?.message ||
          "An error occurred while submitting your request."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-4">
        Withdrawal Request
      </h2>

      {error && <div className="text-red-500 text-center mb-4">{error}</div>}
      {success && (
        <div className="text-green-500 text-center mb-4">{success}</div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700"
          >
            Amount (in Dollar)
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="bankName"
            className="block text-sm font-medium text-gray-700"
          >
            Bank Name
          </label>
          <select
            id="bankName"
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            required
          >
            <option value="">Select a Bank</option>
            <option value="Sierra Leone Commercial Bank">
              Sierra Leone Commercial Bank
            </option>
            <option value="Rokel Commercial Bank">Rokel Commercial Bank</option>
            <option value="Union Trust Bank">Union Trust Bank</option>
            <option value="Guaranty Trust Bank (SL)">
              Guaranty Trust Bank (SL)
            </option>
            <option value="Access Bank (SL)">Access Bank (SL)</option>
            <option value="Zenith Bank (SL)">Zenith Bank (SL)</option>
            <option value="United Bank for Africa (SL)">
              United Bank for Africa (SL)
            </option>
            <option value="Ecobank (SL)">Ecobank (SL)</option>
            <option value="Standard Chartered Bank (SL)">
              Standard Chartered Bank (SL)
            </option>
            <option value="First International Bank (SL)">
              First International Bank (SL)
            </option>
            <option value="Bloom Bank Africa (SL)">
              Bloom Bank Africa (SL)
            </option>
            <option value="Commerce & Mortgage Bank (SL)">
              Commerce & Mortgage Bank (SL)
            </option>
            <option value="Skye Bank (SL)">Skye Bank (SL)</option>
            <option value="National Cooperative Development Bank">
              National Cooperative Development Bank
            </option>
            <option value="Fidelity Bank (SL)">Fidelity Bank (SL)</option>
            <option value="Bank of Sierra Leone">Bank of Sierra Leone</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="accountNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Account Number
          </label>
          <input
            type="number"
            id="accountNumber"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="accountName"
            className="block text-sm font-medium text-gray-700"
          >
            Account Name
          </label>
          <input
            type="text"
            id="accountName"
            value={accountName}
            onChange={(e) => setAccountName(e.target.value)}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full p-2 mt-4 text-white rounded-md ${
            loading ? "bg-gray-400" : "bg-[#35441B] hover:bg-green-600"
          } focus:outline-none`}
        >
          {loading ? "Processing..." : "Submit Request"}
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;
