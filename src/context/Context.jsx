import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

// provider function
const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    

    useEffect(() => {
      
    }, []);


  return (
    <AppContext.Provider value={{
        loading,
        setLoading,
    }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider,useGlobalContext };