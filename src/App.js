import React from "react";
import { Routes, Route } from "react-router-dom";

import LoginPage from "./components/LoginPage";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" Component={LoginPage} />
        <Route path="/SignUp" Component={SignUp} />
      </Routes>
    </div>
  );
}

export default App;
