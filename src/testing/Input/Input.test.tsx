import { describe, it, expect, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import { Input } from "../../components/Input/Input";

describe("Input component", () => {
  it("renders with a placeholder", () => {
    const placeholder = "Enter text";
    const { getByPlaceholderText } = render(
      <Input placeholder={placeholder} />
    );
    const input = getByPlaceholderText(placeholder);

    expect(input).toBeTruthy();
  });

  it("applies default variant", () => {
    const { getByRole } = render(<Input />);
    const input = getByRole("textbox");

    expect(input.className).toBeTruthy();
  });

  it("applies custom variant", () => {
    const { getByRole } = render(<Input variant="error" />);
    const input = getByRole("textbox");

    expect(input.className).toBeTruthy();
  });

  it("accepts and applies additional props", () => {
    const { getByRole } = render(<Input id="my-input" />);
    const input = getByRole("textbox");

    expect(input.getAttribute("id")).toBe("my-input");
  });

  it("calls onChange when value changes", () => {
    const handleChange = vi.fn();
    const { getByRole } = render(<Input onChange={handleChange} />);
    const input = getByRole("textbox");

    fireEvent.change(input, { target: { value: "hello" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
