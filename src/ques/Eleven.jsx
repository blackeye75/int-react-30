import React, { useState } from "react";

const quotes = [
  "Stay humble.",
  "Dream big.",
  "Be kind.",
  "Keep going.",
  "Love yourself.",
  "Never quit.",
  "Embrace change.",
  "Think positive.",
  "Live simply.",
  "Stay curious.",
];
const Eleven = () => {
  const [quote, setQuote] = useState("");
  const handle = () => {
    const index = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[index]);
  };

  return (
    <>
      <p>Your quote:{quote}</p>
      <button onClick={handle} >Click me</button>
    </>
  );
};

export default Eleven;
