import React from "react";
import counterStore from "@/store/counter";
import tabBarStore from "@/store/tabbar";

export const storesContext = React.createContext({
  counterStore:counterStore,
  tabBarStore:tabBarStore,
});

export const useStores = () => React.useContext(storesContext);
