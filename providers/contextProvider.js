"use client";
import { createContext, useContext, useEffect, useState } from "react";

const ProjectContext = createContext();
const ContextProvider = ({ children }) => {
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.setItem("user", JSON.stringify(""));
  };

  console.log("user", user);
  return (
    <ProjectContext.Provider
      value={{ isOpen, setIsOpen, user, handleLogin, handleLogout }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export default ContextProvider;

export const useModalContext = () => {
  return useContext(ProjectContext);
};
