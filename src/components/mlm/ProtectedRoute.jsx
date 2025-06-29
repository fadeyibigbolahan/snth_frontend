// src/components/ProtectedRoute.js
import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 500); // Simulating async auth check
    }, []);

    if (loading) return <h1>Loading...</h1>; // Replace with a proper spinner

    return user ? (
        children
    ) : (
        <Navigate
            to="/signin"
            replace
        />
    );
};

export default ProtectedRoute;
