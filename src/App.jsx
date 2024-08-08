import { Routes, Route } from "react-router-dom";
import { Login } from "./Pages/Login/Login";
import {Register} from "./Pages/Register/Register";
import ManagerDashboard from "./Pages/ManagerDashboard/ManagerDashboard";
import AdminDashboard from "./Pages/AdminDashboard/AdminDashboard";
import EmployeeDashboard from "./Pages/EmployeeDashboard/EmployeeDashboard";



function App() {

  return (
    <>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/manager-dashboard" element={<ManagerDashboard />} />
        <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
      </Routes>
    </>
  )
}

export default App
