import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Adjust the path according to your project structure

const ProtectedRoute = ({ children }) => {
    const { currentUser } = useAuth();

    if (!currentUser) {
        return <div style={{ color: 'red' }}>You need to sign in to access this page.</div>;
    }

    return children;
};

export default ProtectedRoute;
