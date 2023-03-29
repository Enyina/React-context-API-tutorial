import axios from "axios";
import { createContext, useEffect, useState } from "react";
import AuthReducers from "./AuthReducers";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: null,
};

export const AuthContext = createContext(initialState);

export const AuthProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const login = async (userCridentials) => {
    try {
      setState(AuthReducers.startLogin());
      const res = await axios.post(
        "https://shopkego-server.onrender.com/api/v1/auth/login",
        userCridentials
      );
      console.log(res);

      setState(AuthReducers.loginSuccess(res.data.data.data));
      console.log(setState(AuthReducers.loginSuccess(res.data.data.user)));
      console.log(state.user);
    } catch (error) {
      setState(AuthReducers.loginFailure(error));
    }
  };

  const logout = () => {
    setState(AuthReducers.logout());
  };
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
