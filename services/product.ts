import type { ToastInterface } from "vue-toastification";
import { useRouter } from "vue-router";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

interface ApiResponse<T> {
  message: string | T;
  success: boolean;
}

interface Params {
  id: string;
}

export const fetchAllProducts = async (toast: ToastInterface) => {
  const { data } = await useFetch(`/api/product`);

  const product = data.value;

  if (!product?.success) {
    toast.error(product?.message);
    return [];
  } else {
    return product.message;
  }
};

export const fetchSingleProduct = async (
  params: Params,
  toast: ToastInterface,
  router: ReturnType<typeof useRouter>
) => {
  const { data } = await useFetch(`/api/product/${params.id}`, {
    key: params.id,
  });

  const product = data.value;

  if (!product?.success) {
    toast.error(product?.message);
    router.push("/");
    return {};
  } else {
    return product.message;
  }
};

export const updateSingleProduct = async (
  product: Product,
  toast: ToastInterface,
  toggleEditing: Function
) => {
  try {
    const { message, success } = await $fetch<ApiResponse<Product>>(
      `/api/product`,
      {
        method: "PUT",
        body: product,
      }
    );
    if (!success) {
      toast.error(message);
    } else {
      toast.success(message);
      toggleEditing();
    }
  } catch (error) {
    toast.error("An error occurred while updating the product.");
  }
};

export const deleteSingleProduct = async (
  product: Product,
  toast: ToastInterface,
  router: ReturnType<typeof useRouter>
) => {
  try {
    const { message, success } = await $fetch<ApiResponse<Product>>(
      `/api/product`,
      {
        method: "DELETE",
        body: product,
      }
    );

    if (!success) {
      toast.error(message);
    } else {
      toast.success(message);
      router.push("/");
    }
    return success;
  } catch (error) {
    toast.error("An error occurred while deleting the product.");
  }
};
