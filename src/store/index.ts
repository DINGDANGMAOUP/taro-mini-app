import React from "react";
import counterStore from "@/store/counter";
import tabBarStore from "@/store/tabbar";
import userStore from "@/store/user";


export const storesContext = React.createContext({
  counterStore:counterStore,
  tabBarStore:tabBarStore,
  userStore:userStore
});

export const useStores = () => React.useContext(storesContext);
