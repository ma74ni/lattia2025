const Contact = {
  template: `
    <section class="px-4 py-10 max-w-7xl mx-auto">
      <h2 class="text-2xl md:text-3xl font-nerko text-lila text-center mb-8">Contáctanos</h2>

      <div class="grid md:grid-cols-2 gap-8">
        <div class="space-y-4 text-center md:text-left">
          <p class="text-base md:text-lg"><strong>Quito:</strong> Hoppe Norton y Rother. Esquina.</p>
          <p class="text-base md:text-lg"><strong>Sangolquí:</strong> Subsuelo 1 del River Mall</p>
          <p class="text-base md:text-lg">
            <strong>Correo:</strong>
            <a href="mailto:hola@heladerialattia.ec" class="text-lila underline">
              hola@heladerialattia.ec
            </a>
          </p>

          <div class="flex justify-center md:justify-start gap-4 mt-4">
            <a href="https://facebook.com/heladoslattia.ec" target="_blank" aria-label="Facebook">
              <i data-lucide="facebook" class="w-5 h-5 md:w-6 md:h-6 text-lila"></i>
            </a>
            <a href="https://instagram.com/heladoslattia.ec" target="_blank" aria-label="Instagram">
              <i data-lucide="instagram" class="w-5 h-5 md:w-6 md:h-6 text-lila"></i>
            </a>
            <a href="https://tiktok.com/@heladoslattia.ec" target="_blank" aria-label="TikTok">
              <i data-lucide="music" class="w-5 h-5 md:w-6 md:h-6 text-lila"></i>
            </a>
          </div>
        </div>

        <div class="aspect-w-16 aspect-h-9 w-full rounded shadow">
          <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.778943605988!2d-78.51785009999999!3d-0.25455479999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d5bdf10a441c11%3A0x4f4334b38b079dfd!2sHelader%C3%ADa%20Lattia!5e0!3m2!1ses!2sec!4v1749163141791!5m2!1ses!2sec"
            class="w-full h-full border-0 rounded"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div class="mt-8">
        <h3 class="text-xl font-semibold mb-2 text-lila">Sangolquí</h3>
        <iframe
           src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d838.7425735752657!2d-78.45006587864584!3d-0.3239585105549343!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d599aa55609947%3A0x3af84cce2461ff18!2sHelader%C3%ADa%20Lattia!5e0!3m2!1ses!2sec!4v1749188648142!5m2!1ses!2sec"
          class="w-full h-[300px] border-0 rounded shadow"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  `,
  mounted() {
    lucide.createIcons();
  },
};
