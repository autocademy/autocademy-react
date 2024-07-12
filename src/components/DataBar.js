import React from 'react';
import NutaImage from '../assets/nuta_image.png'

const DataBar = ({ dane }) => {
    if (!dane) {
        return null;
    }

    return  (
        <div className='bg-white shadow-lg rounded-lg p-6 w-full mt-4 flex items-center justify-between'>
            <div>
                <p className='text-lg font-bold mb-4'>Tytul Nutki: {dane.tytul || 'No Title'}</p>
                <p className='text-lg'>Artysta / Wykonawca: {dane.artysta || 'Unknown'}</p>
                <p className='text-lg'>Gatunek: {dane.genre || 'Unknown'}</p>
                <p className='text-lg'>Ocena: {dane.gwiazdeczki || 'Not Rated'}</p>
                <p className='text-lg'>URLek: {dane.urlek || 'Not Rated'}</p>
            </div>
            <img 
                src={NutaImage} 
                alt='Placeholder Thumbnail' 
                className='w-24 h-24 rounded'
            />
        </div>
    );
};

export default DataBar;
