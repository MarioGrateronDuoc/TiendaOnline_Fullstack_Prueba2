// data/blogData.ts
export interface Blog {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  image: string;
  readTime: string;
  content: string;
  tags: string[];
  author: string;
}

export const blogData: Blog[] = [
  {
    id: 1,
    title: "CASO: La Revolución de los Dispositivos Inteligentes",
    category: "Tecnología",
    excerpt: "Descubre cómo los dispositivos inteligentes están transformando la forma en que interactuamos con la tecnología en nuestro día a día.",
    date: "15 Dic 2024",
    image: "/img/blogs/caso-curioso-1.jpg",
    readTime: "5 min de lectura",
    author: "Store Web Team",
    tags: ["Tecnología", "Dispositivos Inteligentes", "IoT", "Innovación"],
    content: `
      <p>En los últimos años, hemos sido testigos de una transformación radical en la forma en que interactuamos con la tecnología. Los dispositivos inteligentes han pasado de ser artículos de lujo a elementos esenciales en nuestros hogares y vidas diarias.</p>

      <h2>La Evolución de los Hogares Inteligentes</h2>
      <p>Lo que comenzó con termostatos inteligentes y luces controladas por voz ha evolucionado hacia ecosistemas completos que gestionan desde la seguridad hasta el entretenimiento. Hoy en día, es posible controlar prácticamente todos los aspectos de nuestro hogar a través de un smartphone o mediante comandos de voz.</p>

      <blockquote class="blockquote">
        "La verdadera magia de los dispositivos inteligentes no está en lo que pueden hacer por sí solos, sino en cómo trabajan juntos para crear experiencias seamless."
      </blockquote>

      <h3>Wearables: Más Allá de Contar Pasos</h3>
      <p>Los wearables han evolucionado significativamente desde los primeros rastreadores de actividad física. Hoy en día, estos dispositivos pueden:</p>
      <ul>
        <li>Monitorear signos vitales en tiempo real</li>
        <li>Detectar anomalías cardíacas</li>
        <li>Analizar patrones de sueño</li>
        <li>Integrarse con servicios de emergencia</li>
      </ul>

      <h2>El Futuro de la Conectividad</h2>
      <p>Con la llegada del 5G y el desarrollo del Internet de las Cosas (IoT), la interconexión entre dispositivos será aún más fluida. Pronto veremos ciudades inteligentes donde los semáforos, el transporte público y los servicios urbanos estarán interconectados para mejorar la calidad de vida.</p>

      <h3>Desafíos y Consideraciones</h3>
      <p>A medida que adoptamos más dispositivos inteligentes, también debemos considerar:</p>
      <ol>
        <li>Privacidad y seguridad de datos</li>
        <li>Interoperabilidad entre diferentes marcas</li>
        <li>Impacto ambiental de la producción y desecho</li>
        <li>Accesibilidad para todos los segmentos de la población</li>
      </ol>

      <p>La revolución de los dispositivos inteligentes apenas comienza. A medida que la tecnología continúa avanzando, podemos esperar innovaciones que hoy solo imaginamos en la ciencia ficción.</p>
    `
  },
  {
    id: 2,
    title: "CASO: El Futuro de la Realidad Aumentada", 
    category: "Innovación",
    excerpt: "Explora las increíbles posibilidades que ofrece la realidad aumentada en el comercio electrónico y más allá.",
    date: "10 Dic 2024", 
    image: "/img/blogs/caso-curioso-2.jpg",
    readTime: "7 min de lectura",
    author: "Store Web Team",
    tags: ["Realidad Aumentada", "Innovación", "Tecnología", "Comercio"],
    content: `
      <p>La realidad aumentada (AR) está revolucionando la forma en que interactuamos con el mundo digital y físico. Desde probadores virtuales hasta navegación mejorada, esta tecnología está transformando múltiples industrias.</p>

      <h2>AR en el Comercio Electrónico</h2>
      <p>Imagina poder probarte ropa virtualmente antes de comprar, ver cómo quedaría un mueble en tu living o probar diferentes colores de pintura en tus paredes. La realidad aumentada está haciendo esto posible, reduciendo significativamente las devoluciones y mejorando la experiencia del cliente.</p>

      <blockquote class="blockquote">
        "La realidad aumentada no reemplaza la realidad, sino que la mejora con capas de información útil y experiencias interactivas."
      </blockquote>

      <h3>Aplicaciones Prácticas de la AR</h3>
      <ul>
        <li><strong>Compras:</strong> Probadores virtuales de ropa, gafas y accesorios</li>
        <li><strong>Educación:</strong> Modelos 3D interactivos para el aprendizaje</li>
        <li><strong>Medicina:</strong> Visualización de anatomía y procedimientos</li>
        <li><strong>Turismo:</strong> Guías interactivas y reconstrucciones históricas</li>
        <li><strong>Manufactura:</strong> Asistencia en ensamblaje y mantenimiento</li>
      </ul>

      <h2>Tecnologías Impulsoras</h2>
      <p>El avance de la AR se debe a varias tecnologías convergentes:</p>
      <ol>
        <li><strong>Procesamiento en la nube:</strong> Para cálculos complejos</li>
        <li><strong>5G:</strong> Baja latencia para experiencias en tiempo real</li>
        <li><strong>IA y ML:</strong> Reconocimiento de objetos y escenas</li>
        <li><strong>Sensores avanzados:</strong> LiDAR, cámaras de profundidad</li>
      </ol>

      <h3>Desafíos Técnicos</h3>
      <p>A pesar del progreso, aún existen desafíos significativos:</p>
      <ul>
        <li>Precisión en el tracking y registro</li>
        <li>Consumo de batería en dispositivos móviles</li>
        <li>Integración con diferentes hardware</li>
        <li>Creación de contenido escalable</li>
      </ul>

      <p>El futuro de la realidad aumentada es prometedor. A medida que la tecnología madure, veremos aplicaciones que hoy solo podemos imaginar, transformando fundamentalmente cómo trabajamos, aprendemos y nos entretenemos.</p>
    `
  },
  {
    id: 3,
    title: "Guía Definitiva para Elegir tu Próximo Smartphone",
    category: "Guía",
    excerpt: "Todo lo que necesitas saber para seleccionar el smartphone perfecto según tus necesidades y presupuesto.",
    date: "5 Dic 2024",
    image: "/img/blogs/guia-compras.jpg", 
    readTime: "8 min de lectura",
    author: "Store Web Team",
    tags: ["Smartphone", "Guía", "Comparativa", "Tecnología"],
    content: `
      <p>Elegir un nuevo smartphone puede ser abrumador con tantas opciones disponibles. Esta guía te ayudará a tomar la mejor decisión basada en tus necesidades reales.</p>

      <h2>Antes de Comprar: Define tu Presupuesto y Necesidades</h2>
      <p>Lo primero es determinar cuánto estás dispuesto a gastar y para qué usarás principalmente el teléfono. No todos necesitan el modelo más caro.</p>

      <h3>Preguntas Clave:</h3>
      <ul>
        <li>¿Eres un usuario básico o avanzado?</li>
        <li>¿Juegas videojuegos intensivos?</li>
        <li>¿Tomas muchas fotos y videos?</li>
        <li>¿Necesitas mucha autonomía de batería?</li>
      </ul>

      <blockquote class="blockquote">
        "El mejor smartphone no es necesariamente el más caro, sino el que mejor se adapta a tu estilo de vida y necesidades específicas."
      </blockquote>

      <h2>Características Esenciales a Considerar</h2>

      <h3>1. Pantalla</h3>
      <ul>
        <li><strong>Tamaño:</strong> 6.1" a 6.7" para un balance ideal</li>
        <li><strong>Tecnología:</strong> OLED para mejores negros y colores</li>
        <li><strong>Refresh Rate:</strong> 90Hz o 120Hz para mayor fluidez</li>
      </ul>

      <h3>2. Cámara</h3>
      <ul>
        <li><strong>Principal:</strong> Mínimo 12MP con estabilización</li>
        <li><strong>Ultra gran angular:</strong> Para paisajes y grupos</li>
        <li><strong>Telefoto:</strong> Para zoom óptico de calidad</li>
        <li><strong>Video:</strong> 4K a 60fps como estándar</li>
      </ul>

      <h3>3. Rendimiento</h3>
      <ul>
        <li><strong>RAM:</strong> 6GB mínimo, 8GB recomendado</li>
        <li><strong>Almacenamiento:</strong> 128GB base, 256GB ideal</li>
        <li><strong>Procesador:</strong> Snapdragon 7 series o equivalente</li>
      </ul>

      <h3>4. Batería</h3>
      <ul>
        <li><strong>Capacidad:</strong> 4,000mAh mínimo</li>
        <li><strong>Carga rápida:</strong> Mínimo 25W</li>
        <li><strong>Inalámbrica:</strong> Opcional pero conveniente</li>
      </ul>

      <h2>Comparativa por Rango de Precio</h2>

      <h3>Gama de Entrada (Menos de $300)</h3>
      <p><strong>Recomendaciones:</strong> Xiaomi Redmi Note series, Samsung Galaxy A series</p>
      <p>Ideal para usuarios básicos que necesitan funcionalidades esenciales.</p>

      <h3>Gama Media ($300 - $700)</h3>
      <p><strong>Recomendaciones:</strong> Google Pixel series, OnePlus Nord series</p>
      <p>El mejor balance calidad-precio para la mayoría de usuarios.</p>

      <h3>Gama Alta (Más de $700)</h3>
      <p><strong>Recomendaciones:</strong> iPhone Pro series, Samsung Galaxy S series</p>
      <p>Para quienes buscan lo último en tecnología y rendimiento.</p>

      <h2>Consejos Finales</h2>
      <ol>
        <li>Lee reseñas de usuarios reales</li>
        <li>Prueba el teléfono en tienda si es posible</li>
        <li>Considera el ecosistema (si ya tienes otros dispositivos)</li>
        <li>Verifica la política de actualizaciones del fabricante</li>
        <li>No te dejes llevar solo por las especificaciones técnicas</li>
      </ol>

      <p>Recuerda que el smartphone perfecto es el que se adapta a tu vida, no al revés. Tómate tu tiempo para investigar y elegir sabiamente.</p>
    `
  },
  {
    id: 4,
    title: "Tendencias Tecnológicas que Dominarán el 2024",
    category: "Tendencias",
    excerpt: "Un análisis profundo de las tecnologías más prometedoras y disruptivas que definirán el próximo año.",
    date: "1 Dic 2024",
    image: "/img/blogs/tendencias-2024.jpg",
    readTime: "6 min de lectura", 
    author: "Store Web Team",
    tags: ["Tendencias", "Tecnología", "2024", "Innovación"],
    content: `
      <p>El 2024 promete ser un año de aceleración tecnológica sin precedentes. Estas son las tendencias que marcarán la diferencia en el próximo año.</p>

      <h2>1. Inteligencia Artificial Generativa Mainstream</h2>
      <p>La IA generativa dejará de ser una novedad para convertirse en una herramienta cotidiana. Veremos su integración en:</p>
      <ul>
        <li><strong>Productividad:</strong> Asistentes de IA en suites ofimáticas</li>
        <li><strong>Creatividad:</strong> Herramientas de diseño y contenido</li>
        <li><strong>Desarrollo:</strong> Programación asistida por IA</li>
        <li><strong>Educación:</strong> Tutores personalizados inteligentes</li>
      </ul>

      <blockquote class="blockquote">
        "La IA en 2024 no será sobre reemplazar humanos, sino sobre aumentar nuestras capacidades y creatividad."
      </blockquote>

      <h2>2. Computación Cuántica Aplicada</h2>
      <p>Mientras la computación cuántica universal sigue siendo lejana, veremos aplicaciones prácticas en:</p>
      <ul>
        <li><strong>Optimización:</strong> Logística y cadena de suministro</li>
        <li><strong>Descubrimiento de medicamentos:</strong> Simulación molecular</li>
        <li><strong>Finanzas:</strong> Modelado de riesgo y fraudes</li>
        <li><strong>Materiales:</strong> Diseño de nuevos compuestos</li>
      </ul>

      <h2>3. Sostenibilidad Tecnológica</h2>
      <p>La ecología será un driver principal de innovación:</p>
      <ul>
        <li><strong>Hardware circular:</strong> Diseño modular y reparabilidad</li>
        <li><strong>Energía eficiente:</strong> Chips de bajo consumo</li>
        <li><strong>Centros de datos verdes:</strong> Energía renovable y refrigeración natural</li>
        <li><strong>Embalajes sostenibles:</strong> Reducción de plásticos</li>
      </ul>

      <h2>4. Interfaces Naturales de Usuario</h2>
      <p>La interacción con la tecnología se volverá más intuitiva:</p>
      <ul>
        <li><strong>Control por voz avanzado:</strong> Contexto y emociones</li>
        <li><strong>Gestos:</strong> Interacción sin contacto</li>
        <li><strong>Interfaces cerebrales:</strong> Primeros dispositivos comerciales</li>
        <li><strong>Realidad mixta:</strong> Transición fluida entre AR y VR</li>
      </ul>

      <h2>5. Privacidad y Seguridad Proactiva</h2>
      <p>Ante crecientes amenazas, la seguridad evolucionará hacia:</p>
      <ul>
        <li><strong>Cero Confianza:</strong> Verificación continua</li>
        <li><strong>IA defensiva:</strong> Detección predictiva de amenazas</li>
        <li><strong>Privacidad por diseño:</strong> Enfoque desde el desarrollo</li>
        <li><strong>Computación confidencial:</strong> Datos encriptados en uso</li>
      </ul>

      <h2>6. Computación Edge Mainstream</h2>
      <p>El procesamiento se moverá más cerca del usuario:</p>
      <ul>
        <li><strong>IoT inteligente:</strong> Procesamiento local en dispositivos</li>
        <li><strong>Baja latencia:</strong> Aplicaciones en tiempo real</li>
        <li><strong>Privacidad:</strong> Datos procesados localmente</li>
        <li><strong>Eficiencia:</strong> Reducción de ancho de banda</li>
      </ul>

      <h3>Impacto en la Vida Cotidiana</h3>
      <p>Estas tendencias se traducirán en mejoras tangibles para los usuarios:</p>
      <ol>
        <li>Dispositivos más inteligentes y contextuales</li>
        <li>Experiencias digitales más inmersivas</li>
        <li>Mayor control sobre la privacidad de datos</li>
        <li>Tecnología más sostenible y responsable</li>
        <li>Herramientas que aumentan la creatividad humana</li>
      </ol>

      <p>El 2024 será recordado como el año en que la tecnología dejó de ser solo una herramienta para convertirse en un partner inteligente en nuestra vida diaria. La clave estará en adoptar estas innovaciones de manera responsable y ética.</p>
    `
  }
];

export const getBlogById = (id: number): Blog | undefined => {
  return blogData.find(blog => blog.id === id);
};

export const getAllBlogs = (): Blog[] => {
  return blogData;
};