import { Link } from "react-router-dom";
import { useState } from "react";

const Add = () => {
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    image: "",
    goal: 0,
  });

  const sendForm = async () => {
    console.log("sending...");
    const res = await fetch("http://localhost:3001/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    console.log(data);
  };

  return (
    <div className="add">
      <div className="add_form">
        <label htmlFor="title">Title:</label>
        <input
          onChange={(e) => {
            setFormData((p) => {
              return { ...p, [e.target.id]: e.target.value };
            });
          }}
          type="text"
          id="title"
        />
        <label htmlFor="desc">Description:</label>
        <input
          onChange={(e) => {
            setFormData((p) => {
              return { ...p, [e.target.id]: e.target.value };
            });
          }}
          type="text"
          id="desc"
        />
        <label htmlFor="image">Image:</label>
        <input
          onChange={(e) => {
            setFormData((p) => {
              return { ...p, [e.target.id]: e.target.value };
            });
          }}
          type="text"
          id="image"
        />
        <label htmlFor="goal">Goal:</label>
        <input
          onChange={(e) => {
            setFormData((p) => {
              return { ...p, [e.target.id]: e.target.value };
            });
          }}
          type="number"
          id="goal"
        />
        <button className="btn" onClick={sendForm}>
          Start Petition
        </button>
      </div>
    </div>
  );
};

export default Add;
