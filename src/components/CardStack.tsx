import Card from "../types/card";
import CardComponent from "./Card";

const CardStack = ({ cards }: { cards: Card[] }) => {
  const inactiveCards = cards.filter((card) => card.active === false) as Card[];

  return (
    <ul>
      {inactiveCards.map((card) => (
        <li>
          <CardComponent key={card.id} card={card} />
        </li>
      ))}
    </ul>
  );
};

export default CardStack;
