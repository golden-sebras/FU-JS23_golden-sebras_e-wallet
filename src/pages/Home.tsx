import { Link } from "react-router-dom";
import cards from "../assets/fakeData/cards";
import Card from "../components/Card";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <ul>
        {cards.map((card) => (
          <li>
            <Card key={card.id} card={card} />
          </li>
        ))}
      </ul>
      <Link to="/addcard">Add card</Link>
    </>
  );
};

export default Home;
