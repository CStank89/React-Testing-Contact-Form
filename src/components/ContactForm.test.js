import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("Renders Contact form on ContactForm Copmponent", async () => {
  //Arrange
  render(<ContactForm />);
  //Act
  const firstName = screen.getByText(/first Name/i);
  const lastName = screen.getByText(/last Name/i);
  const email = screen.getByLabelText(/email/i);
  const message = screen.getByText(/message/i);

  const submitButoon = screen.getByRole("button", { type: /submit/i });

  fireEvent.change(email, { target: { value: "hello@mail.com" } });

  //Assert
  //   expect(emailtext).toHaveTextContent('@')

  //   expect(firstName).toBeInTheDocument();
});
