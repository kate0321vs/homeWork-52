import Card from './components/Card/Card.tsx';
import CardDeck from './lib/CardDeck.ts'
import { useState } from 'react';

interface ICard {
  rank: string;
  suit: string;
}

let deck = new CardDeck();

const App = () => {
  const [hand, setHand] = useState<ICard[]>([]);

  // console.log(deck.deck.length);


  const getAnyCards = (card: number) => {
    const anyCards = deck.getCards(card)
    setHand(anyCards)
  }

  const getNewDeck = () => {
    deck = new CardDeck();
    setHand([]);
  }
  console.log(hand)
  console.log(deck.deck.length)

  return (
    <>
      <div className="mainContainer">
        <p className="someText"><strong>Card Count:</strong> {deck.deck.length}</p>
        {deck.deck.length === 0 ? (
          <div className="btnWrapper">
            <button onClick={() => getAnyCards(5)}>
              Get Cards
            </button>
            <button onClick={() => getNewDeck()}>
              New Deck
            </button>
          </div>
        ) : (
          <>

            <div className="playingCards faceImages">
            {hand.map((card) => (
              <Card rank={card.rank} suit={card.suit}/>
            ))}
          </div>
            <div className="btnWrapper">
          <button className="cardsBtn" onClick={() => getAnyCards(5)}>
            Get Cards
          </button>
            </div>
          </>
          )}
      </div>
      </>
      );
      };


      export default App;