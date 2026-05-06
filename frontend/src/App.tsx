import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./HomePage"
import LoginPage from "./LoginPage"
import RegisterPage from "./RegisterPage"

  
export default function App() {
  return (
    
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/auth/login" element={<LoginPage/>}/>                
        <Route path="/auth/register" element={<RegisterPage/>}/>                
      </Routes>

    </BrowserRouter>

  )
}
