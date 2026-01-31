import { create } from "zustand";
import { mockProducts, type ToyProduct } from "../mock/products";

type ProductsState = {
  products: ToyProduct[];
  addProduct: (product: ToyProduct) => void;
  updateProduct: (id: string, product: Partial<ToyProduct>) => void;
  deleteProduct: (id: string) => void;
};

export const useProductsStore = create<ProductsState>((set) => ({
  products: mockProducts,
  addProduct: (product) =>
    set((state) => ({
      products: [...state.products, product]
    })),
  updateProduct: (id, product) =>
    set((state) => ({
      products: state.products.map((item) =>
        item.id === id ? { ...item, ...product } : item
      )
    })),
  deleteProduct: (id) =>
    set((state) => ({
      products: state.products.filter((item) => item.id !== id)
    }))
}));

