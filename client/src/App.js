import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
import Main from "./pages/Main";
import LoginPage from "./pages/Login";
// import CreateBlog from "./pages/CreateBlog";
import Demo from "./pages/Demo";
import Explore from "./pages/Explore";
import Interests from "./Components/SignUp/Interests";
import SignUp from "./pages/SignUp";
import Test from "./pages/Test";
import Friends from "./pages/Friends";
import BlogSlug from "./pages/BlogSlug";
import PasswordReset from "./pages/PasswordReset";
import ForgotPassword from "./pages/ForgotPassword";
import HOME from "./pages/HOME";
import Loading from "./pages/Loading";
import YourBlogs from "./pages/YourBlogs";
import EditBlog from "./pages/EditBlog";
import CreateBlog from "./pages/CreateBlog";
import Profile from "./pages/Profile";
import Cookies from "js-cookie";

function App() {
  const isLoggedIn = Cookies.get('userId') ? true : false;

  return (
    <Router>
      <Routes>
      <>
            <Route exact path="/" element={<Main />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/signup" element={<SignUp/>}></Route>
          </>
        {isLoggedIn && (
          <>
            <Route path="/home" element={<HOME />}></Route>
            <Route path="/createblog" element={<CreateBlog />}></Route>
            <Route path="/demo" element={<Demo />}></Route>
            <Route path="/explore" element={<Explore />}></Route>
            <Route path="/test" element={<Test />}></Route>
            <Route path="/interests" element={<Interests />}></Route>
            <Route path="/friends" element={<Friends />}></Route>
            <Route path="/slug" element={<BlogSlug />}></Route>
            <Route path="/password-reset" element={<PasswordReset />}></Route>
            <Route path="/forgotpassword/:id/:token" element={<ForgotPassword />}></Route>
            <Route path="/loading" element={<Loading />}></Route>
            <Route path="/yourblogs" element={<YourBlogs />}></Route>
            <Route path="/edit" element={<EditBlog />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
          </>
        )}
      </Routes>
    </Router>
  );
}


export default App;
