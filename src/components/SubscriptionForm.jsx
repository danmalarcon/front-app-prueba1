import { useState } from "react";
import { createSubscription } from "../services/apiService";
import Swal from "sweetalert2";

function SubscriptionForm({ onSubscriptionAdded }) {
  const [form, setForm] = useState({
    nombre: "",
    costo: "",
    categoria: "",
    fechaRenovacion: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación simple
    if (
      !form.nombre ||
      !form.costo ||
      !form.categoria ||
      !form.fechaRenovacion
    ) {
      Swal.fire("Campos vacíos", "Todos los campos son obligatorios", "warning");
      return;
    }

    try {
      await createSubscription(form);
      Swal.fire("Éxito", "Suscripción agregada correctamente", "success");
      setForm({
        nombre: "",
        costo: "",
        categoria: "",
        fechaRenovacion: "",
      });
      onSubscriptionAdded();
    } catch (error) {
      Swal.fire("Error", "No se pudo agregar la suscripción", "error");
    }
  };

  return (
    <form className="mb-4" onSubmit={handleSubmit}>
      <h4>Agregar nueva suscripción</h4>
      <div className="row g-2">
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            name="nombre"
            placeholder="Nombre del servicio"
            value={form.nombre}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-2">
          <input
            type="number"
            className="form-control"
            name="costo"
            placeholder="Costo mensual"
            value={form.costo}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            name="categoria"
            placeholder="Categoría"
            value={form.categoria}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-2">
          <input
            type="date"
            className="form-control"
            name="fechaRenovacion"
            value={form.fechaRenovacion}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-2">
          <button type="submit" className="btn btn-success w-100">
            Guardar
          </button>
        </div>
      </div>
    </form>
  );
}

export default SubscriptionForm;
