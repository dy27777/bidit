import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ setIsLogin }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    pwd: "",
  });
  const [formErr, setFormErr] = useState({
    username: "",
    pwd: "",
  });

  const sendLoginForm = async () => {
    setFormErr({
      username: "",
      pwd: "",
    });

    if (!formData.username) {
      setFormErr((p) => {
        return { ...p, username: "Username or Email is required" };
      });
    }

    if (!formData.pwd) {
      setFormErr((p) => {
        return { ...p, pwd: "Password is required" };
      });
    }

    if (!formData.username || !formData.pwd) {
      return;
    }

    try {
      const res = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.auth) {
        setIsLogin(true);
        navigate(data.redirect);
      } else {
        setFormErr((p) => {
          return { ...p, [data.comp]: data.err };
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="add">
      <div className="add_form">
        <label htmlFor="username">Username or Email:</label>
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
      <Link to="/test">Go to Test</Link>
    </div>
  );
};

export default Login;
