import { useState } from 'react';
import type { IContacto } from '../data/contactosData';

interface Props {
  onSubmit: (contacto: Omit<IContacto, 'id' | 'fecha'>) => void;
}

export const ContactoForm: React.FC<Props> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.nombre && formData.email && formData.mensaje) {
      onSubmit(formData);
      setFormData({ nombre: '', email: '', mensaje: '' });
      alert('✅ Mensaje enviado correctamente');
    } else {
      alert('⚠️ Por favor completa todos los campos');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label fw-semibold">Nombre completo</label>
        <input 
          type="text" 
          className="form-control form-control-lg"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Ingresa tu nombre"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label fw-semibold">Email</label>
        <input 
          type="email" 
          className="form-control form-control-lg"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="tu@email.com"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="mensaje" className="form-label fw-semibold">Mensaje</label>
        <textarea 
          className="form-control form-control-lg"
          id="mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          placeholder="Escribe tu mensaje aquí..."
          rows={5}
          required
        />
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary btn-lg">
          <i className="bi bi-send me-2"></i>
          Enviar Mensaje
        </button>
      </div>
    </form>
  );
};

export default ContactoForm;