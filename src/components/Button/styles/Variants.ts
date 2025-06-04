import { css } from 'styled-components';

export const buttonVariants = {
  primary: css`
    background-color: #0055ff;
    color: white;
    border: none;

    &:hover {
      background-color: #0041cc;
    }
  `,
  success: css`
    background-color: #28a745;
    color: white;
    border: none;

    &:hover {
      background-color: #218838;
    }
  `,
  danger: css`
    background-color: #dc3545;
    color: white;
    border: none;

    &:hover {
      background-color: #c82333;
    }
  `,
  warning: css`
    background-color: #ffc107;
    color: black;
    border: none;

    &:hover {
      background-color: #e0a800;
    }
  `,
  secondary: css`
    background-color: #6c757d;
    color: white;
    border: none;

    &:hover {
      background-color: #5a6268;
    }
  `,
  tertiary: css`
    background-color: transparent;
    color: #0055ff;
    border: 1px solid #0055ff;

    &:hover {
      background-color: rgba(0, 85, 255, 0.1);
    }
  `,
} as const;
