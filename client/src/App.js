import "./App.css";
import Nav from "./components/Nav";
import Post from "./components/Post";

const num = [1, 2, 3];

function App() {
  return (
    <div className="app">
      <Nav />
      <div className="app_posts"></div>
      {num.map((n) => {
        return <Post />;
      })}
    </div>
  );
}

export default App;
