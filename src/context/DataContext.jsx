import React, { createContext, useState, useEffect} from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {

    const [showNavbar, setShowNavbar] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [color, setColor] = useState("black");
    const [bgColor, setBgColor] = useState("black");

    setTimeout(() => {
      setLoading(false);
    }, 3000);

  return (
    <DataContext.Provider 
      value={{ showNavbar, setShowNavbar, isLoading, setLoading, color, setColor,
              bgColor,setBgColor}}> 
      {children}
    </DataContext.Provider>
  );
};

export { DataProvider, DataContext };

