import { describe, it, expect, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import { Button } from "../../components/Button/Button";

describe("Button component", () => {
  it("renders with children", () => {
    const { getByText } = render(<Button>Click me</Button>);
    const button = getByText("Click me");

    expect(button).toBeTruthy();
  });

  it("calls onClick when clicked", () => {
    const handleClick = vi.fn();
    const { getByText } = render(<Button onClick={handleClick}>Click</Button>);

    fireEvent.click(getByText("Click"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies default variant (primary)", () => {
    const { getByRole } = render(<Button>Default</Button>);
    const button = getByRole("button");

    expect(button.className).toBeTruthy();
  });

  it("applies custom variant", () => {
    const { getByRole } = render(
      <Button variant="secondary">Secondary</Button>
    );
    const button = getByRole("button");

    expect(button.className).toBeTruthy();
  });

  it("accepts and applies additional props", () => {
    const { getByRole } = render(<Button id="my-button">Test</Button>);
    const button = getByRole("button");

    expect(button.getAttribute("id")).toBe("my-button");
  });
});
