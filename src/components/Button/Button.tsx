import React from "react";

type Variant =
  | "primary"
  | "success"
  | "danger"
  | "warning"
  | "secondary"
  | "tertiary";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  ...props
}) => {
  return (
    <button className={`button button-${variant}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
