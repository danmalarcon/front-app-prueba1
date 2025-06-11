import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import RegisterPage from "./auth/RegisterPage";

function App() {
  return (
    // BrowserRouter envuelve toda la aplicación para habilitar las rutas o navegación
    <BrowserRouter>
      {/* Contiene todas las rutas de la aplicación individuales */}
      <Routes>
        {/* Reglas por cada route para cada navegación */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Ruta protegida: solo accesible si hay sesión iniciada */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />

        {/* Redirección por defecto */}
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
