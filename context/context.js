
"use client";
import { createContext, useState } from "react";

const MyContext = createContext(null);

const MyProvider = ({ children }) => {
  const [userState, setUserState] = useState({
    user: null,
    isAuthenticated: false,
    selectedTour: null,
  });

  const login = (user) => {
    setUserState({ ...userState, user, isAuthenticated: true });
  };

  const logout = () => {
    setUserState({
      ...userState,
      user: null,
      isAuthenticated: false,
      selectedTour: null,
    });
  };

  const selectTour = (tour) => {
    setUserState({ ...userState, selectedTour: tour });
  };

  const clearTour = () => {
    setUserState({ ...userState, selectedTour: null });
  };

  return (
    <MyContext.Provider
      value={{ userState, login, logout, selectTour, clearTour }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
