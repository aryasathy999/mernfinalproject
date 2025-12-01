import React,{useState} from 'react';
import axios from 'axios';

const UpdatedBooks = ({bookId,onBookUpdated}) => {
    const [editing, setEditing]=useState(false);
    const [newPrice, setNewPrice]=useState("");

    const handleUpdate = async() => {
        try{
            await axios.put(`http://localhost:5000/books/${bookId}`, {
                price: newPrice,
            });
            setEditing(false);
            setNewPrice("");
            onBookUpdated();
        }
        catch(err){
            console.error(err);
        }
    }

    return(
        <>
            {editing ? (
                <>
                    <input 
                        type='number'
                        placeholder='New Price'
                        value={newPrice}
                        onChange={(e) => setNewPrice(e.target.value)}
                    />
                    <button onClick={handleUpdate}>Save</button>
                    <button onClick={() => setEditing(false)}>Cancel</button>
                </>
            ) : (
                <button onClick={() => setEditing(true)}>Update Price</button>
            )}
        </>
    );
};

export default UpdatedBooks;