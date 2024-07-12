import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDatabase, ref, onValue } from 'firebase/database';
import DataBar from '../components/DataBar';

export const Dashboard = () => {
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserEmail(user.email);
            } else {
                setUserEmail('');
            }
        });

        // Cleanup subscription on unmount 
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const db = getDatabase();
        const dataRef = ref(db, '/klasyk');

        const unsubscribe = onValue(dataRef, (snapshot) => {
            const data = snapshot.val();
            console.log('Fetched data:', data); // Debug log for fetched data
            const dataList = data ? Object.values(data) : [];
            console.log('Data list:', dataList); // Debug log for data list
            setData(dataList);
        });

        // Cleanup subscription on unmount 
        return () => unsubscribe();
    }, []);

    const handleAddButton = () => {
        navigate('/addklasyk');
    };

    return (
        <div className='min-h-screen bg-gray-100'>
            <header className='bg-gray-800 shadow-md fixed w-full top-0 left-0 text-white'>
                <div className='max-w-7xl mx-auto p-6 md:p-12 flex justify-between items-center'>
                    <h1 className='text-3xl font-bold'>KlasykApka</h1>
                    <div className='flex items-center space-x-4'>
                        <p className='text-lg'>Welcome, {userEmail ? `${userEmail}` : 'Guest'}</p>
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition"
                            onClick={handleAddButton}
                        >
                            Dodaj Klasyka
                        </button>
                    </div>
                </div>
            </header>
            <main className='pt-32 max-w-7xl mx-auto'>
            {data.map((item, index) => (
                    <DataBar key={index} dane={item} />
                ))}
            </main>
        </div>
    );
};
