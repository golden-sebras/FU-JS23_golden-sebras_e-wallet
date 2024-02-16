import Card from "../types/card";
import vendors from "../assets/constants/vendors";
import Vendor from "../types/vendor";

const CardComponent = ({ card }: { card: Card }) => {
  const cardVendor = vendors.find((vendor) => vendor.id === card.vendorId) as Vendor;

  return (
    <div>
      <ul style={{ backgroundColor: cardVendor.color, color: cardVendor.textColor }}>
        <li>{card.cardNumber}</li>
        <li>{card.name}</li>
        <li>
          {card.validThrough.month}/{card.validThrough.year}
        </li>
        <li>{cardVendor.color}</li>
      </ul>
    </div>
  );
};

export default CardComponent;
