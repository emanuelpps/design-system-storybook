import React from "react";
import { render } from "@testing-library/react";
import type { JSX } from "react";

export function createRender<T>(Component: React.ComponentType<T>) {
  return (props: JSX.IntrinsicAttributes & T) => ({
    ...render(<Component {...props} />, {}),
  });
}
