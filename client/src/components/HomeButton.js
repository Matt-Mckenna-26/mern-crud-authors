import React from 'react';
import {navigate} from '@reach/router';

const HomeButton = () => {
    return (
        <button className='btn-primary btn-md m-2' onClick={(e) => navigate('/')}>
            Home
        </button>
    )};

export default HomeButton;