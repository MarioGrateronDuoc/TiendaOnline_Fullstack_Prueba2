import { ContactoForm } from '../../components/ContactoForm';
import { useContactosData } from '../../data/contactosData';

const Contacto = () => {
  const { contactos, agregarContacto } = useContactosData();

  const handleSubmitContacto = (contactoData: any) => {
    agregarContacto(contactoData);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          {/* Header */}
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold text-primary">Contáctanos</h1>
            <p className="lead text-muted">
              ¿Tienes alguna pregunta o comentario? Estamos aquí para ayudarte. 
              Escríbenos y te responderemos a la brevedad.
            </p>
          </div>

          {/* Formulario */}
          <div className="card shadow-lg border-0">
            <div className="card-body p-5">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <ContactoForm onSubmit={handleSubmitContacto} />
                </div>
              </div>
            </div>
          </div>

          {/* Información de mensajes */}
          {contactos.length > 0 && (
            <div className="mt-4">
              <div className="alert alert-info d-flex align-items-center">
                <i className="bi bi-chat-dots me-2"></i>
                <span className="fw-semibold">Mensajes enviados: {contactos.length}</span>
              </div>
            </div>
          )}

          {/* Información adicional */}
          <div className="row mt-5">
            <div className="col-md-4 text-center">
              <div className="p-3">
                <i className="bi bi-telephone fs-1 text-primary"></i>
                <h5 className="mt-3">Teléfono</h5>
                <p className="text-muted">+58 412-0880088</p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="p-3">
                <i className="bi bi-envelope fs-1 text-primary"></i>
                <h5 className="mt-3">Email</h5>
                <p className="text-muted">contacto@tienda.com</p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="p-3">
                <i className="bi bi-clock fs-1 text-primary"></i>
                <h5 className="mt-3">Horario</h5>
                <p className="text-muted">Lun-Vie: 9:00 - 18:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;