import React from 'react';
import UpdatedBook from '../updatebook/updatebooks.jsx'
import DeletedBook from '../deletebook/deletebooks.jsx'
const GetBooks = ({books,onBookUpdated,onBookDeleted}) => {
    return(
        <ul>
            {getBooks.map((book) => (
                <li key={book._id}>
                    <strong>{book.bookName}</strong> costs {book.price}
                    {" "}
                    <UpdateBook bookId={book._id} onBookUpdated={onBookUpdated} />
                    {"  "}
                    <DeleteBook bookId={book._id} onBookDeleted={onBookDeleted} />
                </li>
            ))}
        </ul>
    );
};

export default GetBooks;