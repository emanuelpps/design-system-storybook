import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Select from "../../components/Select/Select";

describe("Select component", () => {
  const options = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
  ];

  it("renders all options correctly", () => {
    render(<Select options={options} />);
    options.forEach(({ label }) => {
      expect(screen.getByText(label)).toBeTruthy();
    });
  });

  it("renders with default variant (primary)", () => {
    render(<Select options={options} />);
    const select = screen.getByRole("combobox");
    expect(select).toBeInTheDocument();
  });

  it("renders with a custom variant", () => {
    render(<Select options={options} variant="secondary" />);
    const select = screen.getByRole("combobox");
    expect(select).toBeInTheDocument();
  });

  it("calls onChange handler when an option is selected", () => {
    const handleChange = vi.fn();
    render(<Select options={options} onChange={handleChange} />);

    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "banana" },
    });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("accepts and applies additional props", () => {
    render(<Select options={options} id="my-select" name="fruit-select" />);
    const select = screen.getByRole("combobox");

    expect(select.getAttribute("id")).toBe("my-select");
    expect(select.getAttribute("name")).toBe("fruit-select");
  });
});
