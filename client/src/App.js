import "./App.css";
import Nav from "./components/Nav";
import Post from "./components/Post";
import { IoAddOutline } from "react-icons/io5";

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1, 1, 1, 1];

const fetchAdd = async () => {
  try {
    const res = await fetch("http://localhost:3001/");
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

function App() {
  return (
    <div className="app">
      <Nav />
      <div className="app_posts">
        {num.map((n) => {
          return <Post />;
        })}
      </div>
      <div onClick={fetchAdd} className="app_add">
        <IoAddOutline />
      </div>
    </div>
  );
}

export default App;
