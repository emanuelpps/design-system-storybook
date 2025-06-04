import { css } from "styled-components";

export const inputVariants = {
  default: css`
    border: 1px solid #ccc;
    padding: 0.5rem 0.75rem;
    border-radius: 4px;
    font-size: 1rem;

    &:focus {
      outline: none;
      border-color: #0055ff;
      box-shadow: 0 0 0 2px rgba(0, 85, 255, 0.2);
    }
  `,
  error: css`
    border: 1px solid #dc3545;

    &:focus {
      border-color: #dc3545;
      box-shadow: 0 0 0 2px rgba(220, 53, 69, 0.2);
    }
  `,
  success: css`
    border: 1px solid #28a745;

    &:focus {
      border-color: #28a745;
      box-shadow: 0 0 0 2px rgba(40, 167, 69, 0.2);
    }
  `,
} as const;
