import { ButtonHTMLAttributes } from "react";

import { GeneralButton } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: ButtonProps) => {
  return <GeneralButton {...props} />;
};

export default Button;
