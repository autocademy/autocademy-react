// import React from 'react'

// export const SignUp = () => {
//     return (
//         <>
//             <h1> Sign Up Page </h1> 
//             <p> Please sign up to use the portal</p>
//         </>
//     );
// }

import React, {useReducer, useState} from 'react';
import { NavLink, useNavigate} from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'

const Signup = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async(e) => {
        e.preventDefault();

        await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // signed in 
            const user = userCredential.user;
            console.log(user);
            navigate("/dashboard")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message; 
            console.log(errorCode, errorMessage);
        });
    }

    return (
        <div className="flex items-center justify-center h-screen bg-blue-100">
            <div className='w-full max-w-xs'>
                <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="email">
                            E-mail
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" value={email} placeholder="Username" onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    <div className='mb-6'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="******************"></input>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={onSubmit}> Create User </button>
                </form>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2024 Autocademy. All rights reserved.
                </p>
            </div>
        </div>
    );
}

export default Signup;

