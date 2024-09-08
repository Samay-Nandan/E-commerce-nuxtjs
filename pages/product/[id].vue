<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <div class="md:order-2">
      <img
        :src="product.image"
        :alt="product.name"
        class="w-full h-auto max-w-md mx-auto rounded-lg shadow-lg"
      />
    </div>
    <div class="md:order-1">
      <ProductView
        v-if="!isEditing"
        :product="product"
        :toggleEditing="toggleEditing"
      />
      <ProductEdit v-else :product="product" :toggleEditing="toggleEditing" />
    </div>
  </div>
</template>

<script setup>
import { useToast } from "vue-toastification";
import { fetchSingleProduct } from "~/services/product";

const toast = useToast();
const router = useRouter();
const { params } = useRoute();

const isEditing = ref(false);

const toggleEditing = () => {
  isEditing.value = !isEditing.value;
};

const product = await fetchSingleProduct(params, toast, router);
</script>
