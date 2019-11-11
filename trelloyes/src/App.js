import React from 'react';
import store from './store.js';
import List from './List.js';

function App(props) {
  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
    <div className="App-list">
      {store.list.map(list => <List 
      id={list.id}
      header={list.header}
      cardIds={list.cardIds}
      />)}
    </div>
    </main>
  );
}

export default App;