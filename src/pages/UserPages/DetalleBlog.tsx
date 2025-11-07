
import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { getBlogById } from '../../data/Datablog';

export default function DetalleBlog() {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = getBlogById(Number(id));

  if (!blog) {
    return (
      <div className="container mt-5 text-center">
        <div className="alert alert-warning">
          <h3>Blog no encontrado</h3>
          <p>El blog que estás buscando no existe.</p>
          <Link to="/blogs" className="btn btn-primary">
            Volver al Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Inicio</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/blogs">Blog</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {blog.title}
          </li>
        </ol>
      </nav>

      {/* Header del Blog */}
      <header className="mb-4">
        <span className="badge bg-primary mb-2">{blog.category}</span>
        <h1 className="display-5 fw-bold">{blog.title}</h1>
        
        <div className="d-flex flex-wrap gap-3 align-items-center text-muted mb-3">
          <span>📅 {blog.date}</span>
          <span>⏱️ {blog.readTime}</span>
          {blog.author && (
            <span>👤 Por {blog.author}</span>
          )}
        </div>
      </header>

      {/* Imagen destacada */}
      <div className="text-center mb-4">
        <img 
          src={blog.image} 
          alt={blog.title}
          className="img-fluid rounded shadow"
          style={{ maxHeight: '400px', objectFit: 'cover' }}
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x400/667eea/ffffff?text=Blog+Image';
          }}
        />
      </div>

      {/* Contenido del blog */}
      <article className="mb-5">
        <div 
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </article>

      {/* Etiquetas */}
      <div className="mb-4">
        <h5>Etiquetas:</h5>
        <div className="d-flex flex-wrap gap-2">
          {blog.tags.map(tag => (
            <span key={tag} className="badge bg-secondary">{tag}</span>
          ))}
        </div>
      </div>

      {/* Navegación */}
      <div className="d-flex justify-content-between border-top border-bottom py-3 mb-5">
        <button 
          className="btn btn-outline-primary"
          onClick={() => navigate(-1)}
        >
          ← Volver atrás
        </button>
        <Link to="/blogs" className="btn btn-primary">
          Ver todos los blogs
        </Link>
      </div>
    </div>
  );
}