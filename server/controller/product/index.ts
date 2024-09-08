import { H3Event, readBody } from "h3";
import { Product } from "~/server/model";

export const getProducts = async (event: H3Event) => {
  try {
    const products = await Product.find({});
    return {
      message: products,
      success: true,
    };
  } catch (error) {
    return {
      message: error instanceof Error ? error.message : String(error),
      success: false,
    };
  }
};

export const getSingleProduct = async (event: H3Event) => {
  try {
    const { id } = event.context.params || {};
    if (!id) return { message: "Product ID is required", success: false };
    const product = await Product.findById(id);
    if (!product) return { message: "Product not found", success: false };
    return {
      message: product,
      success: true,
    };
  } catch (error) {
    return {
      message: error instanceof Error ? error.message : String(error),
      success: false,
    };
  }
};

export const addProduct = async (event: H3Event) => {
  try {
    const body = await readBody(event);
    await new Product(body).save();
    return {
      message: "Product added successfully",
      success: true,
    };
  } catch (error) {
    return {
      message: error instanceof Error ? error.message : String(error),
      success: false,
    };
  }
};

export const updateProduct = async (event: H3Event) => {
  try {
    const { _id, ...rest } = await readBody(event);
    await Product.findByIdAndUpdate(_id, rest);
    return {
      message: "Product updated successfully",
      success: true,
    };
  } catch (error) {
    return {
      message: error instanceof Error ? error.message : String(error),
      success: false,
    };
  }
};

export const deleteProduct = async (event: H3Event) => {
  try {
    const body = await readBody(event);
    await Product.findByIdAndDelete(body._id);
    return {
      message: "Product deleted successfully",
      success: true,
    };
  } catch (error) {
    return {
      message: error instanceof Error ? error.message : String(error),
      success: false,
    };
  }
};
