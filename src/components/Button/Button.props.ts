import { JSX } from "react";

export type ButtonVariant = "primary" | "secondary" | "tertiary";

export interface ButtonProps {
  variant: ButtonVariant;
  onClick: () => void;
  children: JSX.Element;
}
