import "./BigButton.scss";

const Button = ({ text, background, color }: { text: string; background: string; color: string }) => {
  return <a style={{ backgroundColor: background, color: color }}>{text}</a>;
};

export default Button;
