import { Link, useParams, useNavigate } from 'react-router-dom';
import { getBlogById } from '../../data/Datablog';

export default function DetalleBlog() {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = getBlogById(Number(id));

  if (!blog) {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <div className="card border-0 shadow-lg">
              <div className="card-body py-5">
                <div className="mb-4">
                  <i className="bi bi-exclamation-triangle display-1 text-warning"></i>
                </div>
                <h2 className="text-warning mb-3">Blog No Encontrado</h2>
                <p className="text-muted mb-4">El artículo que estás buscando no existe o ha sido removido.</p>
                <div className="d-flex justify-content-center gap-3">
                  <button 
                    onClick={() => navigate(-1)}
                    className="btn btn-outline-primary"
                  >
                    <i className="bi bi-arrow-left me-2"></i>
                    Volver Atrás
                  </button>
                  <Link to="/blogs" className="btn btn-primary">
                    <i className="bi bi-journal-text me-2"></i>
                    Ir al Blog
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          {/* Breadcrumb mejorado */}
          <nav aria-label="breadcrumb" className="mb-4">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/" className="text-decoration-none">
                  <i className="bi bi-house me-1"></i>
                  Inicio
                </Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/blogs" className="text-decoration-none">
                  <i className="bi bi-journal-text me-1"></i>
                  Blog
                </Link>
              </li>
              <li className="breadcrumb-item active text-truncate" aria-current="page">
                {blog.title}
              </li>
            </ol>
          </nav>

          {/* Header del Blog */}
          <header className="text-center mb-5">
            <div className="mb-3">
              <span className="badge bg-primary bg-gradient fs-6 px-3 py-2">
                <i className="bi bi-tag me-1"></i>
                {blog.category}
              </span>
            </div>
            
            <h1 className="display-4 fw-bold text-dark mb-4">{blog.title}</h1>
            
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="d-flex flex-wrap justify-content-center gap-4 text-muted mb-3">
                  <span className="d-flex align-items-center">
                    <i className="bi bi-calendar3 me-2"></i>
                    {blog.date}
                  </span>
                  <span className="d-flex align-items-center">
                    <i className="bi bi-clock me-2"></i>
                    {blog.readTime}
                  </span>
                  {blog.author && (
                    <span className="d-flex align-items-center">
                      <i className="bi bi-person me-2"></i>
                      Por {blog.author}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </header>

          {/* Imagen destacada */}
          <div className="text-center mb-5">
            <img 
              src={blog.image} 
              alt={blog.title}
              className="img-fluid rounded-3 shadow-lg"
              style={{ 
                maxHeight: '500px', 
                width: '100%', 
                objectFit: 'cover' 
              }}
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://via.placeholder.com/1200x600/667eea/ffffff?text=Blog+Image';
              }}
            />
          </div>

          {/* Contenido del blog */}
          <article className="mb-5">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-5">
                <div 
                  className="blog-content fs-5 lh-base"
                  style={{ lineHeight: '1.8' }}
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />
              </div>
            </div>
          </article>

          {/* Etiquetas */}
          <div className="card border-0 bg-light mb-4">
            <div className="card-body">
              <h5 className="card-title mb-3">
                <i className="bi bi-tags me-2"></i>
                Etiquetas
              </h5>
              <div className="d-flex flex-wrap gap-2">
                {blog.tags.map(tag => (
                  <span key={tag} className="badge bg-secondary bg-gradient fs-6 px-3 py-2">
                    <i className="bi bi-hash me-1"></i>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Navegación */}
          <div className="card border-0 shadow-sm mb-5">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-md-6 mb-3 mb-md-0">
                  <button 
                    className="btn btn-outline-primary btn-lg w-100"
                    onClick={() => navigate(-1)}
                  >
                    <i className="bi bi-arrow-left me-2"></i>
                    Volver Atrás
                  </button>
                </div>
                <div className="col-md-6">
                  <Link to="/blogs" className="btn btn-primary btn-lg w-100">
                    <i className="bi bi-journal-text me-2"></i>
                    Ver Todos los Artículos
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Compartir en redes sociales */}
          <div className="card border-0 bg-light">
            <div className="card-body text-center py-4">
              <h6 className="mb-3">¿Te gustó este artículo? Compártelo:</h6>
              <div className="d-flex justify-content-center gap-3">
                <button className="btn btn-outline-primary btn-sm">
                  <i className="bi bi-facebook me-1"></i>
                  Facebook
                </button>
                <button className="btn btn-outline-info btn-sm">
                  <i className="bi bi-twitter me-1"></i>
                  Twitter
                </button>
                <button className="btn btn-outline-danger btn-sm">
                  <i className="bi bi-envelope me-1"></i>
                  Email
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}