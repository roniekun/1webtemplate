import React, { createContext, useState, useEffect} from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {

    const btColor = "rgba(0, 0, 0, .9)"
    const wtColor = "rgba(225, 225, 225, .6)"
    const [isLoading, setLoading] = useState(true);
    const [color, setColor] = useState("black");
    const [isToggleMenu, setToggleMenu] = useState (false);
    const [bgColor, setBgColor] = useState(wtColor);

    setTimeout(() => {
      setLoading(false);
    }, 3000);

  return (
    <DataContext.Provider 
      value={{ isLoading, setLoading, color, setColor, btColor, wtColor,
              bgColor, setBgColor, setToggleMenu, isToggleMenu}}> 
      {children}
    </DataContext.Provider>
  );
};

export { DataProvider, DataContext };

