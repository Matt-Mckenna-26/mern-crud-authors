import React from 'react'
import axios from 'axios';

const DeleteButton = ({record, records, setRecords}) => {
    const removeFromDom = recordId => {
        setRecords(records.filter(record => record._id !== recordId))
    }
    const deleteRecord = (recordId) => {
        axios.delete(`http://localhost:8000/api/authors/delete/${recordId}`)
        .then(res => {
            removeFromDom(recordId)
        })
    }
    return(
        <>
            <button className='btn-md btn-danger m-1' onClick={(e) => {deleteRecord(record._id)}}>Delete</button>
        </>
    )
}

export default DeleteButton;