"use client";
import { createContext, useContext, useState } from "react";

const ProjectContext = createContext();
const ContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  console.log("user", user);
  return (
    <ProjectContext.Provider value={{ isOpen, setIsOpen, user, setUser }}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ContextProvider;

export const useModalContext = () => {
  return useContext(ProjectContext);
};
