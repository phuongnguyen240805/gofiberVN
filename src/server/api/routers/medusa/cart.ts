import z from 'zod';
import { publicProcedure } from '../../trpc';
import { medusaClient } from '@/lib/medusaClient';

export const cartRouter = {
  createCart: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input }) => {
      // Logic to create a cart using Medusa client
      const response = await medusaClient.store.cart.create({
        region_id: input.id,
      });
      return response;
    }),
  getCart: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      // Logic to get a cart using Medusa client
      const response = await medusaClient.store.cart.retrieve(input.id, {
        fields: '+items',
      });
      return response;
    }),
  addToCart: publicProcedure
    .input(
      z.object({
        cart_id: z.string(),
        variant_id: z.string(),
        quantity: z.number(),
        metadata: z.record(z.any()),
      }),
    )
    .mutation(async ({ input }) => {
      // Logic to add item to cart using Medusa client
      const response = await medusaClient.store.cart.createLineItem(
        input.cart_id,
        {
          variant_id: input.variant_id,
          quantity: input.quantity,
          metadata: input.metadata,
        },
      );
      return response;
    }),
  completeOrder: publicProcedure
    .input(z.object({ cart_id: z.string() }))
    .mutation(async ({ input }) => {
      try {
        const response = await medusaClient.store.cart.complete(input.cart_id);

        if (response.type === 'order') {
          return {
            success: true,
            order: response.order,
            message: 'Order created successfully',
          };
        } else {
          return {
            success: false,
            error: 'Payment incomplete or requires further action',
            cart: response.cart,
          };
        }
      } catch (error) {
        console.error('Error completing order:', error);
        throw new Error('Failed to complete order');
      }
    }),
  updateLineItemMetadata: publicProcedure
    .input(
      z.object({
        cart_id: z.string(),
        line_item_id: z.string(),
        metadata: z.record(z.any()), // Nhận một object metadata bất kỳ
      }),
    )
    .mutation(async ({ input }) => {
      try {
        // Trong Medusa Store API, cập nhật Line Item nằm trong cart.lineItems
        const { cart } = await medusaClient.store.cart.updateLineItem(
          input.cart_id,
          input.line_item_id,
          {
            quantity: 1,
            metadata: input.metadata,
          },
        );
        return cart;
      } catch (err) {
        console.error('Medusa update error:', err);
        throw new Error('Failed to update line item metadata');
      }
    }),
};
