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
