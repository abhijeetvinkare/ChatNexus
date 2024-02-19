import { Route, Routes } from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import Login from "./Pages/LoginandSignupPages/Login/Login";
import Signup from "./Pages/LoginandSignupPages/Signup/Signup";
import Chatwindow from "./Pages/ChatWindow/Chatwindow";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Cookies from "js-cookie";

const THEME_COOKIE_KEY = "theme";

function App() {
  
  const isDarkMode = useSelector((state) => state.toggle.value);
  useEffect(() => {
    document.body.setAttribute("data-theme", isDarkMode ? "dark" : "light");

    // Save theme in cookie
    Cookies.set(THEME_COOKIE_KEY, isDarkMode ? "dark" : "light");
  }, [isDarkMode]);
  

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/sign-up" element={<Signup />}></Route>
        <Route exact path="/chat" element={<Chatwindow />}></Route>
      </Routes>
    </div>
  );
}

export default App;
