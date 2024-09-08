import { H3Event } from "h3";
import { connectToDatabase } from "~/server/database";
import {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} from "~/server/controller";

const productHandler = async (event: H3Event) => {
  await connectToDatabase();

  switch (event.method) {
    case "GET":
      return getProducts(event);

    case "POST":
      return addProduct(event);

    case "PUT":
      return updateProduct(event);

    case "DELETE":
      return deleteProduct(event);
  }
};

export default defineEventHandler(productHandler);
