import { createContext, useContext, useState } from "react";

const TabsContext = createContext({});

function TabsProvider({ children }) {
  const [tab, setTab] = useState("_hello");
  const changeTab = (tab) => {
    setTab(tab);
  };

  return (
    <TabsContext.Provider
      value={{
        tab,
        changeTab,
      }}
    >
      {children}
    </TabsContext.Provider>
  );
}

const useTabs = () => {
  const context = useContext(TabsContext);
  return context;
};

export { useTabs, TabsProvider };
