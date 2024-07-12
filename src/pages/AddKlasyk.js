import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getDatabase, ref, push, set } from 'firebase/database';
import { database } from '../firebase';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';

const AddKlasyk = () => {

    const navigate = useNavigate();

    const handleDashboardClick = () => {
        navigate('/dashboard');
    }

    const [ formData, setFormData ] = useState({
        artysta: '',
        tytul: '',
        urlek: '',
        genre: '',
        gwiazdeczki: ''
    });

    const [modalState, setModalState] = useState({
       show: false,
       success: true, 
       message: '' 
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const db = getDatabase();
            const klasykRef = ref(db, 'klasyk');
            const newKlasykRef = push(klasykRef);
            await set(newKlasykRef, formData);
            console.log("Document written with ID: ", newKlasykRef.key);
            setModalState({
                show: true, 
                success: true,
                message: 'Klasyk zostal dodany EZ'
            });
            // Optionally, reset the form 
            setFormData({
                artysta: '',
                tytul: '',
                urlek: '',
                genre: '',
                gwiazdeczki: ''
            });
        } catch (e) {
            console.error("Error adding document: ", e);
            setModalState({
                show: true,
                success: false,
                message: 'Cos poszlo nie tak #sadge'
            });
        }
    };

    const closeModal = () => {
        setModalState((prevState) => ({
            ...prevState,
            show: false
        }));
    }
 
    return (
        <div className="flex items-center justify-center h-screen bg-blue-100">
            <div className='w-full max-w-xs'>
                <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="artysta">
                            Artysta / Wykonawca 
                        </label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="artysta" 
                            type="text" 
                            placeholder="artysta" 
                            value={formData.artysta} 
                            onChange={handleChange}
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="tytul">
                            Tytul
                        </label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="tytul" 
                            type="text" 
                            placeholder="tytul" 
                            value={formData.tytul} 
                            onChange={handleChange}
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="urlek">
                            URL do nuty
                        </label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="urlek" 
                            type="text" 
                            placeholder="url" 
                            value={formData.urlek} 
                            onChange={handleChange}
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="genre">
                            Genre Nuty
                        </label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="genre" 
                            type="text" 
                            placeholder="genre nutki" 
                            value={formData.genre} 
                            onChange={handleChange}
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="gwiazdeczki">
                            Gwiazdeczki
                        </label>
                        <select 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="gwiazdeczki" 
                            name="gwiazdeczki" 
                            value={formData.gwiazdeczki} 
                            onChange={handleChange}
                        >
                            <option value="" disabled>Select rating</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    
                    <button 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                        type="submit"
                    > 
                        Dodaj Klasyka 
                    </button>

                    <button 
                    className="bg-blue-500 text-white m-2 px-4 py-2 rounded shadow hover:bg-blue-700 transition"
                    onClick={handleDashboardClick}
                >
                    Daszbord
                </button>
                    
                </form>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2024 KlasykApp. All rights reserved.
                </p>
            </div>

            <Modal
                show={modalState.show}
                success={modalState.success}
                message={modalState.message}
                onClose={closeModal}
             />
        </div>
    );
}

export default AddKlasyk;