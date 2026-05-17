import { useAuth } from './context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const { login } = useAuth(); // Sacamos la función login del contexto
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Aquí harías tu petición POST al backend (ej. a /api/auth/login)
    // Simulamos la respuesta del backend:
    const mockResponse = {
      token: "un-token-jwt-muy-seguro",
      user: { id: "1", email: "test@opscore.com", rol: "ADMIN" }
    };

    // Usamos el contexto para guardar la sesión
    login(mockResponse.user, mockResponse.token);
    
    // Redirigimos al usuario a la página principal o dashboard
    navigate('/dashboard');
  };

  return (
    <form onSubmit={handleLogin}>
      {/* ... tus inputs de email y contraseña ... */}
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
}