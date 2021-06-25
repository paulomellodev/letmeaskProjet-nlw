import { ButtonHTMLAttributes } from "react";

import { GeneralButton } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

const Button = ({ isOutlined = false, ...props }: ButtonProps) => {
  return <GeneralButton isOutlined={isOutlined} {...props} />;
};

export default Button;
