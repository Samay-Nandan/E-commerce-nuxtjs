<template>
  <div>
    <h1 class="text-3xl font-bold mb-2">{{ product.name }}</h1>
    <p class="text-gray-700 text-lg mb-4">
      {{ product.description }}
    </p>
    <div class="flex space-x-4">
      <button
        @click="toggleEditing"
        class="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
      >
        Edit Product
      </button>
      <button
        @click="handleDeleteSingleProduct"
        class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
      >
        Delete Product
      </button>
    </div>
  </div>
</template>

<script setup>
import { useToast } from "vue-toastification";
import { deleteSingleProduct } from "~/services/product";

const toast = useToast();
const router = useRouter();

const { product } = defineProps(["product", "toggleEditing"]);

const handleDeleteSingleProduct = () =>
  deleteSingleProduct(product, toast, router);
</script>
