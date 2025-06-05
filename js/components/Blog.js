const Blog = {
  template: `
    <section class="blog">
      <h2>Artículos del Blog</h2>
      <div class="blog-grid">
        <div v-for="articulo in articulos" class="blog-card">
          <img :src="articulo.imagen" :alt="articulo.titulo" />
          <h3>{{ articulo.titulo }}</h3>
          <p>{{ articulo.resumen }}</p>
          <button @click="abrirArticulo(articulo)">Leer más</button>
        </div>
      </div>

      <div class="modal" v-if="articuloActivo">
        <div class="modal-content">
          <h2>{{ articuloActivo.titulo }}</h2>
          <p>{{ articuloActivo.contenido }}</p>
          <button @click="cerrarArticulo">Cerrar</button>
        </div>
      </div>
    </section>
  `,
  data() {
    return {
      articulos: [
        {
          id: 1,
          titulo: "¿Por qué los helados naturales saben mejor?",
          resumen: "Descubre qué hace tan especiales a nuestros sabores.",
          contenido:
            "Nuestros helados están elaborados con frutas naturales, sin colorantes ni saborizantes artificiales. Cada sabor es cuidadosamente seleccionado para ofrecerte una experiencia auténtica y refrescante...",
          imagen: "img/blog1.jpg"
        },
        {
          id: 2,
          titulo: "El origen de la espumilla tradicional",
          resumen: "Un recorrido dulce por la historia de este clásico.",
          contenido:
            "La espumilla es una tradición ecuatoriana que acompaña muchas celebraciones. Su sabor suave y su textura ligera la hacen perfecta para combinar con helados, frutas o sola...",
          imagen: "img/blog2.jpg"
        }
      ],
      articuloActivo: null
    };
  },
  methods: {
    abrirArticulo(articulo) {
      this.articuloActivo = articulo;
    },
    cerrarArticulo() {
      this.articuloActivo = null;
    }
  }
};
