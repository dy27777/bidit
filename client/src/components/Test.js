import { useState } from "react";

const Test = ({ isLogin }) => {
  const [users, setUsers] = useState([]);
  const [file, setFile] = useState();

  const getUsers = async () => {
    const res = await fetch("http://localhost:3001/getUsers", {
      credentials: "include",
    });
    const data = await res.json();
    console.log(data);
    setUsers(data);
  };

  const submitFile = async () => {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("http://localhost:3001/file", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();

    console.log(data);
  };

  return (
    <>
      {isLogin && (
        <div>
          <button onClick={getUsers}>Get all users</button>
          {users.map((o) => {
            return <p>{o.username}</p>;
          })}
        </div>
      )}
      <input
        type="file"
        onChange={(e) => {
          setFile(e.target.files[0]);
        }}
      />
      <button onClick={submitFile}>Submit File</button>
    </>
  );
};

export default Test;
