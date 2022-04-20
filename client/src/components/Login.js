import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    pwd: "",
  });

  const sendLoginForm = async () => {
    try {
      const res = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="add">
      <div className="add_form">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          onChange={(e) => {
            setFormData((p) => {
              return { ...p, [e.target.id]: e.target.value };
            });
          }}
        />
        <label htmlFor="pwd">Password:</label>
        <input
          type="password"
          id="pwd"
          onChange={(e) => {
            setFormData((p) => {
              return { ...p, [e.target.id]: e.target.value };
            });
          }}
        />
        <button onClick={sendLoginForm} className="btn">
          Log In
        </button>
      </div>
      <div className="login_questions">
        <h4>Forgot Password?</h4>
        <h4>
          Don't have an Account? <Link to="/account/signup">Sign up here.</Link>
        </h4>
      </div>
    </div>
  );
};

export default Login;
