import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "../components/BookingForm";

test("renders form and validates required fields", () => {
  render(<BookingForm onConfirm={() => {}} />);
  const submitButton = screen.getByText(/Confirm Booking/i);
  fireEvent.click(submitButton);
  expect(screen.getByText(/Name is required./i)).toBeInTheDocument();
});