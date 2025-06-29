// PVReferralTreeChart.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Tree } from "react-organizational-chart";
import ReferralOrgNode from "../components/RefferalOrgNode";
import { useAuth } from "../contexts/AuthContext";
import { url } from "../../api";

const UserPVPage = () => {
  const [tree, setTree] = useState(null);
  const [inputUsername, setInputUsername] = useState("");
  const [searchUsername, setSearchUsername] = useState("");
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;

    const fetchTree = async () => {
      try {
        const targetUsername = searchUsername;

        const response = await axios.get(
          `${url}users/PV-referral-tree/${targetUsername}`,
          {
            headers: {
              Authorization: `${localStorage.getItem("token")}`,
            },
          }
        );
        setTree(response.data.tree);
      } catch (error) {
        console.error("Error fetching tree:", error);
        setTree(null);
      }
    };

    fetchTree();
  }, [searchUsername, user]);

  const handleSearch = () => {
    if (inputUsername.trim().toLowerCase()) {
      setSearchUsername(inputUsername.trim().toLocaleLowerCase());
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="overflow-auto p-6">
      <h2 className="text-xl font-bold mb-4">PV Referral Tree Viewer</h2>

      <div className="flex flex-col md:flex-row gap-2 items-center mb-6">
        <input
          type="text"
          placeholder="Enter username"
          value={inputUsername}
          onChange={(e) => setInputUsername(e.target.value)}
          onKeyDown={handleKeyDown}
          className="border border-gray-300 rounded p-2 w-full max-w-sm"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-[#A2AC3E]"
        >
          View Tree
        </button>
      </div>

      {tree ? (
        <Tree
          lineWidth={"2px"}
          lineColor={"#ccc"}
          lineBorderRadius={"10px"}
          label={
            <div className="bg-blue-100 p-3 rounded shadow-md text-center border border-blue-300">
              <strong>@{tree.username}</strong>
              <div className="text-sm">
                {tree.package.name} ({tree.package.PV} PV)
              </div>
              <div className="text-sm">Total PV: {tree.PV}</div>
            </div>
          }
        >
          {tree.referrals.map((child) => (
            <ReferralOrgNode key={child.username} node={child} />
          ))}
        </Tree>
      ) : (
        <p className="text-gray-500">Loading or no tree found...</p>
      )}
    </div>
  );
};

export default UserPVPage;
