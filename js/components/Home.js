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
          <div v-for="item in products" class="text-center p-4 bg-white rounded-lg shadow">
            <div class="h-64 flex items-center justify-center">
              <img :src="item.image" :alt="item.name" class="max-h-full max-w-full object-contain" />
            </div>
            <h4 class="text-xl font-semibold mt-4">{{ item.name }}</h4>
            <p class="text-sm mt-1">{{ item.desc }}</p>
            <p class="text-lg font-bold text-lattia mt-2">$ {{ item.price.toFixed(2) }}</p>
          </div>
        </div>
        <div class="text-center mt-12">
          <a href="#/menu" class="rounded-md bg-lila px-5 py-3 text-white text-lg hover:bg-lattia">Ver todo el menú</a>
        </div>
      </div>
    </section>
  `,
  data() {
    return {
      products: mockProducts,
      article: mockArticle,
    };
  },
};
