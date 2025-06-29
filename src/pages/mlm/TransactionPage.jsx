import React, { useState, useEffect } from "react";
import axios from "axios";
import { transactionHeading } from "@/constants";
import { useSelector } from "react-redux";
import { url } from "@/store/api";

const TransactionPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    console.log("User:", user);
  }, [user]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(
          `${url}transactions/${user.username}`,
          {
            withCredentials: true,
          }
        );
        console.log("Transactions Response:", response.data);
        setTransactions(response.data);
      } catch (err) {
        setError("Failed to load transactions.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, [user]);

  return (
    <div className="flex flex-col gap-y-4 p-4">
      <h1 className="title">My Transactions</h1>

      {loading ? (
        <p>Loading transactions...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="overflow-x-auto">
          {/* Table Body */}
          <div className="w-full overflow-x-auto bg-white p-4">
            {transactions.length === 0 ? (
              <p className="text-center text-gray-500">
                No transactions found.
              </p>
            ) : (
              <div className="w-full min-w-max">
                <div className="flex min-w-max border-b-2 border-gray-200 bg-white">
                  {transactionHeading.map((heading, index) => (
                    <div
                      key={index}
                      className="w-2/12 px-4 py-2 text-center text-xs font-semibold md:w-1/6"
                    >
                      {heading.name}
                    </div>
                  ))}
                </div>
                {transactions.map((transaction, index) => (
                  <div
                    key={index}
                    className="flex w-full min-w-max justify-between gap-x-4 border-b border-gray-200 p-4 text-sm"
                  >
                    <p className="w-1/12 px-2 text-center md:w-1/6">
                      {index + 1}
                    </p>
                    <p className="w-2/12 px-2 md:w-1/6">
                      {transaction.details}
                    </p>
                    <p className="w-1/12 px-2 text-center md:w-1/6">
                      {transaction.amount}
                    </p>
                    <p className="w-1/12 px-2 text-center md:w-1/6">
                      {transaction.balanceAfter}
                    </p>
                    <p className="w-1/12 px-2 text-center md:w-1/6">
                      {transaction.type}
                    </p>
                    <p className="w-2/12 px-2 md:w-1/6">{transaction._id}</p>
                    <p className="w-2/12 px-2 text-center md:w-1/6">
                      {new Date(transaction.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TransactionPage;
