import Parent from "./context/Parent"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import { createContext, useState } from "react";
import About from './components/About.jsx'
export let usersData = createContext();
export default function App() {
  let [users, setUsers] = useState([{ name: "raj" }])
  return (
    <div className='bg-primary p-5 m-auto w-75 border'>
      <h4>App Comp</h4>
      <usersData.Provider value={{ users, setUsers }}>
        <Parent />
        <About />
      </usersData.Provider>
    </div>
  )
}
