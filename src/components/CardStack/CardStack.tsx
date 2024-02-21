import Card from "../../types/card";
import CardComponent from "../Card/Card";
import "./CardStack.scss";

const CardStack = ({ cards, handleUpdateCards }: { cards: Card[]; handleUpdateCards: (cards: Card[]) => void }) => {
  const inactiveCards = cards.filter((card) => card.active === false) as Card[];

  const handleActiveSwap = (id: number): void => {
    const currentActive = cards.find((card) => card.active === true);
    if (currentActive !== undefined) {
      currentActive.active = false;
    }

    const newActive = cards.find((card) => card.id === id);
    newActive!.active = true;

    handleUpdateCards(cards);
  };

  const removeCard = (id: number): void => {
    const newCards = cards.filter((card) => card.id !== id) as Card[];
    handleUpdateCards(newCards);
  };

  return (
    <div className="wallet-container">
      {inactiveCards.map((card, i) => (
        <div key={card.id} className="cardStack-card" style={{ zIndex: `${i}` }}>
          <CardComponent card={card} makeCardActive={() => handleActiveSwap(card.id)} />
          <button onClick={() => removeCard(card.id)}>Remove card</button>
        </div>
      ))}
    </div>
  );
};

export default CardStack;
