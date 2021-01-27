import React, {useState, useEffect} from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';
import DeleteButton from '../components/DeleteButton';

const ViewAuthors = ({props}) => {
    const [authors, setAuthors] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:8000/api/authors/')
        .then(res => { console.log(res)
            setAuthors(res.data.author);
            })
        .catch(err => console.log(err))
    }, [setAuthors]);

    return (
        <div> 
            <Link to="/new">Add an Author</Link>
            <table className='table col-9 mx-auto my-3 border border-black'>
            <tr>
                <th scope="col">Author</th>
                <th scope='col'>Actions Available</th>
            </tr>
            {authors.map((author, idx) => (
            <tr scope ="row" key={idx}> 
                <td>{author.name}</td>
                <td>
                    <DeleteButton record ={author} records={authors} setRecords={setAuthors}>Delete</DeleteButton>
                    <button className='btn-md btn-secondary m-1' onClick ={(e) => navigate(`/edit/${author._id}`)}>Edit</button>
                </td>
            </tr>
            ))}
            </table>
        </div>
    )
}

export default ViewAuthors;