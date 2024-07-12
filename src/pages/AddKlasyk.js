import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getDatabase, ref, push, set } from 'firebase/database';
import { database } from '../firebase';

const AddKlasyk = () => {

    const [ formData, setFormData ] = useState({
        artysta: '',
        tytul: '',
        urlek: '',
        genre: '',
        gwiazdeczki: ''
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
        }
    };
 
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
                </form>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2024 KlasykApp. All rights reserved.
                </p>
            </div>
        </div>
    );
}

export default AddKlasyk;