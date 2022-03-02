import { React, useEffect } from "react";
import { fetchUsers } from "../redux/User/userAction";
import { useSelector, useDispatch } from "react-redux";

function UserContainer() {
  const userData = useSelector((state) => state.users);
  // const dispatch = useDispatch(fetchUsers());

  useEffect(() => {
    fetchUsers();
  }, []);

  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>Users List</h2>
      <div>
        {userData &&
          userData.users &&
          userData.users.map((users) => <p>{users.name}</p>)}
      </div>
    </div>
  );
}

export default UserContainer;
