import React from 'react';
import List from './List.js';

function App(props) {
  console.log(props);
  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
    <div className="App-list">
      {props.store.STORE.lists.map(list => <List 
      id={list.id}
      header={list.header}
      cardIds={list.cardIds}
      />)}
    </div>
    </main>
  );
}

export default App;