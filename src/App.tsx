import Card from './components/Card/Card.tsx';
import CardDeck from './lib/CardDeck.ts'
import { useState } from 'react';
import PokerHand from './lib/PokerHand.ts';

interface ICard {
  rank: string;
  suit: string;
}

let deck = new CardDeck();

const App = () => {
  const [hand, setHand] = useState<ICard[]>([]);

  const getAnyCards = (card: number) => {
    const anyCards = deck.getCards(card)
    setHand(anyCards)
  }

  const getNewDeck = () => {
    deck = new CardDeck();
    setHand([]);
  }

  const pokerHand = new PokerHand(hand);
  const result = pokerHand.getOutCome();

  return (
    <>
      <div className="mainContainer">
        <p className="someText"><strong>Card Count:</strong> {deck.deck.length}</p>
        {deck.deck.length < 5 ? (
          <div className="btnWrapper">
            {/*<button onClick={() => getAnyCards(5)}>*/}
            {/*  Get Cards*/}
            {/*</button>*/}
            <button onClick={() => getNewDeck()}>
              New Deck
            </button>
          </div>
        ) : (
          <>
            <p className="someText"><strong>Result of Round:</strong> {result}</p>
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