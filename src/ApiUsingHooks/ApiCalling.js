import React, { useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
  userDetails: [],
  loading: false,
  error: "",
};
const ACTION = {
  FETCH_API: "FETCH_API",
  GET_DATA_SUCCESS: "GET_DATA_SUCCESS",
  ERROR: "ERROR",
};

const detailReducer = (state, action) => {
  switch (action.type) {
    case ACTION.FETCH_API:
      return {
        ...state,
        loading: true,
      };
    case ACTION.GET_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        userDetails: action.data,
      };
    case ACTION.ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
  }
};

function ApiCalling() {
  const [state, dispatch] = useReducer(detailReducer, initialState);
  const { userDetails, loading, error } = state;

  useEffect(() => {
    dispatch({ type: ACTION.FETCH_API });
    const getUsers = async () => {
      try {
        let response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        // console.log("=-=-=-=-=data=-=-=-=-try", response);

        if (response && response.status === 200) {
          dispatch({ type: ACTION.GET_DATA_SUCCESS, data: response.data });
        } else {
          throw new Error("Something went Wrong...!!!");
        }
      } catch (error) {
        // console.log("=-=-=-=-=data=-=-=-=-", error);
        dispatch({ type: ACTION.ERROR, error: error.message });
      }
    };
    getUsers();
  }, []);

  return (
    <div>
      {loading ? (
        <p>loading...</p>
      ) : error ? (
        { error }
      ) : (
        <ul>
          {userDetails.map((user, index) => (
            <li key={index}>
              <h1>{user.name}</h1>
              <p>{user.email}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ApiCalling;
