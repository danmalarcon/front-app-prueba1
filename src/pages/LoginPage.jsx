import { useState, useEffect } from "react";
import { login } from "../services/apiService";
import Swal from "sweetalert2";
import { useNavigate, Link } from "react-router-dom";

function LoginPage() {
  // Creo los estados para guardar el email y la contraseña
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // Un estado para guardar mensajes
  const navigate = useNavigate(); // Hook para navegar entre páginas

  // Si el usuario ya está autenticado, redirige automáticamente al dashboard
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/dashboard");
    }
  }, []);

  // Creo una función que manejará el envío del formulario
  const handleLogin = async (e) => {
    e.preventDefault(); // evita que el navegador recargue la página que es su comportamiento por defecto
    setError(null); // Limpia errores anteriores

    try {
      // Llama al servicio y espera la respuesta
      const user = await login(email, password);

      if (user) {
        console.log("Login exitoso", user);
        localStorage.setItem("user", JSON.stringify(user)); // Guarda al usuario en localStorage

        // Muestra alerta bonita con SweetAlert2
        await Swal.fire({
          icon: "success",
          title: "¡Inicio de sesión exitoso!",
          showConfirmButton: false,
          timer: 1500,
        });

        // Redirige al dashboard
        navigate("/dashboard");
      } else {
        console.log("Credenciales incorrectas");
        setError(
          "Credenciales incorrectas. Por favor, verifica tu email y contraseña."
        );
      }
    } catch (err) {
      console.log("Error al iniciar sesión:", err);
      setError("No se pudo conectar con el servidor");
    }
  };

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="col-12 col-sm-10 col-md-6 col-lg-4">
        <div className="card shadow">
          <div className="card-body p-4 p-sm-5">
            <h3 className="text-center mb-4">Iniciar Sesión en PixelHub</h3>
            {/* Agrego la función handleLogin al evento onSubmit del formulario */}
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Tu contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {/* Si hay un error, lo muestro debajo del formulario */}
              {error && <div className="alert alert-danger">{error}</div>}
              <button type="submit" className="btn btn-primary w-100">
                Ingresar
              </button>
              <Link to="/register" className="btn btn-link">
                ¿No tienes cuenta? Regístrate
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
