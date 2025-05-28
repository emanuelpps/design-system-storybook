import React from "react";
import { ButtonProps } from "./Button.props";

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  onClick,
  ...props
}) => {
  return (
    <button onClick={onClick} {...props} className={`button-${variant}`}>
      {children}
    </button>
  );
};

export default Button;
