import React from 'react';
import axios from 'axios';

const DeleteBook = ({bookId, onBookDeleted}) => {
    const handleBook = async() => {
        try{
            await axios.delete(`http://localhost:5000/books/${bookId}`);
            onBookDeleted();
        }
        catch(err){
            console.error(err);
        }
    };
    return <button onClick={handleDelete}>Delete</button>
};

export default DeleteBook;