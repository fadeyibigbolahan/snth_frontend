// PVReferralTreeChart.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Tree } from "react-organizational-chart";
import ReferralOrgNode from "../../components/mlm/RefferalOrgNode";
import { url } from "@/store/api";
import { useSelector } from "react-redux";

const MyPVPage = () => {
  const [tree, setTree] = useState(null);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchTree = async () => {
      console.log("Fetching tree for user:", user?.username);
      try {
        const response = await axios.get(
          `${url}auth/bv-referral-tree/${user?.username}`,
          {
            withCredentials: true,
          }
        );
        console.log("Tree response:", response.data);
        setTree(response.data.tree);
      } catch (error) {
        console.error("Error fetching tree:", error);
      }
    };

    fetchTree();
  }, [user]);

  return (
    <div className="overflow-auto p-6">
      <h2 className="text-xl font-bold mb-4">
        BV Referral Tree for {user?.username}
      </h2>
      {tree ? (
        <Tree
          lineWidth={"2px"}
          lineColor={"#ccc"}
          lineBorderRadius={"10px"}
          label={
            <div className="bg-blue-100 p-3 rounded shadow-md text-center border border-blue-300">
              <strong>{tree.username}</strong>
              <div className="text-sm">Total PV: {tree.pv}</div>
            </div>
          }
        >
          {tree.referrals.map((child) => (
            <ReferralOrgNode key={child.username} node={child} />
          ))}
        </Tree>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MyPVPage;
