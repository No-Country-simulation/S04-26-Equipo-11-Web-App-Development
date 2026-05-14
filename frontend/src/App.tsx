import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./HomePage"
import LoginPage from "./LoginPage"
import RegisterPage from "./RegisterPage"
import DashboardLayout from "./layouts/DashboardLayout"
import SupervisorPage from "./SupervisorPage"
import TechnicianPage from "./TechnicianPage"
import OperatorPage from "./OperatorPage"
import SupervisorLayout from "./layouts/SupervisorLayour"
import OperatorLayout from "./layouts/OperatorLayout"
import TechnicianLayout from "./layouts/TechnicianLayout"

  
export default function App() {
  return (
    
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/auth/login" element={<LoginPage/>}/>                
        <Route path="/auth/register" element={<RegisterPage/>}/>     

        <Route path="/dashboard" element={<DashboardLayout/>}>
          <Route path="supervisor" element={<SupervisorLayout/>}>
            <Route index element={<SupervisorPage/>}></Route>
          </Route>
          <Route path="technician" element={<TechnicianLayout/>}>
            <Route index element={<TechnicianPage/>}></Route>
          </Route>
          <Route path="operator" element={<OperatorLayout/>}>
            <Route index element={<OperatorPage/>}></Route>
          </Route>
        </Route>
      </Routes>

    </BrowserRouter>

  )
}
