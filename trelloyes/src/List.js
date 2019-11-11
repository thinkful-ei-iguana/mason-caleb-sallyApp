import React from 'react';
import Card from './Card.js';
import store from './store.js';
import './List.css';

function List (props) {
  console.log(props);
  const cards = props.cardIds.map(card => {
  
    return <Card 
      key={card}
      title={store.allCards[card].title}
      content={store.allCards[card].content}
    />
  });
  
  return (
    <section className="List">
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      <div className="List-cards">{cards}
      </div>
    </section>
  )
}

export default List
