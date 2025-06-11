import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import {
  getSubscriptions,
  createSubscription,
  deleteSubscription,
  updateSubscription,
} from "../services/apiService";

function DashboardPage() {
  const navigate = useNavigate();
  const [subscriptions, setSubscriptions] = useState([]);
  const [form, setForm] = useState({
    id: null,
    nombre: "",
    categoria: "",
    costo: "",
    fechaRenovacion: "",
  });

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/login");
    } else {
      fetchData(user.id);
    }
  }, []);

  const fetchData = async (userId) => {
    try {
      const data = await getSubscriptions(userId);
      setSubscriptions(data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo cargar la información",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    const subscriptionData = {
      nombre: form.nombre,
      categoria: form.categoria,
      costo: form.costo,
      fechaRenovacion: form.fechaRenovacion,
      userId: user.id,
    };

    try {
      if (form.id) {
        await updateSubscription(form.id, subscriptionData);
        Swal.fire("Actualizado", "Suscripción actualizada", "success");
      } else {
        await createSubscription(subscriptionData);
        Swal.fire("Creada", "Suscripción registrada", "success");
      }

      setForm({
        id: null,
        nombre: "",
        categoria: "",
        costo: "",
        fechaRenovacion: "",
      });

      fetchData(user.id);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: form.id
          ? "No se pudo actualizar la suscripción"
          : "No se pudo agregar la suscripción",
      });
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteSubscription(id);
      Swal.fire("Eliminada", "Suscripción eliminada", "success");
      const user = JSON.parse(localStorage.getItem("user"));
      fetchData(user.id);
    } catch (error) {
      Swal.fire("Error", "No se pudo eliminar", "error");
    }
  };

  const handleEdit = (sub) => {
    setForm({
      id: sub.id,
      nombre: sub.nombre,
      categoria: sub.categoria,
      costo: sub.costo,
      fechaRenovacion: sub.fechaRenovacion,
    });
  };

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Panel de Suscripciones</h2>
        <button className="btn btn-danger" onClick={handleLogout}>
          Cerrar sesión
        </button>
      </div>

      <form onSubmit={handleSubmit} className="mb-4">
        <h5>{form.id ? "Editar Suscripción" : "Nueva Suscripción"}</h5>
        <div className="row g-3">
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Nombre"
              value={form.nombre}
              onChange={(e) => setForm({ ...form, nombre: e.target.value })}
              required
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Categoría"
              value={form.categoria}
              onChange={(e) =>
                setForm({ ...form, categoria: e.target.value })
              }
              required
            />
          </div>
          <div className="col-md-2">
            <input
              type="number"
              className="form-control"
              placeholder="Costo"
              value={form.costo}
              onChange={(e) => setForm({ ...form, costo: e.target.value })}
              required
            />
          </div>
          <div className="col-md-3">
            <input
              type="date"
              className="form-control"
              value={form.fechaRenovacion}
              onChange={(e) =>
                setForm({ ...form, fechaRenovacion: e.target.value })
              }
              required
            />
          </div>
          <div className="col-md-1">
            <button className="btn btn-success w-100">
              {form.id ? "Actualizar" : "Agregar"}
            </button>
          </div>
        </div>
      </form>

      <div className="row">
        {subscriptions.length === 0 ? (
          <p>No hay suscripciones registradas.</p>
        ) : (
          subscriptions.map((sub) => (
            <div className="col-md-4 mb-4" key={sub.id}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{sub.nombre}</h5>
                  <p className="card-text">
                    <strong>Categoría:</strong> {sub.categoria}
                    <br />
                    <strong>Costo mensual:</strong> ${sub.costo}
                    <br />
                    <strong>Renovación:</strong> {sub.fechaRenovacion}
                  </p>
                  <div className="d-flex justify-content-between">
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => handleEdit(sub)}
                    >
                      Editar
                    </button>
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => handleDelete(sub.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default DashboardPage;
