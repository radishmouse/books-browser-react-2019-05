import React from 'react';
import { Link } from 'react-router-dom';

const booksArray = ["Harry Potter and the Philosopher's Stone (Also known as Harry Potter and the Sorcerer's Stone)", "Harry Potter and the Chamber of Secrets", "Harry Potter and the Prisoner of Azkaban", "Harry Potter and the Goblet of Fire", "Harry Potter and the Order of the Phoenix", "Harry Potter and the Half-Blood Prince", "Harry Potter and the Deathly Hallows"];

function BookList(props) {

    const booksLinks = booksArray.map(book => (
        <li key={book}>
            <Link to={`/books/${book}`}>{book}</Link>
        </li>
    ));

    return (
        <div>
            <ul>
                {booksLinks}
            </ul>
        </div>
    );
}

export default BookList;