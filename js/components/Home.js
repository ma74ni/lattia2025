const { inject } = Vue;

const Home = {
  template: `
    <section>
      <div class="bg-gradient-to-b from-[#F18700] to-[#FFF6A0] rounded-t-lg">
        <div class="w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center pt-12 gap-8">
          <img src="./assets/images/lattia_1.png" alt="Lattia chart 1"
               class="w-56 md:w-[286px] h-auto md:h-[346px] object-contain" />
          <div class="text-center text-lila max-w-xl">
            <h2 class="font-nerko text-4xl md:text-[70px] leading-tight">HOLA! SOY LATTIA</h2>
            <p class="mt-4 text-base md:text-lg">
              Te doy la bienvenida con una gran sonrisa y mucho cariño. <br>
              Aquí cada producto se prepara de forma artesanal, con amor y pensado para compartir momentos especiales en familia.<br>
              ¡Ven, recorre el menú y déjate sorprender por nuestros sabores más queridos!
            </p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="w-[90%] mx-auto py-12">
        <h2 class="font-nerko text-3xl md:text-[36px] text-lila text-center md:text-left mb-6">LOS MIMADOS</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div v-for="item in destacados" :key="item.id" class="text-center p-4 bg-white rounded-lg shadow">
            <div class="h-64 flex items-center justify-center">
              <img :src="item.imagen" :alt="item.nombre" class="max-h-full max-w-full object-contain" />
            </div>
            <h4 class="text-xl font-semibold mt-4">{{ item.nombre }}</h4>
            <p class="text-sm mt-1">{{ item.descripcion }}</p>
            <p class="text-lg font-bold text-lattia mt-2">$ {{ item.preciosPorLocal.local1?.toFixed(2) || '0.00' }}</p>
          </div>
        </div>
        <div class="text-center mt-12">
          <a href="#/menu" class="rounded-md bg-lila px-5 py-3 text-white text-lg hover:bg-lattia">Ver todo el menú</a>
        </div>
      </div>
    </section>
    <section>
      <div class="flex flex-col md:flex-row w-full">
        <div class="bg-[#F7C482] flex-1 flex flex-col items-center justify-center text-center pt-6 md:pt-10">
          <h2 class=" font-nerko text-lila text-xl md:text-[35px] font-bold mb-4">SABÍAS QUÉ...</h2>
          <div class="flex flex-col items-center md:items-start md:flex-row gap-4">
            <img
              src="./assets/images/lattia_2.png" alt="Lattia chart 2"
              class="w-32 md:w-40 lg:w-48"
            />
            <p class="text-lila text-base md:text-[20px] max-w-xs text-left">
              Todos nuestros productos<br />
              son elaborados de forma<br />
              artesanal.
            </p>
          </div>
        </div>
        <div class="patron flex-1 bg-[#AC69AB] p-6 md:p-10"></div>
      </div>
    </section>
    <section>
      <div class="linea flex-1 p-6 md:py-[100px]"></div>
    </section>
  `,
  setup() {
    const datos = inject("datosLattia");

    // 🔹 Computed con productos destacados
    const destacados = computed(() =>
      (datos.value?.productos || []).filter((p) => p.destacado === true)
    );

    return {
      destacados,
    };
  },
};
