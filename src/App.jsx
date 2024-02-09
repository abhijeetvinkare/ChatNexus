import { Route, Routes } from "react-router-dom";
import Home from "./Pages/HomePage/Home"
import Login from "./Pages/LoginandSignupPages/Login"
import Signup from "./Pages/LoginandSignupPages/Signup"

function App() {

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/sign-up" element={<Signup />}></Route>
      </Routes>
    </div>
  )
}

export default App
