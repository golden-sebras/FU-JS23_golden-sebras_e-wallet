import { Link } from "react-router-dom";
import cards from "../assets/fakeData/cards";
import CardComponent from "../components/Card";
import Card from "../types/card";
import CardStack from "../components/CardStack";

const Home = () => {
  const activeCard = cards.find((card) => card.active === true) as Card;

  return (
    <>
      <h1>Home</h1>
      <h2>Active card</h2>
      <CardComponent card={activeCard} />
      <h2>Inactive cards</h2>
      <CardStack cards={cards} />
      <Link to="/addcard">Add card</Link>
    </>
  );
};

export default Home;
