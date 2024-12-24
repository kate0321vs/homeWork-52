import Card from './Card';

class CardDeck {
  public deck: Card[];

  constructor() {
    this.deck = []
    const suits = ['diams', 'hearts', 'clubs', 'spades'];
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a'];

    for (let i = 0; i < ranks.length; i++) {
      for (let j = 0; j < suits.length; j++) {
        const card = new Card(ranks[i], suits[j]);
        this.deck.push(card);
      }
    }
  }

  getCard() {
    const randomIndex = Math.floor(Math.random() * this.deck.length);
    const removedCard = this.deck.splice(randomIndex, 1);
    return removedCard[0];
  }

  getCards(howMany: number) {
    const cards = [];
    for (let i = 0; i < howMany; i++) {
      cards.push(this.getCard());
    }
    return cards
  }
}



export default CardDeck;