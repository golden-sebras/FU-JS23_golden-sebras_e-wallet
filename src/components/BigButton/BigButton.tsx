import { NavigateFunction } from "react-router-dom";
import "./BigButton.scss";

const Button = ({
  text,
  background,
  color,
  onClick,
}: {
  text: string;
  background: string;
  color: string;
  onClick: NavigateFunction;
}) => {
  return (
    <a style={{ backgroundColor: background, color: color }} onClick={onClick}>
      {text}
    </a>
  );
};

export default Button;
