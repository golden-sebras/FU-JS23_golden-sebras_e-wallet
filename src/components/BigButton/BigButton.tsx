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
  onClick: () => void;
}) => {
  return (
    <a style={{ backgroundColor: background, color: color }} onClick={onClick}>
      {text}
    </a>
  );
};

export default Button;
