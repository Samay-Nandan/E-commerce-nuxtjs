<template>
  <NuxtLink :to="`/product/${product._id}`">
    <div
      class="bg-white p-4 rounded-md shadow-md flex flex-col justify-center items-center h-full"
    >
      <div class="text-center">
        <img
          class="w-48 mx-auto mb-4 cursor-pointer"
          :src="`${product.image}`"
          :alt="`${product.name}`"
        />
        <h3 class="text-lg font-bold text-gray-800">{{ product.name }}</h3>
      </div>
      <div class="mt-4 text-green-600 font-bold">
        Price: ${{ product.price }}
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>
