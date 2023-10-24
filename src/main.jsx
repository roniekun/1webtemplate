import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { DataContext, DataProvider } from './context/DataContext.jsx'
// import * as serviceWorker from './serviceWorker';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   < BrowserRouter>
   <DataProvider>
    <DataContext.Consumer>
       {({color, bgColor, setColor, setBgColor, setToggleMenu, isToggleMenu,btColor,wtColor}) =>( 
    <App color={color} bgColor={bgColor} setBgColor={setBgColor} 
        setColor={setColor} setToggleMenu={setToggleMenu} isToggleMenu={isToggleMenu}
        btColor={btColor} wtColor={wtColor} />
    )}
    </DataContext.Consumer>
    </DataProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
