import React from "react";
import { StyledSelect } from "./Styles/Variants";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: { value: string; label: string }[];
  variant?: "primary" | "secondary" | "ghost" | "error";
}

const Select: React.FC<SelectProps> = ({
  options,
  variant = "primary",
  ...props
}) => {
  return (
    <StyledSelect $variant={variant} {...props}>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Select;
