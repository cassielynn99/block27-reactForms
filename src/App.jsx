import { useState } from "react";
import "./App.css";
import Authenticate from "./components/Authenticate";
import SignUpForm from "./components/SignUpForm";

//to view: http://localhost:5173/

function App() {
  return (
    <>
      <SignUpForm />
      <Authenticate />
    </>
  );
}

export default App;
