import React, { useState, useEffect } from "react";
import axios from "axios";
// import { useAuth } from "../contexts/AuthContext";
import Tree from "react-d3-tree";
// import { url } from "../../api";

const AffiliatePage = () => {
  const [treeData, setTreeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const { user } = useAuth();

  // useEffect(() => {
  //   const fetchGenealogy = async () => {
  //     try {
  //       const response = await axios.get(`${url}genealogy/${user?.username}`);
  //       setTreeData(formatTreeData(response.data));
  //     } catch (err) {
  //       setError("Failed to fetch genealogy data");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchGenealogy();
  // }, [user?.username]);

  const packages = [
    {
      _id: "67e5522fbc73cdbac9d87e64",
      name: "Starter",
    },
    {
      _id: "67eaac1a4f46fa568f31a802",
      name: "Gold",
    },
    {
      _id: "67eaacfe9553230e97bf3c80",
      name: "Diamond",
    },
    {
      _id: "67effaafd1a5626664228cdb",
      name: "Elite",
    },
    {
      _id: "67effb08d1a5626664228ce3",
      name: "Supreme",
    },
    {
      _id: "67effba3d1a5626664228ceb",
      name: "Mega",
    },
    {
      _id: "67effbe4d1a5626664228cf4",
      name: "Royal",
    },
  ];

  const getPackageName = (packageId) => {
    const pkg = packages.find((p) => p._id === packageId);
    return pkg ? pkg.name : "Unknown";
  };

  // Convert API response into `react-d3-tree` format
  const formatTreeData = (data) => {
    if (!data?.user) return null;

    const convertToTree = (userNode) => ({
      name: `@${userNode.username} (${getPackageName(userNode.package)})`,
      children: userNode.downline?.map(convertToTree) || [],
    });

    return convertToTree({ ...data.user, downline: data.downline });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!treeData) return <p>No genealogy data available.</p>;

  return (
    <div style={{ width: "100%", height: "80vh" }}>
      <Tree
        data={treeData}
        orientation="vertical"
        translate={{ x: window.innerWidth / 2, y: 100 }}
        pathFunc="step"
        collapsible={true}
        separation={{ siblings: 2.5, nonSiblings: 3.5 }} // Increase spacing
        // separation={{ siblings: 1.5, nonSiblings: 2.5 }} // Increase spacing
      />
    </div>
  );
};

export default AffiliatePage;
