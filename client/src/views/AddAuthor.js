import React, {useState} from 'react';
import AuthorForm from '../components/AuthorForm';
import HomeButton from '../components/HomeButton';
import axios from 'axios';
import { navigate } from '@reach/router';


const AddAuthor = ({props}) => {
    const [name, setName] = useState("Enter the author name here");
    const [error, setError] = useState([]);
    const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors/new', {
        name,
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
            <HomeButton />
            <h5>Add a new Author:</h5>
            <AuthorForm handleSubmit={handleSubmit} name={name} setName={setName}/>
            {error ? <p className='text-danger my-2'>{error}</p> : null}
        </div>
    )
}

export default AddAuthor;