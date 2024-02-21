import { ChangeEventHandler, MouseEventHandler } from "react";
import vendors from "../../assets/constants/vendors";
import "./CardForm.scss";
import BigButton from "../BigButton/BigButton";
import Card from "../../types/card";

const CardForm = ({
  card,
  onChange,
  onSubmit,
}: {
  card: Card;
  onChange: ChangeEventHandler;
  onSubmit: MouseEventHandler;
}) => {
  const handleDateChange = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Backspace") {
      return;
    }

    if (event.currentTarget.value.length === 2) {
      event.currentTarget.value = `${event.currentTarget.value}/`;
    }
  };

  const handleCardNumberChange = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Backspace") {
      return;
    }

    if (
      event.currentTarget.value.length === 4 ||
      event.currentTarget.value.length === 9 ||
      event.currentTarget.value.length === 14
    ) {
      event.currentTarget.value = `${event.currentTarget.value} `;
    }
  };

  return (
    <form className="card-form">
      <label htmlFor="cardNumber">Card number</label>
      <input
        type="text"
        name="cardNumber"
        id="cardNumber"
        placeholder="1234 1234 1234 1234"
        maxLength={19}
        value={card.cardNumber}
        onChange={onChange}
        onKeyDown={handleCardNumberChange}
        required
      />
      <label htmlFor="name">Cardholder name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={card.name}
        placeholder="Firstname Lastname"
        onChange={onChange}
        required
      />
      <div className="card-form__valid-ccv">
        <label htmlFor="validThrough">Valid Thru</label>
        <input
          type="text"
          name="validThrough"
          placeholder="MM/YY"
          id="validThrough"
          value={card.validThrough}
          maxLength={5}
          required
          onChange={onChange}
          onKeyDown={handleDateChange}
        />
        <label htmlFor="ccv">CCV</label>
        <input
          type="text"
          name="ccv"
          placeholder="123"
          value={card.ccv}
          maxLength={3}
          id="ccv"
          required
          onChange={onChange}
        />
      </div>
      <label htmlFor="vendorId">Vendor</label>
      <select id="vendorId" name="vendorId" defaultValue={"0"} onChange={onChange} required>
        {vendors.map((vendor) => (
          <option key={`vendor-${vendor.id}`} value={vendor.id}>
            {vendor.name}
          </option>
        ))}
      </select>
      <BigButton text="Add card" background="black" color="white" onClick={onSubmit} />
    </form>
  );
};

export default CardForm;

//Todo - Säkerställ att enbart nummer kan matas in i kortnummer(input) och att enbart bokstäver på "Cardholder Name"
