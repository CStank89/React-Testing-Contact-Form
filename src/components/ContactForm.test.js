import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("Renders Contact form on ContactForm Copmponent", async () => {
  //Arrange
  render(<ContactForm />);
  //Act
  const firstName = screen.getByText(/first Name/i);
  const lastName = screen.getByText(/last Name/i);
  const email = screen.getByText(/email/i);
  const message = screen.getByText(/message/i);
  const submitB = screen.getByRole(/submit/i);

  fireEvent.change(screen.getByText("Load Greeting"));

  //Assert
  expect(greeting).toBeInTheDocument();
});
