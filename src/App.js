import './App.css';
import { Weather } from './Weather';
import { Form } from "./Form";
import { useState } from "react";

export default function App() {
  const [location, setLocation] = useState("");

  function handleInputChange(input) {
    setLocation(input);
  }

  return (
    <>
      <Form 
        location={location} 
        onInputChange={handleInputChange} 
      />
      <Weather location={location} />
    </>
  )

}