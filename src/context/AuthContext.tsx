import { createContext, useState } from "react";
import { User } from "../types/user";

type AuthContextProps = {
  user: User | null;
  setAuth: (user: User | null) => void;
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<null | User>(null);
  console.log(user);
  const setAuth = (user: User | null) => {
    setUser(user);
  };
  return (
    <AuthContext.Provider value={{ user, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
