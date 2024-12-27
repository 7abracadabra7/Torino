"use client";

import { useGetUserData } from "../services/queries";
import { createContext, useContext } from "react";

const UserContext = createContext();
const UserContextProvider = ({ children }) => {
  const { data, error, isLoading } = useGetUserData();
  if (error) {
    return <p>{error}</p>;
  }
  if (isLoading) {
    return <p>isLoading...</p>;
  }
  if (!data) {
    return <p>where is data...</p>;
  }

  return (
    <UserContext.Provider value={data.data}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
export const useUserContext = () => {
  return useContext(UserContext);
};
