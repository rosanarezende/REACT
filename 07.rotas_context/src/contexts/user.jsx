import { createContext, useContext } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const name = "Maria";

  return (
    <UserContext.Provider value={{ name }}>
      {children}
    </UserContext.Provider>
  );
}

const useUserContext = () => useContext(UserContext);


export { UserContext, UserProvider, useUserContext };
