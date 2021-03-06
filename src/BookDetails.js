import React from 'react';

// const details = {"Harry Potter and the Chamber of Secrets":"Published: 1998","Harry Potter and the Prisoner of Azkaban":"Published: 1999","Harry Potter and the Goblet of Fire":"Published: 2000","Harry Potter and the Order of the Phoenix":"Published: 2003","Harry Potter and the Half-Blood Prince":"Published: 2005","Harry Potter and the Deathly Hallows":"Published: 2007"}

function BookDetails({title, details}) {
    
    return (
        <div>
            <h1>{title}</h1>
            <p>{details}</p>
        </div>
    );
}

export default BookDetails;