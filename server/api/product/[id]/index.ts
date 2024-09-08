import { H3Event } from "h3";
import { connectToDatabase } from "~/server/database";
import { getSingleProduct } from "~/server/controller";

const productHandler = async (event: H3Event) => {
  await connectToDatabase();

  switch (event.method) {
    case "GET":
      return getSingleProduct(event);
  }
};

export default defineEventHandler(productHandler);
