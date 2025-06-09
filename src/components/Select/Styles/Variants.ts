import styled, { css } from "styled-components";

export const selectVariants = {
  primary: css`
    background-color: white;
    color: black;
    border: 1px solid #ccc;
  `,
  secondary: css`
    background-color: #f0f0f0;
    color: #444;
    border: 1px solid #aaa;
  `,
  ghost: css`
    background-color: transparent;
    color: black;
    border: none;
  `,
  error: css`
    background-color: #ffe5e5;
    color: #a00;
    border: 1px solid #f00;
  `,
} as const;

export const StyledSelect = styled.select<{
  $variant: keyof typeof selectVariants;
}>`
  padding: 0.5rem 1rem;
  border-radius: 6px;
  outline: none;
  transition: all 0.2s ease-in-out;

  ${({ $variant }) => selectVariants[$variant]}
`;
