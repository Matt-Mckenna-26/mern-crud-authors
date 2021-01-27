import React, {useState} from 'react';
import {navigate} from '@reach/router';

const AuthorForm = ({handleSubmit, name, setName}) => {
    return (
        <form className='form-group'>
            <label htmlFor='name'>Name: </label>
                <input className='form-control col-6 m-auto' type='text' value = {name} onChange={(e)=> setName(e.target.value)}/>
            <button className='btn-md btn-danger my-3 mx-2' onClick={(e)=> navigate('/')}>Cancel</button>
            <button className='btn-md btn-success my-3 mx-2' onClick = {handleSubmit}>Submit</button>
        </form>
    )
}

export default AuthorForm;