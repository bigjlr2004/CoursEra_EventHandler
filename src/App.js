import "./App.css";
import GuessButton from "./GuessButton";
import InputComponent from "./InputComponent";
import { useState } from "react";
import RegisterForm from "./RegisterForm";

function App() {
  const [form, setForm] = useState({
    firstName: "Luke",
    lastName: "Jones",
    email: "lukeJones@sculpture.com",
  });

  return (
    <div className="App">
      <h1>
        <GuessButton />
      </h1>
      <h2>
        <InputComponent />
      </h2>
      <h3>
        <RegisterForm form={form} setForm={setForm} />
      </h3>
    </div>
  );
}

export default App;
