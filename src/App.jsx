import { Routes, Route} from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Login } from "./Pages/Login/Login";
import {Register} from "./Pages/Register/Register";

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>   
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </>
  )
}

export default App