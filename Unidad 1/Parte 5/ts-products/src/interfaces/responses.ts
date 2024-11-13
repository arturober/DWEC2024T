import { Product } from "./product";

export interface ProductListResponse {
    products: Product[];
}

export interface SingleProductResponse {
    product: Product;
}