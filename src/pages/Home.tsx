import { Link } from "react-router-dom";
import cards from "../assets/fakeData/cards";
import CardComponent from "../components/Card/Card";
import Card from "../types/card";
import CardStack from "../components/CardStack/CardStack";
import Top from "../components/Top/Top";
import "./Home.scss";
import BigButton from "../components/BigButton/BigButton";

const Home = () => {
  const activeCard = cards.find((card) => card.active === true) as Card;

  return (
    <section className="home">
      <Top title="E-wallet" />
      <h3 className="sub-title">Active card</h3>
      <CardComponent card={activeCard} />
      <CardStack cards={cards} />
      <BigButton text="Add a new card" background="white" color="black" />
    </section>
  );
};

export default Home;
