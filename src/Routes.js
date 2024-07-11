import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Signup  from './pages/signUp'
import Home from './pages/Home'
import { Dashboard } from './pages/Dashboard'; 
import ProtectedRoute from './ProtectedRoute';
import { AuthProvider } from './AuthContext';

const AppRoutes = () => {
    return (
        <Router> 
            <AuthProvider>
                <Routes> 
                    <Route path='/' element={<Home />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/dashboard' element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    } />
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default AppRoutes;