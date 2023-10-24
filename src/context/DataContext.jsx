import React, { createContext, useState, useEffect} from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {

    const [isLoading, setLoading] = useState(true);
    const [color, setColor] = useState("black");
    const [isToggleMenu, setToggleMenu] = useState (false);
    const [bgColor, setBgColor] = useState("white");

    setTimeout(() => {
      setLoading(false);
    }, 3000);

  return (
    <DataContext.Provider 
      value={{ isLoading, setLoading, color, setColor,
              bgColor, setBgColor, setToggleMenu, isToggleMenu}}> 
      {children}
    </DataContext.Provider>
  );
};

export { DataProvider, DataContext };

