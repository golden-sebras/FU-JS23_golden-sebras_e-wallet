import Card from "../../types/card";
import CardComponent from "../Card/Card";
import "./CardStack.scss";

const CardStack = ({ cards }: { cards: Card[] }) => {
  const inactiveCards = cards.filter((card) => card.active === false) as Card[];

  return (
    <div className="wallet-container">
      {inactiveCards.map((card, i) => (
        <div key={card.id} className="cardStack-card" style={{ zIndex: `${i}` }}>
          <CardComponent card={card} />
        </div>
      ))}
    </div>
  );
};

export default CardStack;
