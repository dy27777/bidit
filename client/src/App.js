import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nav from "./components/Nav";
import Post from "./components/Post";
import Add from "./components/Add";
import { IoAddOutline } from "react-icons/io5";
import Error from "./components/Error";
import Login from "./components/Login";
import Signup from "./components/Signup";
import SinglePost from "./components/SinglePost";
import { useState } from "react";
import Test from "./components/Test";

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1, 1, 1, 1];

const linkStyle = {
  textDecoration: "none",
  color: "black",
};

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <Router>
      <Nav linkStyle={linkStyle} />
      <Routes>
        <Route
          path="/"
          element={
            <div className="app">
              <div className="app_posts">
                {num.map((n) => {
                  return <Post linkStyle={linkStyle} />;
                })}
              </div>
              <Link style={linkStyle} to="/add">
                <div className="app_add">
                  <IoAddOutline />
                </div>
              </Link>
            </div>
          }
        />
        <Route path="/add" element={<Add />} />
        <Route
          path="/account/login"
          element={<Login setIsLogin={setIsLogin} />}
        />
        <Route path="/account/signup" element={<Signup />} />
        <Route path="/test/singlePost" element={<SinglePost />} />
        <Route path="/test" element={<Test isLogin={isLogin} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
