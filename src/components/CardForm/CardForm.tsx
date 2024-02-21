import { ChangeEventHandler, MouseEventHandler } from "react";
import vendors from "../../assets/constants/vendors";
import Card from "../../types/card";
import "./CardForm.scss";

const CardForm = ({
  card,
  onChange,
  onSubmit,
}: {
  card: Card;
  onChange: ChangeEventHandler;
  onSubmit: MouseEventHandler;
}) => {
  const handleDateChange = (event) => {
    if (event.key === "Backspace") {
      return;
    }

    if (event.target.value.length === 2) {
      event.target.value = `${event.target.value}/`;
    }
  };

  const handleCardNumberChange = (event) => {
    if (event.key === "Backspace") {
      return;
    }

    if (event.target.value.length === 4 || event.target.value.length === 9 || event.target.value.length === 14) {
      event.target.value = `${event.target.value} `;
    }
  };

  return (
    <form className="card-form">
      <label htmlFor="cardNumber">CARD NUMBER</label>
      <input
        type="text"
        name="cardNumber"
        id="cardNumber"
        placeholder="1234 1234 1234 1234"
        maxLength={19}
        onChange={onChange}
        onKeyDown={handleCardNumberChange}
        required
      />
      <label htmlFor="name">CARDHOLDER NAME</label>
      <input type="text" name="name" id="name" placeholder="FIRSTNAME LASTNAME" onChange={onChange} required />
      <div className="card-form__valid-ccv">
        <label htmlFor="validThrough">VALID THRU</label>
        <input
          type="text"
          name="validThrough"
          placeholder="MM/YY"
          id="validThrough"
          required
          onChange={onChange}
          onKeyDown={handleDateChange}
        />
        <label htmlFor="ccv">CCV</label>
        <input type="text" name="ccv" placeholder="123" id="ccv" required onChange={onChange} />
      </div>
      <label htmlFor="vendorId">VENDOR</label>
      <select id="vendorId" name="vendorId" defaultValue={"0"} onChange={onChange} required>
        {vendors.map((vendor) => (
          <option key={`vendor-${vendor.id}`} value={vendor.id}>
            {vendor.name}
          </option>
        ))}
      </select>
      <button onClick={onSubmit}>ADD CARD</button>
    </form>
  );
};

export default CardForm;

//Todo - Säkerställ att enbart nummer kan matas in i kortnummer(input) och att enbart bokstäver på "Cardholder Name"