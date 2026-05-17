import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./HomePage"
import LoginPage from "./LoginPage"
import RegisterPage from "./RegisterPage"
import { AuthProvider } from "./context/AuthProvider" // <-- Importamos desde AuthProvider

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/auth/login" element={<LoginPage/>}/>                
          <Route path="/auth/register" element={<RegisterPage/>}/>                
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}