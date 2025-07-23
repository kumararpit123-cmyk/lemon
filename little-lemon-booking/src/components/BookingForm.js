import React, { useState } from "react";

function BookingForm({ onConfirm }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: 1
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required.";
    if (!formData.date) newErrors.date = "Date is required.";
    if (!formData.time) newErrors.time = "Time is required.";
    if (formData.guests < 1) newErrors.guests = "At least 1 guest.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) onConfirm(formData);
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Booking form" id="booking">
      <h2>Reserve a Table</h2>
      <label htmlFor="name">Name</label>
      <input name="name" value={formData.name} onChange={handleChange} aria-required="true" />
      {errors.name && <span role="alert">{errors.name}</span>}

      <label htmlFor="email">Email</label>
      <input name="email" value={formData.email} onChange={handleChange} aria-required="true" />
      {errors.email && <span role="alert">{errors.email}</span>}

      <label htmlFor="date">Date</label>
      <input type="date" name="date" value={formData.date} onChange={handleChange} aria-required="true" />
      {errors.date && <span role="alert">{errors.date}</span>}

      <label htmlFor="time">Time</label>
      <input type="time" name="time" value={formData.time} onChange={handleChange} aria-required="true" />
      {errors.time && <span role="alert">{errors.time}</span>}

      <label htmlFor="guests">Guests</label>
      <input type="number" name="guests" min="1" value={formData.guests} onChange={handleChange} aria-required="true" />
      {errors.guests && <span role="alert">{errors.guests}</span>}

      <button type="submit">Confirm Booking</button>
    </form>
  );
}

export default BookingForm;