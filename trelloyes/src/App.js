import React from 'react';
import List from './List.js';

function App(props) {
  const lists = props.store.STORE.list.map(list => {
    <List 
      id={list.id}
      header={list.header}
      cardIds={list.cardIds}
    />
  });
  
  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {lists}
      </div>
    </main>
  );
}

export default App;