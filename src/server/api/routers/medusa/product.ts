import { z } from "zod";
import { publicProcedure } from "../../trpc";
import { medusaClient } from "@/lib/medusaClient";

export const productRouter = {
  getProducts: publicProcedure.query(async () => {
  try {
    const {products}  = await medusaClient.store.product.list({
      limit: 20,
      fields: "*metadata,+*categories,*variants,*variants.prices"
});
    return products;
  } catch (err) {
    console.error("Medusa fetch error:", err);
    throw new Error("Failed to fetch products from Medusa");
  }
}),
  getProduct: publicProcedure
  .input(z.object({ id: z.string() }))
  .query(async ({ input }) => {
    const {product} = await medusaClient.store.product.retrieve(input.id);
    return product;
  }),
  getProductRecent: publicProcedure
  .input(
    z.object({
      ids: z.array(z.string()), // nhận mảng id
    })
  )
  .query(async ({ input }) => {
    try {
      // Lấy products theo mảng id
      const { products } = await medusaClient.store.product.list({
        id: input.ids, // Medusa cho phép truyền mảng
      });

      return products;
    } catch (err) {
      console.error("Medusa fetch error:", err);
      throw new Error("Failed to fetch products from Medusa");
    }
  }),

};