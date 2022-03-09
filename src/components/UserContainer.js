import React, { useState } from "react";

const UserData = () => {
  const [data, setData] = useState({
    name: "",
    age: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = () => {
    setData({ [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={data.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Age"
          name="age"
          value={data.age}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

import React from "react";

function UserContainer() {
  return (
    <div>
      <UserData />
    </div>
  );
}

export default UserContainer;
