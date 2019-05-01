import React from 'react';

import BookList from './BookList';
import BookDetails from './BookDetails';

import {
  Route
} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookInfo: {"Harry Potter and the Chamber of Secrets":"Published: 1998","Harry Potter and the Prisoner of Azkaban":"Published: 1999","Harry Potter and the Goblet of Fire":"Published: 2000","Harry Potter and the Order of the Phoenix":"Published: 2003","Harry Potter and the Half-Blood Prince":"Published: 2005","Harry Potter and the Deathly Hallows":"Published: 2007"}
    }
  }
  render() {
    return (
      <div>
        <Route render={(props) => (
          <BookList {...props} books={Object.keys(this.state.bookInfo)}/>
        )} />
        <Route path="/books/:id" render={(props) => (
          <BookDetails {...props} details={this.state.bookInfo}/>
        )} />
      </div>
    );
  }  
}


export default App;
