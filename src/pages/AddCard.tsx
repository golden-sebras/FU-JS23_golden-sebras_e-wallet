import Top from "../components/Top/Top";
import CardForm from "../components/CardForm/CardForm";
import Card from "../types/card";
import "./AddCard.scss";
import { useState } from "react";
import CardComponent from "../components/Card/Card";
import { useNavigate } from "react-router-dom";

const AddCard = () => {
  const navigate = useNavigate();

  const initialCard: Card = {
    id: 0,
    cardNumber: "",
    name: "",
    validThrough: "",
    ccv: "",
    vendorId: "0",
    active: false,
  };

  const [temporaryCard, setTemporaryCard] = useState<Card>(initialCard);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === "cardNumber" || name === "ccv") {
      const parsedValue = Number(value.replace(/ /g, ""));

      !isNaN(parsedValue) &&
        setTemporaryCard((prevInput) => ({
          ...prevInput,
          [name]: value,
        }));
    } else if (name === "validThrough") {
      const parsedValue = Number(value.replace(/\//g, ""));

      !isNaN(parsedValue) &&
        setTemporaryCard((prevInput) => ({
          ...prevInput,
          [name]: value,
        }));
    } else if (name === "name") {
      const nonLetters = value.match(/[^a-zA-Z\u00C0-\u017F\s]/g);

      !nonLetters &&
        setTemporaryCard((prevInput) => ({
          ...prevInput,
          [name]: value,
        }));
    } else {
      setTemporaryCard((prevInput) => ({
        ...prevInput,
        [name]: value,
      }));
    }
  };

  const formValidator = () => {
    if (temporaryCard.cardNumber.replace(/ /g, "").length !== 16) {
      return "Card number has to be 16 digits.";
    }

    if (temporaryCard.name.trim().split(/\s+/).length < 2) {
      return "Card holder has to be full name.";
    }

    const validThroughDate = temporaryCard.validThrough.split("/");
    const currentDate = new Date();
    const currentYear = String(currentDate.getFullYear()).slice(2);
    if (Number(validThroughDate[0]) > 12) {
      return "Month needs to be less than 12.";
    }
    if (Number(validThroughDate[1]) < Number(currentYear)) {
      return "Year can't be in the past.";
    }

    if (temporaryCard.ccv.length < 3) {
      return "CCV has to be three digits.";
    }

    if (temporaryCard.vendorId === "0") {
      return "You need to select a vendor.";
    }

    return true;
  };

  const handleSubmit = (): void => {
    const validation = formValidator();

    if (validation !== true) {
      alert(validation);
      return;
    }

    const lastCardId = JSON.parse(localStorage.getItem("lastCardId") as string) || 0;
    const newCardId = lastCardId + 1;
    localStorage.setItem("lastCardId", newCardId);

    const temp = JSON.parse(localStorage.getItem("cards") as string) || [];
    temporaryCard.id = newCardId;
    temp.push(temporaryCard);
    localStorage.setItem("cards", JSON.stringify(temp));

    navigate("/");
  };

  return (
    <section className="add-card">
      <Top title="Add a new bank card" />
      <h3 className="sub-title">Add card</h3>
      <CardComponent card={temporaryCard} />
      <CardForm card={temporaryCard} onChange={handleInputChange} onSubmit={handleSubmit} />
    </section>
  );
};

export default AddCard;
