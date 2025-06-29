import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "@/store/api"; // Adjust the import path as necessary
import { useSelector } from "react-redux";

const AdminWithdrawalsPage = () => {
  const { user } = useSelector((state) => state.auth);
  const [withdrawals, setWithdrawals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const fetchWithdrawals = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${url}transactions/withdrawals?status=pending`,
        {
          withCredentials: true,
        }
      ); // adjust this endpoint
      setWithdrawals(res.data);
    } catch (err) {
      console.error(err);
      setMessage("Failed to fetch withdrawal requests.");
    } finally {
      setLoading(false);
    }
  };

  const processWithdrawal = async (withdrawalId, action) => {
    const adminName = user?.username; // You can replace this with auth context if needed
    console.log("Processing withdrawal:", withdrawalId, action, adminName);

    try {
      const res = await axios.post(
        `${url}transactions/process-withdrawal/${withdrawalId}`,
        {
          action,
          processedBy: adminName,
        },
        {
          withCredentials: true,
        }
      );

      setMessage(res.data.message);
      // Refresh the list after processing
      fetchWithdrawals();
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || "Error processing withdrawal.");
    }
  };

  useEffect(() => {
    fetchWithdrawals();
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6 text-sm">
      <h1 className="text-2xl font-bold mb-6">Pending Withdrawals</h1>

      {message && (
        <div className="mb-4 p-3 bg-yellow-100 text-yellow-800 rounded">
          {message}
        </div>
      )}

      {loading ? (
        <div>Loading...</div>
      ) : withdrawals.length === 0 ? (
        <div>No pending withdrawals found.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-3 border">User</th>
                <th className="p-3 border">Amount ($)</th>
                <th className="p-3 border">Account Details</th>
                <th className="p-3 border">Requested At</th>
                <th className="p-3 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {withdrawals.map((withdrawal) => (
                <tr key={withdrawal._id} className="border-b hover:bg-gray-50">
                  <td className="p-3 border">
                    {withdrawal.user?.username} <br />
                    <span className="text-sm text-gray-500">
                      {withdrawal.user?.name}
                    </span>
                  </td>
                  <td className="p-3 border">{withdrawal.amount}</td>
                  <td className="p-3 border">{withdrawal.accountDetails}</td>
                  <td className="p-3 border">
                    {new Date(withdrawal.createdAt).toLocaleString()}
                  </td>
                  <td className="p-3 border space-x-2">
                    <button
                      className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 mb-3 md:mb-0"
                      onClick={() =>
                        processWithdrawal(withdrawal._id, "approve")
                      }
                    >
                      Approve
                    </button>
                    <button
                      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                      onClick={() =>
                        processWithdrawal(withdrawal._id, "reject")
                      }
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminWithdrawalsPage;
