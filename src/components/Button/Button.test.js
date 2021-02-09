import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./index";
import theme from "../../theme";
import { ThemeProvider } from "styled-components";

describe("Button", () => {
  // Snapshot TEST
  test("Button matches snapshot", () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Button>Button</Button>
      </ThemeProvider>
    );

    expect(component).toMatchSnapshot();
  });

  // onClick TEST
  test("Button activates onClick function", () => {
    const handleClick = jest.fn();

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button onClick={handleClick}>Click Me</Button>
      </ThemeProvider>
    );

    fireEvent.click(getByText(/click me/i));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // Color TEST
  test("Button color matches properties", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button variant="primary">primary</Button>
        <Button variant="secondary">secondary</Button>
        <Button variant="error">error</Button>
        <Button variant="warning">warning</Button>
        <Button variant="success">success</Button>
      </ThemeProvider>
    );

    const primary = getByText(/primary/i);
    const secondary = getByText(/secondary/i);
    const error = getByText(/error/i);
    const warning = getByText(/warning/i);
    const success = getByText(/success/i);

    expect(primary.prop("variant")).toBe("primary");
    expect(primary.prop("shade")).toBe("main");

    expect(secondary.prop("variant")).toBe("secondary");
    expect(secondary.prop("shade")).toBe("main");
  });

  // Text TEST
  test("Button text matches children", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Button>Text</Button>
      </ThemeProvider>
    );

    const button = getByTestId("button");

    expect(button.textContent).toBe("Text");
  });
});
