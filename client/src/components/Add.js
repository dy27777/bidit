import { Link } from "react-router-dom";
import { useState } from "react";

const Add = () => {
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    image: "",
    price: 0,
  });

  const sendAddForm = async () => {
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
        <label htmlFor="price">Price:</label>
        <input
          onChange={(e) => {
            setFormData((p) => {
              return { ...p, [e.target.id]: e.target.value };
            });
          }}
          type="number"
          id="price"
        />
        <button className="btn" onClick={sendAddForm}>
          Auction
        </button>
      </div>
    </div>
  );
};

export default Add;
