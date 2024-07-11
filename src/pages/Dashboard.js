import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export const Dashboard = () => {

    const navigate = useNavigate();

    const handleAddButton = () => {
        navigate('/addklasyk');
    }

    const [userEmail, setUserEmail] = useState('');

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user) {
                setUserEmail(user.email);
            } else {
                setUserEmail('');
            }
        });

        // Cleanup subscription on unmount 
        return () => unsubscribe();

    })

    return (
            <div className='min-h-screen bg-gray-100 flex items-center justify-center'>
                <div className='bg-white shadow-lg rounded-lg p-6 md:p-12'>
                    <h1 className='text-3xl font-bold mb-4'> Dashboard Page </h1> 
                    <p className='text-lg'> Welcome, { userEmail ? `${userEmail}` : 'Guest'} </p>
                    <button 
                    className="bg-blue-500 text-white mt-4 px-4 py-2 rounded shadow hover:bg-blue-700 transition"
                    onClick={handleAddButton}
                >
                    Dodaj Klasyka
                </button>
                </div>
            </div>
    );
}

