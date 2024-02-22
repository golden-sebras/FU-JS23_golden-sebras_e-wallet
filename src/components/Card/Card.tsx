import vendors from "../../assets/constants/vendors";
import Card from "../../types/card";
import Vendor from "../../types/vendor";
import chipLogo from "../../assets/img/chip.png";
import wifiLogo from "../../assets/img/wifi.png";
import "./Card.scss";

const CardComponent = ({
  card,
  makeCardActive,
}: {
  card: Card;
  makeCardActive?: React.MouseEventHandler<HTMLDivElement>;
}) => {
  const cardVendor = vendors.find((vendor) => vendor.id === card.vendorId) as Vendor;

  return (
    <div
      className="card"
      style={{ backgroundColor: cardVendor.color, color: cardVendor.textColor }}
      {...(makeCardActive ? { onClick: makeCardActive } : {})} // Kolla om parametern makeCardActive finns
    >
      <div className="card__header">
        <div className="card__wifi-chip-container">
          <img
            src={wifiLogo}
            alt="wifiLogo"
            style={{
              height: "44px",
              width: "44px",
              filter: cardVendor.id === "0" || cardVendor.id === "1" ? "none" : "invert(100%)",
            }}
          />
          <img
            src={chipLogo}
            alt="chipLogo"
            style={{
              height: "40px",
              width: "50px",
            }}
          />
        </div>

        <img
          src={`./assets/img/${cardVendor.icon}`}
          alt="vendorLogo"
          style={{
            height: "38.68px",
          }}
        />
      </div>

      <p className="card__cardNumber">{card.cardNumber.length > 0 ? card.cardNumber : "XXXX XXXX XXXX XXXX"}</p>

      <div className="card__holder-valid-thru-container">
        <p className="card-title-text">CARDHOLDER NAME</p>
        <p className="card-title-text">VALID THRU</p>
      </div>

      <div className="card__name-date-container">
        <p className="card-text">{card.name.length > 0 ? card.name : "FIRSTNAME LASTNAME"}</p>
        <p className="card-text">{card.validThrough.length > 0 ? card.validThrough : "MM/YY"}</p>
      </div>
    </div>
  );
};

export default CardComponent;
