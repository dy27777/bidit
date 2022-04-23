import { useState } from "react";

const Test = ({ isLogin }) => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const res = await fetch("http://localhost:3001/getUsers", {
      credentials: "include",
    });
    const data = await res.json();
    console.log(data);
    setUsers(data);
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
    </>
  );
};

export default Test;
