const About = {
  template: `
    <section class="nosotros">
      <h2>Nuestra historia</h2>
      <p>{{ historia }}</p>

      <h3>El equipo</h3>
      <div class="equipo-grid">
        <div v-for="miembro in equipo" class="equipo-card">
          <img :src="miembro.foto" :alt="miembro.nombre" />
          <h4>{{ miembro.nombre }}</h4>
          <p>{{ miembro.rol }}</p>
        </div>
      </div>
    </section>
  `,
  data() {
    return {
      historia: "Somos una heladería familiar ubicada al sur de Quito. Desde 1997, llevamos sabor, alegría y tradición a cada cliente que confía en nuestros helados naturales, espumillas y postres caseros.",
      equipo: [
        {
          nombre: "Diego",
          rol: "Fundador y maestro heladero",
          foto: "img/diego.jpg"
        },
        {
          nombre: "Camila",
          rol: "Diseño y atención al cliente",
          foto: "img/camila.jpg"
        },
        {
          nombre: "Mateo",
          rol: "Marketing y redes sociales",
          foto: "img/mateo.jpg"
        }
      ]
    };
  }
};
