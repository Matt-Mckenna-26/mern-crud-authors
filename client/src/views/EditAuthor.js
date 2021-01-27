import React, {useEffect, useState} from 'react'
import axios from 'axios';
import HomeButton from '../components/HomeButton';
import AuthorForm from '../components/AuthorForm';
import {navigate} from '@reach/router';


const EditAuthor = (props) => {
    const [name, setName] = useState('Update name here');
    const [thisAuthor, setThisAuthor] = useState({})
    const [error, setError] = useState('');
    const {id} = props;

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then(res => console.log(res))
        .catch(
            err => { console.log(err)
                navigate('/error')
            })
    },[]);

    const handleSubmitUpdate = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/update/${id}`, {
        name
        })
        .then(res => {console.log(res)
            navigate('/')})
        .catch(err => {
            console.log({err})
            let errorResponse = err.response.data.errors.name.message;
            setError(errorResponse)
            console.log(error);
        })
    }
    return (
        <div> 
            <HomeButton/>   
            <h5 className='text-primary m-2'>Edit this Author</h5>
            <AuthorForm className='form' handleSubmit={handleSubmitUpdate} name={name} setName={setName}/>  
            {error? <p className='text-danger my-1'>{error}</p> : null}  
        </div>
    )
}

export default EditAuthor;