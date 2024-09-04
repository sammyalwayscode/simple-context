import { createContext, useState } from "react";

export const NameContext = createContext();

// eslint-disable-next-line react/prop-types
export const NameProvider = ({ children }) => {
  const myName = "Sammy";
  const [counter, setCounter] = useState(0);

  return (
    <NameContext.Provider value={{ myName, counter, setCounter }}>
      {children}
    </NameContext.Provider>
  );
};
