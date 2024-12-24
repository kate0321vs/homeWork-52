import { Component } from 'react';

interface Props {
  rank: string;
  suit: string;
}

interface suitSymbolInt {
  diams: string,
  hearts: string,
  clubs: string,
  spades: string,
}

interface rankLetterInt {
  j: string,
  q: string,
  k: string,
  a: string,
};

const suitSymbol: suitSymbolInt = {
  diams: '♦',
  hearts: '♥',
  clubs: '♣',
  spades: '♠',
};

const rankLetter: rankLetterInt = {
  j: 'J',
  q: 'Q',
  k: 'K',
  a: 'A',
};

class Card extends Component<Props> {
  render() {
    const {rank, suit} = this.props;
    return (
      <span className={`card rank-${rank} ${suit}`}>
       <span className="rank">{rankLetter[rank] || rank}</span>
       <span className="suit">{suitSymbol[suit]}</span>
     </span>
    )
  }
}

export default Card;