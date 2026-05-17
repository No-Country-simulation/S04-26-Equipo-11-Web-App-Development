import { createContext, useContext } from 'react';

// Interfaces
export interface User {
  id: string;
  email: string;
  rol: string;
  nombre?: string;
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (userData: User, token: string) => void;
  logout: () => void;
}

// Exportamos el contexto
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Exportamos el custom hook
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};