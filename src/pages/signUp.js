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
        <main>
            <section> 
                <div> 
                    <h1> Autocademy Signup </h1>
                    <input type="email" label="email address" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email address"/>
                    <input type="password" label="Create Password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Password"/>
                
                    <button type="submit" onClick={onSubmit}>
                    Sign Up
                    </button>
                </div>
            </section>
        </main>
    );
}

export default Signup;