import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export const Dashboard = () => {

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
                </div>
            </div>
    );
}

