<template>
  <div class="p-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
    <div v-for="product in products">
      <ProductCard :product="product" />
    </div>
  </div>
</template>

<script setup>
import { useToast } from "vue-toastification";
import { fetchAllProducts } from "~/services/product";
const toast = useToast();

const products = await fetchAllProducts(toast);
</script>
