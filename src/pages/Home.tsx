import { Link } from "react-router-dom";
import cards from "../assets/fakeData/cards";
import CardComponent from "../components/Card/Card";
import Card from "../types/card";
import CardStack from "../components/CardStack/CardStack";
import Top from "../components/Top";
import "./Home.scss"

const Home = () => {
  const activeCard = cards.find((card) => card.active === true) as Card;

  return (
    <section className="home">
      <Top title="E-wallet" />
      <h2>Active card</h2>
      <CardComponent card={activeCard} />
      <h2>Inactive cards</h2>
      <CardStack cards={cards} />
      <Link to="/addcard" className="linkBtn">Add card</Link>
    </section>
  );
};

export default Home;
