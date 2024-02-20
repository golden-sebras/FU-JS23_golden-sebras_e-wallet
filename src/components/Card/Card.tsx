import "./Card.scss";
import Card from "../../types/card";
import vendors from "../../assets/constants/vendors";
import Vendor from "../../types/vendor";
import chipLogo from "../../assets/img/chip.png";
import wifiLogo from "../../assets/img/wifi.png";

const CardComponent = ({ card }: { card: Card }) => {
  const cardVendor = vendors.find((vendor) => vendor.id === card.vendorId) as Vendor;

  return (
    <div className="card" style={{ backgroundColor: cardVendor.color, color: cardVendor.textColor }}>
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

{
  /* <ul
style={{
  backgroundColor: cardVendor.color,
  color: cardVendor.textColor,
}}
>
<li>{card.cardNumber}</li>
<li>CARDHOLDER NAME{card.name}</li>
<li>{card.validThrough}</li>
<li>{cardVendor.color}</li>
<li>
  <img src={`../assets/img/${cardVendor.icon}`} />
</li>
</ul> */
}
