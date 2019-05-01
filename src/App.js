import React from 'react';

import BookList from './BookList';
import BookDetails from './BookDetails';

import {
  Route
} from 'react-router-dom';

function App() {
  return (
    <div>
      <Route component={BookList} />
      <Route path="/books/:id" component={BookDetails} />
    </div>
  );
}

export default App;
