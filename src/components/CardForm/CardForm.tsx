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
  return (
    <form className="card-form">
      <label htmlFor="cardNumber">CARD NUMBER</label>
      <input
        type="number"
        name="cardNumber"
        id="cardNumber"
        maxLength={16}
        onChange={onChange}
        value={card.cardNumber}
        required
      />
      <label htmlFor="name">CARDHOLDER NAME</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="FIRSTNAME LASTNAME"
        onChange={onChange}
        required
      />
      <div className="card-form__valid-ccv">
        <label htmlFor="validThrough">VALID THRU</label>
        <input
          type="text"
          name="validThrough"
          id="validThrough"
          required
          onChange={onChange}
        />
        <label htmlFor="ccv">CCV</label>
        <input type="text" name="ccv" id="ccv" required onChange={onChange} />
      </div>
      <label htmlFor="vendorId">VENDOR</label>
      <select
        id="vendorId"
        name="vendorId"
        defaultValue={"0"}
        onChange={onChange}
        required
      >
        <option value="0" disabled></option>
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
//Slänga in ett "/" efter dess att 2 siffror matats in i "validThrough"
