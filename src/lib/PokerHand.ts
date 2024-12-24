import Card from './Card.ts';

class PokerHand {
  constructor(public hand: Card[]) {
    this.hand = hand;
  }

  getOutCome() {
    const suit: { [key: string]: number } = {
      diams: 0,
      hearts: 0,
      clubs: 0,
      spades: 0,
    };

    const rank: { [key: string]: number } = {
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
      10: 0,
      j: 0,
      q: 0,
      k: 0,
      a: 0
    };

    const allSuitCards = this.hand.map(card => card.suit);
    const allRankCards = this.hand.map(card => card.rank);

    allSuitCards.forEach(s => {
      suit[s]++
    });

    allRankCards.forEach((r) => {
      rank[r]++
    })

    const pairSuit = Object.values(suit);
    const pairRank = Object.values(rank);


    let pair = pairRank.filter(rank => rank === 2);

    if (pair.length === 1) {
      return 'One pair';
    } else if (pair.length === 2) {
      return 'Two pair'
    } else if (pair.length === 3) {
      return 'Three pair';
    }

    let flesh = pairSuit.filter(suit => suit === 5);
    if (flesh.length > 0) return 'Flash';

    return 'High card';
  };
}

export default PokerHand;