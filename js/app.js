const { createApp, ref, computed, watch, provide, nextTick, onMounted } = Vue;

(async () => {
  const res = await fetch('./assets/data/firebase_lattia_datos_completos.json');
  const datos = await res.json();

  createApp({
    setup() {
      const currentView = ref(getRouteComponent());
      const carrito = ref(JSON.parse(localStorage.getItem("carrito") || "[]"));
      const mostrarCarrito = ref(false);
      const mostrarMenu = ref(false);
      const esEscritorio = ref(window.innerWidth >= 768);

      const actualizarAncho = () => {
        esEscritorio.value = window.innerWidth >= 768;
      };
      window.addEventListener("resize", actualizarAncho);

      const agregarAlCarrito = (item) => carrito.value.push(item);
      const quitarDelCarrito = (index) => carrito.value.splice(index, 1);
      const totalCarrito = computed(() =>
        carrito.value.reduce((acc, p) => acc + (p.precio || 0), 0)
      );

      const nombreCliente = ref("");
      const telefonoCliente = ref("");
      const direccionCliente = ref("");
      const tipoEntrega = ref("Domicilio");

      const enviarPorWhatsapp = () => {
        if (carrito.value.length === 0 || !nombreCliente.value || !telefonoCliente.value) return;

        const mensaje = carrito.value
          .map((item, i) => {
            let linea = `🍦 *${i + 1}. ${item.nombre}* - $${item.precio.toFixed(2)}`;
            if (item.detalle) {
              const detalles = Object.entries(item.detalle)
                .filter(([_, v]) => v)
                .map(([k, v]) => `• ${k}: ${v}`)
                .join("\n");
              linea += `\n${detalles}`;
            }
            return linea;
          })
          .join("\n\n");

        const total = totalCarrito.value.toFixed(2);
        const cliente = `👤 *Cliente:* ${nombreCliente.value}\n📞 *Teléfono:* ${telefonoCliente.value}\n🚚 *Entrega:* ${tipoEntrega.value}`;
        const direccion =
          tipoEntrega.value === "Domicilio" && direccionCliente.value
            ? `\n🏠 *Dirección:* ${direccionCliente.value}`
            : "";

        const texto = encodeURIComponent(
          `👋 ¡Hola! Quiero hacer un pedido:\n\n${mensaje}\n\n💰 *Total:* $${total}\n\n${cliente}${direccion}`
        );
        const telefono = "593XXXXXXXXX";
        const url = `https://wa.me/${telefono}?text=${texto}`;
        window.open(url, "_blank");
      };

      watch(
        carrito,
        () => {
          localStorage.setItem("carrito", JSON.stringify(carrito.value));
        },
        { deep: true }
      );

      watch(mostrarMenu, () => {
        nextTick(() => {
          lucide.createIcons();
        });
      });

      window.addEventListener("hashchange", () => {
        currentView.value = getRouteComponent();
      });

      provide("appContext", { agregarAlCarrito });
      provide("datosLattia", ref(datos));

      return {
        currentView,
        carrito,
        agregarAlCarrito,
        quitarDelCarrito,
        totalCarrito,
        mostrarCarrito,
        enviarPorWhatsapp,
        mostrarMenu,
        esEscritorio,
      };
    },
  }).mount("#app");
})();
