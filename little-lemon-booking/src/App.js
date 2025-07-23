import React from "react";
import Header from "./components/Header";
import BookingForm from "./components/BookingForm";
import Confirmation from "./components/Confirmation";
import "./App.css";

function App() {
  const [confirmed, setConfirmed] = React.useState(false);
  const [formData, setFormData] = React.useState({});

  return (
    <div>
      <Header />
      <main>
        {!confirmed ? (
          <BookingForm onConfirm={(data) => { setFormData(data); setConfirmed(true); }} />
        ) : (
          <Confirmation data={formData} />
        )}
      </main>
    </div>
  );
}

export default App;