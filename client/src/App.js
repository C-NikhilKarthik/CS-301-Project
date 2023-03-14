import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import CreateBlog from "./pages/CreateBlog";
import Demo from "./pages/Demo";
import Explore from "./pages/Explore";
import Interests from "./pages/Interests";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/createblog" element={<CreateBlog />}></Route>
        <Route path="/demo" element={<Demo />}></Route>
        <Route path="/explore" element={<Explore />}></Route>
        <Route path="/interests" element={<Interests />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
