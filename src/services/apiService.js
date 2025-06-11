// Dirección del API (json-server o backend simulado)
const API_URL = "https://api-prueba1-eog3.onrender.com";

// ✅ Función para el login de usuario
export const login = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/users`);
    if (!response.ok) {
      throw new Error("No se pudo conectar al servidor");
    }
    const users = await response.json();
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    return user;
  } catch (error) {
    console.error("Error en el servicio de login:", error);
    throw error;
  }
};

// ✅ Obtener las suscripciones solo del usuario actual
export const getSubscriptions = async (userId) => {
  const response = await fetch(`${API_URL}/suscripciones?userId=${userId}`);
  if (!response.ok) throw new Error("Error al obtener suscripciones");
  return await response.json();
};

// ✅ Crear nueva suscripción (ya incluye userId en el cuerpo)
export const createSubscription = async (data) => {
  const response = await fetch(`${API_URL}/suscripciones`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Error al crear suscripción");
  return await response.json();
};

// ✅ Eliminar una suscripción
export const deleteSubscription = async (id) => {
  const response = await fetch(`${API_URL}/suscripciones/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Error al eliminar suscripción");
};

// ✅ Editar una suscripción
export const updateSubscription = async (id, data) => {
  const response = await fetch(`${API_URL}/suscripciones/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Error al actualizar suscripción");
  return await response.json();
};

// ✅ Registro de nuevo usuario (para la página de registro)
export const registerUser = async (data) => {
  const response = await fetch(`${API_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Error al registrar usuario");
  return await response.json();
};
