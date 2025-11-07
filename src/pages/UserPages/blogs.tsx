import { Link } from 'react-router-dom';
import { getAllBlogs } from '../../data/Datablog';

export default function Blogs() {
  const blogs = getAllBlogs();

  return (
    <div className="container mt-4">
      {/* Header del Blog */}
      <div className="bg-primary text-white p-5 rounded-3 mb-4 text-center">
        <h1 className="display-4 fw-bold">📚 Blog de Temito Store</h1>
        <p className="lead mb-0">Descubre noticias, casos curiosos y tips sobre tecnología</p>
      </div>

      {/* Sección de Noticias Importantes */}
      <div className="alert alert-warning text-center mb-5">
        <h2 className="h4 mb-2">🚨 NOTICIAS IMPORTANTES</h2>
        <p className="mb-0">Mantente informado con las últimas novedades y actualizaciones de Store Web</p>
      </div>

      {/* Grid de Blogs */}
      <h2 className="text-center mb-4 border-bottom pb-3">Casos Curiosos y Noticias</h2>
      
      <div className="row g-4">
        {blogs.map(blog => (
          <div key={blog.id} className="col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm">
              <img 
                src={blog.image} 
                alt={blog.title}
                className="card-img-top"
                style={{ height: '200px', objectFit: 'cover' }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300x200/667eea/ffffff?text=Blog+Image';
                }}
              />
              <div className="card-body d-flex flex-column">
                <span className="badge bg-primary mb-2 align-self-start">{blog.category}</span>
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text flex-grow-1">{blog.excerpt}</p>
                <div className="mt-auto">
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">{blog.date}</small>
                    <Link to={`/blogs/${blog.id}`} className="btn btn-outline-primary btn-sm">
                      Ver Caso →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}