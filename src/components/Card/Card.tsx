interface Props {
  rank: string;
  suit: string;
  suitSymbol: {diams: string; hearts: string; clubs: string; spades: string};
  rankLetter: {j: string; q: string; k: string; a: string};
}

const suitSymbol = {
  diams: '♦',
  hearts: '♥',
  clubs: '♣',
  spades: '♠',
};

const rankLetter = {
  j: 'J',
  q: 'Q',
  k: 'K',
  a: 'A',
};

const Card: React.FC<Props> = ({rank, suit}) => {
  return (
    <span className={`card rank-${rank} ${suit}`}>
      <span className="rank">{rankLetter[rank]}</span>
      <span className={`${suit}`}>{suitSymbol[suit]}</span>
    </span>
  );
};

export default Card;