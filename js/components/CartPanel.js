const CartPanel = {
  template: `
    <div v-if="mostrarCarrito" class="absolute right-0 mt-2 w-72 bg-white border rounded shadow-lg p-4 z-50">
      <h4 class="font-semibold mb-2">Tu carrito</h4>
      <div v-if="carrito.length === 0">Vacío</div>
      <ul class="max-h-48 overflow-y-auto text-sm space-y-1">
        <li v-for="(item, index) in carrito" :key="index" class="flex justify-between items-center">
          {{ item.nombre }} - {{ item.precio.toFixed(2) }}
          <button @click.stop="quitarDelCarrito(index)" class="text-red-600">❌</button>
        </li>
      </ul>
      <p class="mt-2 font-bold">Total: {{ totalCarrito.toFixed(2) }}</p>

      <form @submit.prevent="enviarPorWhatsapp" class="flex flex-col gap-2 mt-2 text-sm">
        <input
          type="text"
          :value="nombreCliente"
          @input="$emit('update:nombreCliente', $event.target.value)"
          placeholder="Nombre completo"
          required
          class="border p-1 rounded"
        />
        <input
          type="tel"
          :value="telefonoCliente"
          @input="$emit('update:telefonoCliente', $event.target.value)"
          placeholder="Teléfono"
          required
          class="border p-1 rounded"
        />
        <textarea
          :value="direccionCliente"
          @input="$emit('update:direccionCliente', $event.target.value)"
          placeholder="Dirección (si es delivery)"
          rows="2"
          class="border p-1 rounded"
        ></textarea>

        <label class="flex items-center gap-2">
          <input
            type="radio"
            name="entrega"
            value="Domicilio"
            :checked="tipoEntrega === 'Domicilio'"
            @change="$emit('update:tipoEntrega', 'Domicilio')"
          />
          Domicilio
        </label>
        <label class="flex items-center gap-2">
          <input
            type="radio"
            name="entrega"
            value="Recoger en local"
            :checked="tipoEntrega === 'Recoger en local'"
            @change="$emit('update:tipoEntrega', 'Recoger en local')"
          />
          Recoger en local
        </label>

        <button type="submit" class="bg-green-500 text-white py-1 rounded hover:bg-green-600">
          Finalizar pedido
        </button>
      </form>
    </div>
  `,
  props: {
    mostrarCarrito: Boolean,
    carrito: Array,
    totalCarrito: Number,
    quitarDelCarrito: Function,
    enviarPorWhatsapp: Function,
    nombreCliente: String,
    telefonoCliente: String,
    direccionCliente: String,
    tipoEntrega: String,
  },
  emits: [
    'update:nombreCliente',
    'update:telefonoCliente',
    'update:direccionCliente',
    'update:tipoEntrega',
  ],
};
