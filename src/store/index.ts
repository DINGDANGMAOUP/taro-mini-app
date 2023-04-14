import React from "react";
import counterStore from "./counter";

export const storesContext = React.createContext({
  counterStore:counterStore,
});

export const useStores = () => React.useContext(storesContext);
