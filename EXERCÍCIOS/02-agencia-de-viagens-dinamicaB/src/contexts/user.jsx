import { createContext, useContext } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const user = {
    name: "Maria",
    email: "maria@email.com"
  }

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
}

const useUserContext = () => useContext(UserContext);


export { UserContext, UserProvider, useUserContext };
