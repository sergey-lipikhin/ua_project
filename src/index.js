import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Store from './store/Store';

const root = ReactDOM.createRoot(document.getElementById('root'))

console.log(process.env.REACT_APP_API_URL) 
export const Context = createContext(null)

root.render(
  <Context.Provider value={{ 
    store: new Store(), 
  }}> 
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Context.Provider> 
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
