import { Product } from "./product";

export interface ProductsResponse {
  products: Product[];
}

export interface SingleProductResponse {
  product: Product;
}
