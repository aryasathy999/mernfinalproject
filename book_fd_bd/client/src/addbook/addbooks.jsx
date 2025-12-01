import React,{useState} from 'react';
import axios from 'axios';

const AddBook = ({onBookAdded}) => {
    const [bookName,setBookName]=useState("");
    const [price,setPrice]=useState("");
    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            await axios.post("http://localhost:5000/books",{
                bookName,
                price
            });
            setBookName("");
            setPrice("");
            onBookAdded();
        }
        catch(err){
            console.log(err);
        }
    }
};

return(
    <form onSubmit={handleSubmit} style={{marginBottom: "20px"}}>
        <input
            type='text'
            placeholder='Book Name'
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
            required
        />
        <br />
        <input 
            type='number'
            placeholder='Price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
        />
        <br />
        <button type='submit'>Add Book</button>
    </form>
);

export default AddBook;

