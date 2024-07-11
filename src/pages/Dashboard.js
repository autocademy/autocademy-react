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
        <>
            <div className='dashboard-container'>
                <h1 className='text-3xl font-bold'> Dashboard Page </h1> 
                <p> Welcome, { userEmail ? `${userEmail}` : 'Guest'} </p>
            </div>
        </>
    );
}