import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    pwd: "",
  });

  const sendSignupForm = async () => {
    try {
      const res = await fetch("http://localhost:3001/signup", {
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
        <button onClick={sendSignupForm} className="btn">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Signup;
