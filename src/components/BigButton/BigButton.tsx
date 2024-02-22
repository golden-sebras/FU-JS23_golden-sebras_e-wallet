import { MouseEventHandler } from "react";
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
  onClick: MouseEventHandler;
}) => {
  return (
    <a style={{ backgroundColor: background, color: color }} className="big-button" onClick={onClick}>
      {text}
    </a>
  );
};

export default Button;
