import React,{useState,useEffect} from 'react';
import axios from 'axios';
import AddBook from './addbook/addbooks.jsx';
import GetBooks  from './getbook/getbooks.jsx';

function App(){
  const [books,setBooks]=useState([]);
  
  const fetchBooks = async() => {
    try{
      const res=await axios.get("http://localhost:5000/books");
      setBooks(res.data);
    }
    catch(err){
      console.error(err);
    }
  };

  useEffect(() => {
    fetchBooks();
  },[]);

  return(
    <div style={{margin: "20px"}}>
      <h2>Book Stall</h2>
      <AddBook onBookAdded={fetchBooks} />
      <GetBooks 
        books={books}
        onBookUpdated={fetchBooks}
        onBookDeleted={fetchBooks}
      />
    </div>
  );
}

export default App;