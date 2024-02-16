import { Link } from "react-router-dom";
import Top from "../components/Top";

const AddCard = () => {
  return (
    <>
      <Top title="Add a new bank card" />
      <Link to="/">Home</Link>
    </>
  );
};

export default AddCard;
