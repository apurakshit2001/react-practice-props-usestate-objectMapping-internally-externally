import React from 'react';
import './App.css';
import Card from './Components/Card/Card';
import cardData from './Components/Card/cardData';

const App = () => {
  const cardDescription1 = `This is the description for Card.`;
  const cardDescription2 = `This is the description for Card.`;
  const cardDescription3 = `This is the description for Card.`;

  const cardData2 = {
    card7: {
      cardName: 'Card 7',
      cardDescription: 'This is the description for Card.',
      buttonName: 'Button-7'
    },
    card8: {
      cardName: 'Card 8',
      cardDescription: 'This is the description for Card.',
      buttonName: 'Button-8',
    },
    card9: {
      cardName: 'Card 9',
      cardDescription: 'This is the description for Card.',
      buttonName: 'Button-9'
    }
  }

return (
  <div className='app-container'>
    <div className="hero">
      {/* Hardcoded props Cards */}
      <Card cardName={'Card 1'} cardDescription={cardDescription1} buttonName={'Button-1'} />
      <Card cardName={'Card 2'} cardDescription={cardDescription2} buttonName={'Button-2'} />
      <Card cardName={'Card 3'} cardDescription={cardDescription3} buttonName={'Button-3'} />

      {/* Cards from cardData */}
      {cardData.map((card, index) => (
        <Card
          key={index}
          cardName={card.cardName}
          cardDescription={card.cardDescription}
          buttonName={card.buttonName}
        />
      ))}

      {/* Cards from cardData2 */}
      <Card {...cardData2.card7}/>
      <Card {...cardData2.card8}/>
      <Card {...cardData2.card9}/>
    </div>
  </div>
);
  };

export default App;
