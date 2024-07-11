import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleSignUpClick = () => {
        navigate('/signup');
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <div className="text-center">
                <h1 className='text-5xl font-bold mb-6'>Autocademy.cloud</h1>
                <p className='text-lg mb-8'>Welcome, please Login / Register to continue!</p>
                <button 
                    className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition"
                    onClick={handleSignUpClick}
                >
                    Sign Up
                </button>
            </div>
        </div>
    );
};

export default Home;