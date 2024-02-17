import { Route, Routes } from "react-router-dom";
import Home from "./Pages/HomePage/Home"
import Login from "./Pages/LoginandSignupPages/Login/Login"
import Signup from "./Pages/LoginandSignupPages/Signup/Signup"
import Chatwindow from "./Pages/ChatWindow/Chatwindow";

function App() {

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/sign-up" element={<Signup />}></Route>
        <Route exact path="/chat" element={<Chatwindow />}></Route>
      </Routes>
    </div>
  )
}

export default App
