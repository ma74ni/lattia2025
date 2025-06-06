const Menu = {
  data() {
    return {
      pdfDoc: null,
      currentPage: 1,
      totalPages: 0,
    };
  },
  template: `
    <section class="w-[90%] mx-auto py-12">
      <h2 class="font-nerko text-3xl md:text-[36px] text-lila text-center md:text-left mb-6">
        MENÚ DIGITAL
      </h2>

      <div id="pdf-container" class="w-full overflow-x-auto">
        <canvas id="pdf-canvas" class="w-full max-w-full border rounded shadow"></canvas>
      </div>

      <div class="flex justify-between items-center mt-4">
        <button
          @click="prevPage"
          :disabled="currentPage === 1"
          class="bg-lila text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Anterior
        </button>

        <span class="text-lila font-semibold">
          Página {{ currentPage }} / {{ totalPages }}
        </span>

        <button
          @click="nextPage"
          :disabled="currentPage === totalPages"
          class="bg-lila text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Siguiente
        </button>
      </div>
    </section>
  `,
  methods: {
    renderPage(pageNum) {
      this.pdfDoc.getPage(pageNum).then((page) => {
        const container = document.getElementById("pdf-container");
        const canvas = document.getElementById("pdf-canvas");
        const context = canvas.getContext("2d");

        const viewport = page.getViewport({ scale: 1 });
        const desiredWidth = container.offsetWidth;
        const scale = desiredWidth / viewport.width;
        const scaledViewport = page.getViewport({ scale });

        // 👇 Mejora de nitidez
        const ratio = window.devicePixelRatio || 1;
        canvas.width = scaledViewport.width * ratio;
        canvas.height = scaledViewport.height * ratio;
        canvas.style.width = scaledViewport.width + "px";
        canvas.style.height = scaledViewport.height + "px";
        context.setTransform(ratio, 0, 0, ratio, 0, 0);

        page.render({
          canvasContext: context,
          viewport: scaledViewport,
        });
      });
    },

    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.renderPage(this.currentPage);
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.renderPage(this.currentPage);
      }
    },
  },
  mounted() {
    const url = "./assets/pdf/menu_v3.pdf";

    window.pdfjsLib
      .getDocument(url)
      .promise.then((pdf) => {
        this.pdfDoc = pdf;
        this.totalPages = pdf.numPages;
        this.renderPage(this.currentPage);
      })
      .catch((err) => {
        console.error("Error cargando el PDF:", err);
      });
  },
};
