import React from 'react';
import Button from '@mui/material/Button'

const Home = () => {
    return (
        <>
            <div>
                <h1 className='custom-header'> Autocademy.cloud </h1> 
            </div>
            
            <p className='custom-para'> Welcome, please Login / Register to continue!</p>
            <Button variant="contained"> Login </Button>   
        </>
    );
};

export default Home;