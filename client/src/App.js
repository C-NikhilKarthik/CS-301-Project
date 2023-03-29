import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./pages/Main";
import LoginPage from "./pages/Login";
import CreateBlog from "./pages/CreateBlog";
import Demo from "./pages/Demo";
import Explore from "./pages/Explore";
import Interests from "./Components/SignUp/Interests";
import SignUp from "./pages/SignUp";
import Friends from "./pages/Friends" 

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/createblog" element={<CreateBlog />}></Route>
        <Route path="/demo" element={<Demo />}></Route>
        <Route path="/explore" element={<Explore />}></Route>
        <Route path="/interests" element={<Interests />}></Route>
        <Route path="/friends" element={<Friends />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
