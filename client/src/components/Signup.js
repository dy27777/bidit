import { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    pwd: "",
  });

  const [formErr, setFormErr] = useState({
    username: "",
    email: "",
    pwd: "",
  });

  const sendSignupForm = async () => {
    setFormErr({
      username: "",
      email: "",
      pwd: "",
    });

    if (!formData.username) {
      setFormErr((p) => {
        return { ...p, username: "Username is required" };
      });
    }

    if (!formData.email) {
      setFormErr((p) => {
        return { ...p, email: "Email is required" };
      });
    }

    if (!formData.pwd) {
      setFormErr((p) => {
        return { ...p, pwd: "Password is required" };
      });
    }

    if (!formData.username || !formData.email || !formData.pwd) {
      return;
    }

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
        <p className="form_err">{formErr.username}</p>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          onChange={(e) => {
            setFormData((p) => {
              return { ...p, [e.target.id]: e.target.value };
            });
          }}
        />
        <p className="form_err">{formErr.email}</p>
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
        <p className="form_err">{formErr.pwd}</p>
        <button onClick={sendSignupForm} className="btn">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Signup;
