import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  // Revisa si hay un usuario en localStorage (autenticado)
  const user = localStorage.getItem('user');

  // Si no hay usuario, redirige al login
  if (!user) {
    return <Navigate to="/login" />;
  }

  // Si está autenticado, permite el acceso a la ruta
  return children;
}

export default ProtectedRoute;