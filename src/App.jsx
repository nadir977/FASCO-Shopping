import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Home";
import ConfirmationCode from "./ConfirmationCode";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import NewPassword from "./NewPassword";
import ForgotPassword from "./ForgotPassword";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/confirmationCode" element={<ConfirmationCode />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/newpassword" element={<NewPassword />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App;
