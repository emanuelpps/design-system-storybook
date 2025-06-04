import React from "react";
import styled from "styled-components";
import { inputVariants } from "./styles/Variants";

type Variant = keyof typeof inputVariants;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: Variant;
}

const StyledInput = styled.input<{ $variant: Variant }>`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 1rem;
  ${({ $variant }) => inputVariants[$variant]}
`;

export const Input: React.FC<InputProps> = ({ variant = "default", ...props }) => {
  return <StyledInput $variant={variant} {...props} />;
};
