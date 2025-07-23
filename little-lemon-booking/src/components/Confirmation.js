import React from "react";

function Confirmation({ data }) {
  return (
    <section>
      <h2>Booking Confirmed!</h2>
      <p>
        Thank you, {data.name}! Your table for {data.guests} on {data.date} at {data.time} has been reserved.
      </p>
    </section>
  );
}

export default Confirmation;