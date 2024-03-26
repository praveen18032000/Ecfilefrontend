import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignupForm from "./pages/signup/signup";
import Verify from "./pages/verify/verify";
import SignIn from "./pages/signin/signin";
import Dashboard from "./pages/dashboard/dashboard";
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={SignIn}/>
          <Route path="/verify" Component={Verify}/>
          <Route path="/signup" Component={SignupForm}/>
          <Route path='/dashboard' Component={Dashboard}/>
        </Routes>
      </BrowserRouter>
    
  );
}

export default App