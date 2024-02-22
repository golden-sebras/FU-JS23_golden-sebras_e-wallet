import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BigButton from "../components/BigButton/BigButton";
import CardComponent from "../components/Card/Card";
import CardStack from "../components/CardStack/CardStack";
import Top from "../components/Top/Top";
import Card from "../types/card";
import "./Home.scss";

const Home = () => {
  const [cards, setCards] = useState<Card[]>(JSON.parse(localStorage.getItem("cards") as string) || []);
  const [activeCard, setActiveCard] = useState<Card>((cards.find((card) => card.active === true) as Card) || undefined);

  const handleUpdateCards = (newCards: Card[]): void => {
    setCards(newCards);
    setActiveCard(newCards.find((card) => card.active === true) as Card);
    localStorage.setItem("cards", JSON.stringify(newCards));
  };

  const navigate = useNavigate();
  const toAddCard = (): void => {
    navigate("addcard");
  };

  return (
    <section className="home">
      <Top title="E-wallet" />
      <h3 className="sub-title">Active card</h3>

      {cards.length > 0 ? (
        activeCard === undefined ? (
          <p style={{ textAlign: "center" }}>You have no active cards. Click one of the cards below to activate it.</p>
        ) : (
          <CardComponent card={activeCard} />
        )
      ) : (
        ""
      )}

      {cards.length > 0 ? (
        <CardStack cards={cards} handleUpdateCards={handleUpdateCards} />
      ) : (
        <p style={{ textAlign: "center" }}>
          You don't have any cards in your wallet. Click the button below to add a card.
        </p>
      )}

      <BigButton text="Add a new card" background="white" color="black" onClick={toAddCard} />
    </section>
  );
};

export default Home;
