import { Link } from "react-router-dom";
import Top from "../components/Top";
import CardForm from "../components/CardForm/CardForm";
import Card from "../types/card";
import "./AddCard.scss";
import { useState } from "react";
import CardComponent from "../components/Card/Card";

const AddCard = () => {
  const initialCard: Card = {
    id: 0,
    cardNumber: "",
    name: "",
    validThrough: "",
    ccv: "0",
    vendorId: "0",
    active: false,
  };

  const [temporaryCard, setTemporaryCard] = useState(initialCard);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const re = /^[0-9\s\b]+$/;

    if (re.test(event.target.value) || event.target.value === "") {
      const { name, value } = event.target;

      setTemporaryCard((prevInput) => ({
        ...prevInput,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (): void => {
    const lastCardId = JSON.parse(localStorage.getItem("lastCardId") as string) || 0;
    const newCardId = lastCardId + 1;
    localStorage.setItem("lastCardId", newCardId);

    const temp = JSON.parse(localStorage.getItem("cards") as string) || [];
    temporaryCard.id = newCardId;
    temp.push(temporaryCard);
    localStorage.setItem("cards", JSON.stringify(temp));
  };

  return (
    <section className="add-card">
      <Top title="Add a new bank card" />
      <Link to="/">Home</Link>
      <CardComponent card={temporaryCard} />
      <CardForm card={temporaryCard} onChange={handleInputChange} onSubmit={handleSubmit} />
    </section>
  );
};

export default AddCard;
