import Card from "../assets/types/card";

const CardComponent = ({ card }: { card: Card }) => {
  return (
    <div>
      <ul>
        <li>{card.cardNumber}</li>
        <li>{card.name}</li>
        <li>
          {card.validThrough.month}/{card.validThrough.year}
        </li>
      </ul>
    </div>
  );
};

export default CardComponent;
