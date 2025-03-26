import { Comment } from "./comment";
import { Product } from "./product";

export interface ProductsResponse {
  products: Product[];
}

export interface SingleProductResponse {
  product: Product;
}

export interface CommentsResponse {
  comments: Comment[];
}

export interface SingleCommentResponse {
  comment: Comment;
}
