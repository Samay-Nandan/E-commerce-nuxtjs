<template>
  <div>
    <input
      v-model="product.name"
      type="text"
      class="w-full border border-gray-300 rounded-lg p-2 mb-2 text-3xl font-bold"
      placeholder="Enter product name"
    />
    <textarea
      v-model="product.description"
      class="w-full border border-gray-300 rounded-lg p-2 text-gray-700 text-lg mb-4"
      placeholder="Enter product description"
    />
    <div class="flex space-x-4">
      <button
        @click="handleUpdateSingleProduct"
        class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Update Product
      </button>
      <button
        @click="toggleEditing"
        class="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
      >
        Cancel
      </button>
    </div>
  </div>
</template>

<script setup>
import { useToast } from "vue-toastification";
import { updateSingleProduct } from "~/services/product";

const toast = useToast();

const { product, toggleEditing } = defineProps(["product", "toggleEditing"]);

const handleUpdateSingleProduct = () =>
  updateSingleProduct(product, toast, toggleEditing);
</script>
